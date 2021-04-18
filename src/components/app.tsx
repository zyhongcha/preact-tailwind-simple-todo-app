import { FunctionalComponent, h } from "preact"
import { ModeSwitch } from "./modeswitch"
import { Todos } from "./todos"



const App: FunctionalComponent = () => {
    return (
    <div
      id="preact_root"
      className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 dark:text-white"
    >
      <Todos />
      <ModeSwitch />
    </div>
  )
}

export default App
