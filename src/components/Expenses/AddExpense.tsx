import React, { FormEvent, useState } from 'react'
import { useModal } from '../../store'
import { useExpenseStore } from '../../store'
import { PartialExpense } from '../../types'

export default function AddExpense() {

    const { hideModal } = useModal()
    const { addExpense } = useExpenseStore()

    const [expense, setExpense] = useState({
        date: '',
        description: '',
        category: '',
        amount: 0
    })

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name
        const value = e.target.value
        setExpense({ ...expense, [name]: value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const updatedExpense: PartialExpense = {
            date: expense.date,
            description: expense.description,
            category: expense.category,
            amount: expense.amount
        }
        addExpense(updatedExpense)

        hideModal()
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white dark:bg-gray-800 rounded-md w-[500px] p-4">

            <div className="flex justify-between items-center">

                <h3 className="text-xl font-semibold">Add Expense</h3>

                <button type='button' onClick={hideModal}>x</button>
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

            <button type="submit">Add</button>
        </form>
    )
}
