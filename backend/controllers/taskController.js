const Task = require('../models/Task');

const createTask = async (req,res) => {
    const { title , description , dueDate , priority } = req.body;
    const newTask = await Task.create({
        title,
        description,
        dueDate,
        priority,
        user: req.user.id
    });
    res.status(200).json({newTask});
};

const getTasks = async (req,res) => {
    const tasks = await Task.find({ user : req.user.id });
    res.json({tasks});
};
const updateTask = async (req,res) => {
    const taskId = req.params.id;
    const userId = req.user.id;

    let task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    
    if (task.user.toString() !== userId) {
      return res.status(403).json({ message: "Not authorized to update this task" });
    }
    const updatedTask = await Task.findByIdAndUpdate(taskId,req.body, {new : true});
    res.json({updatedTask});
};

const deleteTask = async (req,res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message : "Task deleted" })
};

const markTaskCompleted = async (req,res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id , {completed: true}, { new: true});
    res.json({updatedTask});
};

const updatePriorityTask = async (req,res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id , {priority:req.body.priority} , {new:true});
    res.json({updatedTask});
}

module.exports = { createTask , getTasks , updateTask , deleteTask , markTaskCompleted };