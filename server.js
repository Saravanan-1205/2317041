const express = require("express");
const app = express();
app.use(express.json());


let students = [{
    id: 1,
    username: "saravanan"
}];

//POST
app.post("/students", (req, res) => {
    const id = students.length + 1;
    const student = {
        id: id,
        username: req.body.username
    };
    students.push(student);
    res.status(201).send("Student added successfully");
});

//GET
app.get("/students", (req, res) => {
    res.status(200).send(students);
});

//PUT
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).send("User not Found");
    }
    student.username = req.body.username;
    res.status(200).send("Student updated successfully");
});

//DELETE
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index == -1) {
        return res.status(404).send("User not found");
    }
    students.splice(index, 1);
    res.status(200).send("Student deleted Successfully");
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});