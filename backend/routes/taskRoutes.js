const express = require('express');
const { createTask , getTasks , updateTask , deleteTask , markTaskCompleted } = require('../controllers/taskController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/',protect,createTask);
router.get('/',protect,getTasks);
router.put('/:id',protect,updateTask);
router.delete('/:id',protect,deleteTask);
router.put('/:id/complete',protect,markTaskCompleted);

module.exports = router;