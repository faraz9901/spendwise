import { useState, FormEvent } from "react";
import { useExpenseStore } from "../../store"
import { useModal } from "../../store";
import { PartialExpense } from "../../types";

export default function EditExpense() {

    const { selectedExpense, updateExpense } = useExpenseStore()
    const { hideModal } = useModal()

    const [expense, setExpense] = useState({ ...selectedExpense })

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name
        const value = e.target.value
        setExpense({ ...expense, [name]: value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { id, created_at, ...newDoc } = expense

        updateExpense(id as string, newDoc as PartialExpense)

        hideModal()
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white dark:bg-gray-800 rounded-md w-[500px] p-4">

            <div className="flex justify-between items-center">

                <h3 className="text-xl font-semibold">Edit Expense</h3>

                <button type="button" onClick={hideModal}>x</button>
            </div>

            <label className="block">
                <span>Date</span>
                <input className="w-full" type="date" name="date" value={expense.date} onChange={handleInputChange} />
            </label>

            <label className="block">
                <span>Description</span>
                <input className="w-full" type="text" name="description" value={expense.description} onChange={handleInputChange} />
            </label>

            <label className="block">
                <span>Category</span>
                <input className="w-full" type="text" name="category" value={expense.category} onChange={handleInputChange} />
            </label>

            <label className="block">
                <span>Amount</span>
                <input className="w-full" type="number" name="amount" value={expense.amount} onChange={handleInputChange} />
            </label>



            <button type="submit">Update</button>
        </form>
    )
}

