import { h } from 'preact';
import PlusSign from '../assets/done_black_24dp.svg'


export type AddTodoProps = {
    title: string
    descr: string
    handleSubmitTodo: (e: any) => void
    handleChange: (e: any) => void
}

export const AddTodo =  ({
    title, descr,
     handleSubmitTodo,
    handleChange
}: AddTodoProps ) => {
    return (
        <form onSubmit={handleSubmitTodo}>
            <label for="title">Title</label>
            <input type="text" name="title" value={title} onInput={handleChange} />
            <label for="descr">Description</label>
            <input type="text" name="descr" value={descr} onInput={handleChange} />
            <button type="submit" aria-label="Add to-do to list">
            {/* <PlusSign /> */}
            </button>
        </form>
    )
}