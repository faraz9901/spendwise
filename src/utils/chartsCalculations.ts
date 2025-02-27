import { Expense } from "../types";

const getAmountByMonth = (expenses: Expense[]) => {
    return expenses.reduce((acc, expense) => {

        // get year of the expense
        const year = new Date(expense.date).getFullYear()

        // if the expense is not from this year, return
        if (year !== new Date().getFullYear()) return acc

        // get month of the expense
        const month = new Date(expense.date).getMonth()

        // If the month already exists, add to the total; otherwise, initialize
        acc[month] = (acc[month] || 0) + Number(expense.amount);

        return acc;
    }, new Array(12).fill(0) as number[]);
};


const getWeeklyExpensesByDay = (expenses: Expense[]) => {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay()); //getting the start of the week i.e sunday
    startOfWeek.setHours(0, 0, 0, 0); // Reset time to 00:00:00

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // End on Saturday
    endOfWeek.setHours(23, 59, 59, 999); // setting time to 23:59:59

    return expenses.reduce((acc, expense) => {

        const expenseDate = new Date(expense.date);

        if (expenseDate >= startOfWeek && expenseDate <= endOfWeek) {
            const dayIndex = expenseDate.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
            acc[dayIndex] = (acc[dayIndex] || 0) + Number(expense.amount);
        }

        return acc;
    }, new Array(12).fill(0) as number[]);

};


const getLabels = (name: 'month' | "day"): string[] => {
    if (name === 'month') {
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }

    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
}


const getDatasets = (expenses: Expense[], name: 'month' | 'day') => {

    const datasets = [
        {
            fill: true,
            label: 'Expense',
            data: name === "month" ? getAmountByMonth(expenses) : getWeeklyExpensesByDay(expenses),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderWidth: 2,
            pointRadius: 5,
            tension: 0.4, // for curving the line
        }
    ]


    return datasets
}

export { getLabels, getDatasets, getAmountByMonth }