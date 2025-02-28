import { useExpenseStore } from "../../store"
import { getAmountByMonth } from "../../utils/chartsCalculations"


export default function MonthSpending() {

    const expenses = useExpenseStore(state => state.expenses)

    const getAllMonthSpendings = getAmountByMonth(expenses)

    const currentMonth = new Date().getMonth()

    return (
        <div className="flex  justify-center items-center">


            <div className=" bg-gradient-to-r from-sky-700 to-emerald-500 flex relative flex-col gap-3 justify-center items-center  text-slate-50 md:h-48 md:w-96  2xl:w-[800px] 2xl:h-[400px] py-10  w-full h-full  rounded-lg ">

                <div className="flex items-center gap-2 absolute top-2 left-2">
                    <img className="h-7 bg-slate-50 rounded-full" src="/logo.png" />   SpendWise
                </div>

                <h3 className="md:text-xl  ">
                    Current Month Total Spending
                </h3>

                <h2 className="md:text-4xl italic ">
                    Rs. {getAllMonthSpendings[currentMonth]}
                </h2>

            </div>

        </div>
    )
}
