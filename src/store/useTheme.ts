import { create } from "zustand";
import { ThemeOptions } from "../types";

interface Theme {
    theme: ThemeOptions;
    toggleTheme: () => void;
    changeTheme: (theme: ThemeOptions) => void
}

const useTheme = create<Theme>((set) => ({
    theme: localStorage.getItem('themeMode') as ThemeOptions || ThemeOptions.light,

    toggleTheme() {
        set(state => {
            let requestedTheme = state.theme === ThemeOptions.dark ? ThemeOptions.light : ThemeOptions.dark

            if (requestedTheme === ThemeOptions.dark) document.body.classList.add('dark')

            if (requestedTheme === ThemeOptions.light) document.body.classList.remove('dark')

            localStorage.setItem('themeMode', requestedTheme)
            return { theme: requestedTheme }
        })
    },

    changeTheme(theme) {
        if (theme === ThemeOptions.dark) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }

        set({ theme })
        localStorage.setItem('themeMode', theme)
    }
}));


export default useTheme