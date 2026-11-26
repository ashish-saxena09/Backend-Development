// CRUD Operation Through Express

const express = require("express");

// Create Server
const app = express();

// Middleware
app.use(express.json());

// Temp Data
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

// Get Method
// Testing Route
app.get("/test", (req, res) => {
  res.send("testing a server");
});

// Temp Data Route
app.get("/students", (req, res) => {
  res.send(students);
});

// Get By Dynamic Id
app.get("/getUser/:id", (req, res) => {
  const userId = Number(req.params.id);
  const student = students.find((u) => u.id === userId);

  if (!student) {
    return res.status(404).json({ msg: "Student not found with this id" });
  }
  res.status(200).json({ msg: `Student with id ${userId}`, data: student });
});

// Post Method
app.post("/create-student", (req, res) => {
  const { name, age } = req.body;
  if (!name || age === null) {
    return res.status(400).json("Name and Age are required");
  }
  const userId = students.length + 1;
  const newStudents = { name: name, age: age, id: userId };
  students.push(newStudents);
  res.json({ msg: "User created successfully", data: newStudents });
});

// Start Server
const port = 3000;
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
