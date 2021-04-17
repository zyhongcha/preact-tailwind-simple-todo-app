import { h } from 'preact';


export type Todo = {
    id: number
    title: string
    descr: string
    done: boolean 
}

type TodoProps = {
    todo: Todo
    handleDeleteTodo: (id: number) => void
    handleCheckTodo: (id: number) => void
}

export const Row = ({todo: {id, title, descr, done},
    handleDeleteTodo,
    handleCheckTodo
}: TodoProps ) => (
        <div className={`flex w-full p-4 mb-2 gap-x-8 justify-between items-center ${done ? "filter grayscale" : "bg-gray-200"}`}>
        <span className={`ml-2 text-xl font-sans ${done ? "line-through" : "text-gray-700"}`}>
        <p className="font-medium">{title}</p>
        <p className="text-sm">{descr}</p>
        </span>
        <div className="flex justify-right items-center gap-x-3">
        <button aria-label="Delete a todo" 
            className="h-7 px-2 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold rounded"
            onClick={() => handleDeleteTodo(id) }>Delete</button>
        <input type="checkbox" 
            className="form-checkbox h-7 w-7" 
            checked={done} onChange={() => handleCheckTodo(id)} />
            </div>
        </div>
    )