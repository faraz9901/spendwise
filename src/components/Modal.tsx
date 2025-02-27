import { useModal } from "../store"
import { ModalTypes } from "../types"
import AddExpense from "./Expenses/AddExpense"
import DeleteConfirm from "./Expenses/DeleteConfirm"
import EditExpense from "./Expenses/EditExpense"

export default function ModalContainer() {
    const { show, type } = useModal()

    if (!show) return null

    return (
        <div className='fixed z-50 h-screen w-screen top-0 backdrop-blur-xs flex justify-center items-center'>
            <ModalContent type={type} />
        </div>
    )
}



const ModalContent = ({ type }: { type: ModalTypes }) => {
    switch (type) {
        case ModalTypes.ExpenseEdit:
            return <EditExpense />
        case ModalTypes.ExpenseAdd:
            return <AddExpense />
        case ModalTypes.ExpenseDelete:
            return <DeleteConfirm />
        default: return null
    }
}
