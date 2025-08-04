export default function Task({ id, title, completed, onToggle }) {
    return (
        <div className="flex items-center justify-between p-4 border-b bg-white rounded shadow mb-4">
            <span className={completed ? 'line-through text-gray-500' : 'text-gray-900'}>
                {title}
            </span>

            <button className={`px-3 py-1 rounded ${completed ? "bg-red-500 text-white" : "bg-green-500 text-white"}`} onClick={()=> onToggle(id)}>
                {completed ? "Undo" : "Done"}
            </button>
        </div>
    )
}