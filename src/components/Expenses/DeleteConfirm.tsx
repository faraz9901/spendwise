import { useExpenseStore } from "../../store"
import { useModal } from "../../store"

export default function DeleteConfirm() {
    const { hideModal } = useModal()
    const { removeExpense } = useExpenseStore()

    const onDelete = () => {
        removeExpense()
        hideModal()
    }

    return (
        <div className="bg-gray-100 flex flex-col gap-5  dark:bg-gray-800 p-5 text-center shadow-2xl rounded-xl w-[500px]">

            <p>Are you sure you want to delete?</p>

            <div className="flex gap-3 justify-center">
                <button onClick={onDelete} className="bg-red-500 text-white">Delete</button>
                <button onClick={hideModal}>Cancel</button>
            </div>

        </div>
    )
}
