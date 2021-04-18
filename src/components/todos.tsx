import { h } from 'preact';
import { Row, Todo } from './row'
import { someTodos } from '../data'
import { AddTodo } from './addtodo'
import { useState } from 'preact/hooks';


export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>(someTodos)
    const [task, setTask] = useState({title: "", descr: ""})
    const [counter, setCounter] = useState<number>(1)
    
    const remainingTodos = todos.filter(todo => todo.done === true).length
    const todosLength = todos.length

    const handleDeleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id) 
        setTodos(updatedTodos)
    }

    const handleCheckTodo = (id: number) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    done: !todo.done
                }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const handleAddTodo = (newTodo: Todo) => {
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
        setTask({title: "", descr: ""}) // reset

    }

    const handleChange = (e: any) => {
        const { value, name } = e.target as HTMLInputElement
        setTask({
            ...task,
            [name]: value
        })
    }


    const handleSubmitTodo = (e: any) => {
        e.preventDefault()
        setCounter((prev) => prev + 1)
        const todo = {
            id: counter,
            title: task.title,
            descr: task.descr,
            done: false
        }

        task && handleAddTodo(todo)
    }


    return (
        <section className="shadow-md rounded-sm p-5 dark:bg-gray-700">
            <h1 className="text-3xl mb-5 text-indigo-500 dark:text-yellow-300">My todos</h1>
            <div>
            { todos.map(todo => (
               <Row key={todo.id} todo={todo} 
               handleDeleteTodo={handleDeleteTodo} 
               handleCheckTodo={handleCheckTodo}
               /> 
            ))}
            </div>
            <p>Remaining to-dos: <span className="font-bold">{remainingTodos} out of {todosLength}</span></p>
            <AddTodo 
                title={task.title}
                descr={task.descr}
                handleChange={handleChange}
                handleSubmitTodo={handleSubmitTodo}

                />

        </section>
    )
}