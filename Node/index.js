const http = require("http")

// Our temporary student data mongodb
let students = [
  {
    id: 1,
    name: "Yogesh",
    age: 25,
  },
  {
    id: 2,
    name: "Rahul",
    age: 22,
  },
];

// Create Server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

// Post Request
  if (req.method === "POST" && req.url === "/students") {
    let body = "";
    // Receive data from request
    req.on("data", (chunk) => {
      body += chunk;
    });

    // When complete data is received
    req.on("end", () => {
      // Convert JSON string into object
      const data = JSON.parse(body);

      // Create new student
      const newStudent = {
        id: students.length + 1,
        name: data.name,
        age: data.age,
      };

      // Add student to array
      students.push(newStudent);

      // Send response
      res.end(
        JSON.stringify({
          message: "Student created",
          student: newStudent,
        }),
      );
    });
  }


  // READ
  // GET /students
  // =================================
  else if (req.method === "GET" && req.url === "/students") {
    // Send all students
    res.end(JSON.stringify(students));
  }


  // UPDATE
  // PUT /students
  else if (req.method === "PUT" && req.url === "/students") {
    let body = "";

    // Receive data
    req.on("data", (chunk) => {
      body += chunk;
    });

    // When data is complete
    req.on("end", () => {
      const data = JSON.parse(body);

      // Find student using ID
      const student = students.find((student) => student.id === data.id);

      // If student does not exist
      if (!student) {
        res.statusCode = 404;
        return res.end(
          JSON.stringify({
            message: "Student not found",
          }),
        );
      }

      // Update student
      student.name = data.name;
      student.age = data.age;

      // Send response
      res.end(
        JSON.stringify({
          message: "Student updated",
          student: student,
        }),
      );
    });
  }


  // DELETE
  // DELETE /students
  else if (req.method === "DELETE" && req.url === "/students") {
    let body = "";

    // Receive data
    req.on("data", (chunk) => {
      body += chunk;
    });

    // When data is complete
    req.on("end", () => {
      const data = JSON.parse(body);

      // Find student index
      const index = students.findIndex((student) => student.id === data.id);

      // If student does not exist
      if (index === -1) {
        res.statusCode = 404;

        return res.end(
          JSON.stringify({
            message: "Student not found",
          }),
        );
      }

      // Delete student
      students.splice(index, 1);

      // Send response
      res.end(
        JSON.stringify({
          message: "Student deleted",
        }),
      );
    });
  }

  // =================================
  // INVALID ROUTE
  // =================================
  else {
    res.statusCode = 404;

    res.end(
      JSON.stringify({
        message: "Route not found",
      }),
    );
  }
});

// Start Server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
