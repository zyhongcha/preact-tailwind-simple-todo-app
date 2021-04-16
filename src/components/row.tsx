import { FunctionalComponent, h } from 'preact';


export type Todo = {
    id: number
    title: string
    descr: string
    done: boolean 
}

export type TodoProps = {
    todo: Todo
}

// function Row({todo: {title, descr, done}}: TodoProps ) {
export const Row = ({todo: {title, descr, done}}: TodoProps ) => (
        <div>
        <p>{title}</p>
        <p>{descr}</p>
        <p>{done}</p>

        </div>
    )