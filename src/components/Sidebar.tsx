import { NavLink } from "react-router-dom"


const sidebarLinks = [
    { href: "/", label: "Dashboard" },
    { href: "/expenses", label: "Expenses" },
]

const Sidebar = () => {


    return (
        <aside className="h-full min-h-screen py-10 px-3 items-center  flex-col gap-10 shadow-2xl hidden lg:flex  dark:border-r dark:border-slate-300">


            <div className="flex items-center gap-2">
                <img className="h-7 bg-slate-50 rounded-full" src="/logo.png" />   SpendWise
            </div>



            <div className="text-center">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIlzGp1laQheiAAjrbJJ3pasHLjMBnIUEZg&s" className="rounded-full h-32" />

                User

            </div>







            <ul className="flex flex-col gap-4">
                {sidebarLinks.map((link) => (
                    <li key={link.label}>
                        <NavLink
                            to={link.href}
                            className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar