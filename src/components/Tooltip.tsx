import React from 'react'

export default function Tooltip({ children, text }: { children: React.ReactNode, text: string }) {
    return (
        <div className='relative group'>
            <span className='absolute group-hover:inline -top-7 hidden text-nowrap text-xs  bg-gray-500 text-white dark:bg-white dark:text-gray-800 py-1 px-2 rounded'>
                {text}
            </span>
            {children}
        </div>
    )
}
