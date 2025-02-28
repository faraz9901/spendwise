import { Link } from 'react-router-dom';
import { useExpenseStore } from '../../store';
import { Expense } from '../../types';
export default function RecentExpenses() {

    const { expenses } = useExpenseStore()

    const recentExpenses = [...expenses].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);


    return (
        <section className='p-3'>
            <div className='flex justify-between pb-3 border-b border-gray-500 dark:border-slate-100'>
                <h1 className='text-2xl font-bold '>Recent Expenses</h1>
                <Link to={'/expenses'}  >View All</Link>
            </div>
            <div className='flex flex-col gap-4 pt-3' >
                {recentExpenses.map(expense => <Card key={expense.id} expense={expense} />)}
            </div>
        </section>
    )
}


function Card({ expense }: { expense: Expense }) {

    return (
        <div className=' text-gray-700 dark:text-slate-50 grid grid-cols-3 bg-white dark:bg-gray-500 shadow-md p-2 pr-6 rounded-lg '>
            <div className='col-span-2'>
                <p className='text-lg font-semibold' >
                    {expense.description} - <span className='text-gray-500 dark:text-slate-100 text-sm'>{expense.category}</span>
                </p>
                <p className='text-sm italic dark:text-gray-200'>{new Date(expense.date).toDateString()}</p>
            </div>
            <p className='text-end text-red-500 dark:text-slate-50'> Rs. {expense.amount}</p>
        </div>
    )
}