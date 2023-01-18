import {Routes,Route} from "react-router-dom"
import Homepage from "../Pages/Homepage"
export default function Allroutes(){
    return(
    <Routes>
        <Route path="/" element={<Homepage/>}/>
    </Routes>
    )
}