import { Delete, Edit } from '../../assets'
import { useExpenseStore } from '../../store'
import { useModal } from '../../store'
import { Expense, ModalTypes } from '../../types'
import { getDate } from '../../utils'

interface ExpenseTableProps {
    expenses: Expense[]
}

export default function ExpenseTable({ expenses }: ExpenseTableProps) {

    const { showModal } = useModal()
    const { setSelectedExpense } = useExpenseStore()

    function onEdit(expense: Expense) {
        setSelectedExpense(expense)
        showModal(ModalTypes.ExpenseEdit)
    }

    function onDelete(expense: Expense) {
        setSelectedExpense(expense)
        showModal(ModalTypes.ExpenseDelete)
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full  table text-center  shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{getDate(expense.date)}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.category}</td>
                            <td>{expense.description}</td>
                            <td className='flex gap-4  items-center justify-center  '>
                                <Edit onClick={() => onEdit(expense)} />
                                <Delete onClick={() => onDelete(expense)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
