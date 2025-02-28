import { useState } from "react";
import { ExpensesGraph, MonthSpending, RecentExpenses } from "../components";
import { useExpenseStore } from "../store";
import { getDatasets, getLabels } from "../utils/chartsCalculations";
import { useDocumentTitle } from "../utils";

export default function Home() {
    useDocumentTitle('SpendWise | Dashboard')

    const [graphType, setGraphType] = useState<'day' | 'month'>('day')
    const expenses = useExpenseStore(state => state.expenses)

    return (
        <>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">

                <MonthSpending />

                <div className="flex grow flex-col justify-center items-start">

                    <select className=" focus:outline-none bg-white text-gray-800  dark:bg-gray-500 dark:text-slate-50   rounded-lg p-2" value={graphType} onChange={(e) => setGraphType(e.target.value as 'day' | 'month')}>
                        <option value="day">Day</option>
                        <option value="month">Month</option>
                    </select>

                    <ExpensesGraph labels={getLabels(graphType)} datasets={getDatasets(expenses, graphType)} titleText="Expenses (in Rs)" />
                </div>

            </div>

            <RecentExpenses />
        </>

    )
}
