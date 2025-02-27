import { create } from "zustand";
import { Expense, PartialExpense } from "../types";

interface ExpenseState {
    expenses: Expense[];
    selectedExpense: Expense | null;
    setSelectedExpense: (expense: Expense) => void;
    addExpense: (expense: PartialExpense) => void;
    removeExpense: () => void;
    updateExpense: (id: string, expense: PartialExpense) => void;
    fetchExpenses: () => void
}

const useExpenseStore = create<ExpenseState>((set) => ({
    expenses: [],
    selectedExpense: null,

    addExpense(expense) {

        // adding a new expense with id and created date
        const toBeAddedExpense: Expense = { ...expense, id: crypto.randomUUID(), created_at: new Date().toISOString() }

        set((state) => {

            const updatedExpenses = [...state.expenses, toBeAddedExpense]

            localStorage.setItem("expenses", JSON.stringify(updatedExpenses))

            return { expenses: updatedExpenses }
        })
    },

    setSelectedExpense(expense) {
        set({ selectedExpense: expense })
    },

    updateExpense(id, updatedExpense) {

        set((state) => {

            const expense = state.expenses.find((expense) => expense.id === id)

            if (!expense) {
                return state
            }

            const newExpenses = state.expenses.map((expense) => {
                if (expense.id === id) {
                    return { ...expense, ...updatedExpense }
                }
                return expense
            })

            localStorage.setItem("expenses", JSON.stringify(newExpenses))

            return {
                expenses: newExpenses,
                selectedExpense: null
            }

        })
    },

    removeExpense() {
        set((state) => {

            const newExpenses = state.expenses.filter((expense) => expense.id !== state.selectedExpense?.id)

            localStorage.setItem("expenses", JSON.stringify(newExpenses))

            return { expenses: newExpenses }
        })
    },


    fetchExpenses() {
        set({ expenses: JSON.parse(localStorage.getItem("expenses") || "[]") })
    },

}));


export default useExpenseStore