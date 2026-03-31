const { tasks } = require('../models/task');

exports.getTasks = (req, res) => {
    res.json(tasks);
};

exports.createTask = (req, res) => {
    const { title } = req.body;
    const newTask = { id: Date.now(), title };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index !== -1) {
        tasks.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ message: "No encontrada" });
    }
};