import { Moon, Sun } from "../assets"
import { useTheme } from "../store"

export default function ThemeButton() {

    const toggleTheme = useTheme(state => state.toggleTheme)

    return (
        <button onClick={() => toggleTheme()} className="fixed z-50 right-1 top-2">
            {/* Moon Svg */}
            <Moon className="block dark:hidden" />

            {/* Sun Svg */}
            <Sun className=" hidden dark:block" />

        </button>
    )
}