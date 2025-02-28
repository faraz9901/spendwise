import { useNavigate } from "react-router-dom"
import { useDocumentTitle } from "../utils"


export default function NotFound() {

    useDocumentTitle('Page not found')
    const navigate = useNavigate()

    return (
        <div className='h-96  flex justify-center items-center'>

            <div className="text-center" >

                <h2 className="text-3xl mb-5 font-bold">Page not found</h2>

                <button onClick={() => navigate(-1)} >Go back</button>


            </div >


        </div >
    )
}
