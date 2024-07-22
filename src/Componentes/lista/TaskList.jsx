import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    index={index}
                    onToggleTask={onToggleTask}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;
