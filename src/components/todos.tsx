import { h } from 'preact';
import { Row } from './row'
import { someTodos } from '../data'



export const Todos = () => {
    return (
        <section>
            { someTodos.map(todo => (
               <Row key={todo.id} todo={todo} /> 
            ))}
        </section>
    )
}