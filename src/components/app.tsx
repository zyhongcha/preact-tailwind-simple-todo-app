import { FunctionalComponent, h } from 'preact';
import {Todos} from './todos'

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root" className="h-screen flex justify-center items-center bg-gray-100">
            <Todos/>
        </div>
    );
};

export default App;
