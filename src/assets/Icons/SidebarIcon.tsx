import { IconProps } from "../../types"

const SidebarIcon = ({ className, ...props }: IconProps) => (
    <svg
        className={`w-6 h-6 ${className}`}
        {...props}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 6H6m12 4H6m12 4H6m12 4H6"
        />
    </svg>
)

export default SidebarIcon

