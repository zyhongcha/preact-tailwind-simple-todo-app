import { FunctionalComponent, h } from 'preact';


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
        <div>
        <p>{title}</p>
        <p>{descr}</p>
        <p>{done}</p>
        <button aria-label="Delete a todo" onClick={() => handleDeleteTodo(id) }>Delete</button>
        <input type="checkbox" checked={done} onChange={() => handleCheckTodo(id)} />
        </div>
    )