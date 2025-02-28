import { NavLink } from "react-router-dom"
import { SidebarIcon } from "../assets"
import { useState } from "react"


const sidebarLinks = [
    { href: "/", label: "Dashboard" },
    { href: "/expenses", label: "Expenses" },
]


const Sidebar = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)


    return (
        <>
            <button onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="inline md:hidden z-30 fixed top-2 left-2">
                <SidebarIcon />
            </button>

            <div className={`md:hidden dark:bg-gray-600 bg-slate-100  fixed top-0 left-0 w-1/2 duration-300 z-20   ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"} `}>
                <SidebarContent />
            </div>


            <div className="hidden md:block">
                <SidebarContent />
            </div>
        </>
    )
}

export default Sidebar


const SidebarContent = () => (
    <aside className={`flex items-center pt-10 flex-col gap-10 shadow-2xl min-h-screen  dark:border-r duration-300 dark:border-slate-300 `}>

        <div className="flex items-center gap-2">
            <img className="h-7 bg-slate-50 rounded-full" src="/logo.png" />   SpendWise
        </div>

        <div className="text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIlzGp1laQheiAAjrbJJ3pasHLjMBnIUEZg&s" className="rounded-full h-32" />
            User
        </div>

        <ul className="flex flex-col  items-center gap-4">
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
