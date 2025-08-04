import { usestate } from 'react';

export default function TaskForm({ onAdd }) {
    const [title, setTitle] = usestate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
                className="w-full p-2 border rounded mb-2"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                Add Task
            </button>
        </form>
    );
}
// This component allows users to add new tasks to the todo list. It includes an input field