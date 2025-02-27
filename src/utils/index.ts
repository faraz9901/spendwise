import downLoadExcelFromData from "./excel";

const changeThemeMode = (theme?: string | null) => {

    const body = document.body

    switch (theme) {

        case "dark":
            body.classList.add('dark');
            localStorage.setItem('themeMode', 'dark');
            break;

        case "light":
            body.classList.remove('dark');
            localStorage.setItem('themeMode', 'light');
            break;

        default: // if no args or invalid args is passed toggles the current theme
            if (body.classList.contains('dark')) {
                body.classList.remove('dark');
                localStorage.setItem('themeMode', 'light');
            } else {
                body.classList.add('dark');
                localStorage.setItem('themeMode', 'dark');
            }
            break;
    }

}


const getDate = (date: string) => new Date(date).toLocaleDateString('en-IN')



export { changeThemeMode, getDate, downLoadExcelFromData }