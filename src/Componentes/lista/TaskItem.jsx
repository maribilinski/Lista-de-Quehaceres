import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, index, onToggleTask, onDeleteTask }) => {
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => onToggleTask(index)}>{task.text}</span>
            <button onClick={() => onDeleteTask(index)}>Eliminar</button>
        </li>
    );
};

export default TaskItem;
