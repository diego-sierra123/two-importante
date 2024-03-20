import React, { useState } from 'react';

function Uno() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = index => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = index => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="text-center">
        <h1>EJERCICIO 1</h1>
        <br></br>
        <h4 className="text-dark"><b>AGREGAR TAREAS</b></h4>
      </div>
      <br></br>
      <br></br>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Enter new task"
        style={{ fontSize: '25px', marginRight: '25px' }}
      />
      <button className='btn btn-success' style={{ fontSize: '20px' }} onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>

            <br></br>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              style={{ fontSize: '50px' }}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none', fontSize: '40px', marginLeft: '25px', marginRight: '25px' }}>
              {task.text}
            </span>
            <button className='btn btn-danger' onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Uno;
