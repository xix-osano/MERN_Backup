import { useState } from 'react'
import Task from './components/Task'

export default function App(){
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a Todo App', completed: false },
    { id: 3, title: 'Deploy to Vercel', completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      {tasks.map(task => (
        <Task key={task.id} {...task} onToggle={() => toggleTask(task.id)} />
      ))}
    </div>
  );
}
