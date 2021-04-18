import { h } from "preact"
import { useDarkMode } from "../hook/useDarkMode"


export const ModeSwitch = () => {
    const [colorTheme, setTheme]: any  = useDarkMode()

    const handleChange = () => {
        setTheme(colorTheme)
    }
    return (
  <div className="flex space-x-2 mt-6">
    <span className={`text-sm ${colorTheme === 'dark' ? "text-gray-800" : "text-gray-400"  }`}>Light</span>
    <div>
      <input type="checkbox" name="toggle" id="toggle" className="hidden" onChange={handleChange}/>
      <label htmlFor="toggle">
        <div className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1">
          <div className={`toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform duration-200 ease-in-out ${colorTheme === 'light' ? "translate-x-4" : "translate-x-0"}`}></div>
        </div>
      </label>
    </div>
    <span className={`text-sm ${colorTheme === 'light' ? "text-white" : "text-gray-400"  }`} >Dark</span>
  </div>
    )
}

