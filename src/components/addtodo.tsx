import { h } from 'preact';

const Plus = () => (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>)


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
        <form onSubmit={handleSubmitTodo} className="mt-10">
            <h2 className="text-2xl text-indigo-500 dark:text-yellow-300">Add a new to-do</h2>
            <label for="title">Title:</label>
            <input className="block h-8 w-full" type="text" name="title" required value={title} onInput={handleChange} />
            <label for="descr">Description:</label>
            <input className="block h-8 w-full" type="text" name="descr" required value={descr} onInput={handleChange} />
            <button type="submit" className="block text-right bg-yellow-300 dark:bg-indigo-500 p-1 float-right" aria-label="Add to-do to list">
            <Plus/>
            </button>
        </form>
    )
}