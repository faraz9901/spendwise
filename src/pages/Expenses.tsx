import { useState } from "react"
import { ExpenseTable, Tooltip } from "../components"
import { useExpenseStore } from "../store"
import { useModal } from "../store"
import { Expense, ModalTypes } from "../types"
import { Info } from "../assets"
import { downLoadExcelFromData, useDocumentTitle } from "../utils"

interface Filter {
    category: string
    amount: string
    from: string
    to: string
}

export default function Expenses() {

    useDocumentTitle('SpendWise | Expenses')

    const { expenses } = useExpenseStore()
    const { showModal } = useModal()

    const [filters, setFilters] = useState<Filter>({
        category: "",
        amount: "",
        from: "",
        to: ""
    })

    function getFilteredExpenses(): Expense[] {

        const { category, amount, from, to } = filters

        let queryResults = [...expenses].sort((a, b) => b.date.localeCompare(a.date))

        if (category) {
            queryResults = expenses.filter(expense => expense.category.toLowerCase().includes(category.toLowerCase()))
        }

        if (amount) {
            queryResults = expenses.filter(expense => Number(expense.amount) >= Number(amount))
        }

        if (from) {
            queryResults = expenses.filter(expense => expense.date > from)
        }

        if (to) {
            queryResults = expenses.filter(expense => expense.date < to)
        }

        return queryResults
    }

    function clearFilters() {
        setFilters({ category: "", amount: "", from: "", to: "" })
    }

    function handleSearchFilter(e: React.ChangeEvent<HTMLInputElement>) {
        const name = e.target.name
        const value = e.target.value

        // check if amount is a number
        if (name === 'amount' && !/^\d*\.?\d*$/.test(value)) return

        setFilters({ ...filters, [name]: value })
    }
    function download() {
        const columns = [
            { header: "Date", key: "date", width: 20 },
            { header: "Amount", key: "amount", width: 20 },
            { header: "Category", key: "category", width: 20 },
            { header: "Description", key: "description", width: 20 },
        ]

        downLoadExcelFromData(filteredExpenses, columns, 'expenses')
    }

    let filteredExpenses = getFilteredExpenses()

    return (

        <div className="flex flex-col gap-3">

            <h1 className="font-bold text-2xl">Expenses</h1>

            {/* Search Box */}
            <div className="flex  flex-col md:flex-row md:justify-evenly gap-3  rounded-lg p-2  bg-gray-100  dark:bg-gray-700">
                <div className="flex flex-col gap-2">
                    <label htmlFor="category" className="font-bold">Search by Category</label>
                    <input id="category" name="category" type="search" value={filters.category} onChange={handleSearchFilter} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="amount" className="font-bold inline-flex gap-2">
                        Search by Amount
                        <Tooltip text="Results will be greater than this amount">
                            <Info />
                        </Tooltip>
                    </label>
                    <input id="amount" name="amount" type="search" value={filters.amount} onChange={handleSearchFilter} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="from" className="font-bold">From Date</label>
                    <input id="from" name="from" type="date" value={filters.from} onChange={handleSearchFilter} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="to" className="font-bold">To Date</label>
                    <input id="to" name="to" type="date" value={filters.to} onChange={handleSearchFilter} />
                </div>

                <div className="flex  items-end  gap-3">
                    <button onClick={clearFilters} type="button">Clear</button>
                    <button onClick={download} type="button">
                        Download
                    </button>
                </div>

            </div>

            <div className="flex justify-end">
                <button onClick={() => showModal(ModalTypes.ExpenseAdd)} >+ Add Expense</button>
            </div>

            {/* Expenses Table */}
            {filteredExpenses.length > 0 ? <ExpenseTable expenses={filteredExpenses} /> : <div className="text-center mt-24">No Expenses Found</div>}

        </div>
    )
}
