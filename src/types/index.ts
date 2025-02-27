interface Expense {
    created_at: string,
    amount: number,
    category: string,
    description: string,
    date: string
    id: string
}

interface PartialExpense {
    amount: number,
    category: string,
    description: string,
    date: string
}


interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
}


export enum ModalTypes {
    ExpenseEdit = 'expense-edit',
    ExpenseAdd = 'expense-add',
    ExpenseDelete = 'expense-delete'
}

export enum ThemeOptions {
    light = 'light',
    dark = 'dark'
}


export type { Expense, IconProps, PartialExpense }