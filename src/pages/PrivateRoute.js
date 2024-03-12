// import { useState } from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children})=>{
    console.log("children=======>",children)
    // const [token,setToken] = useState("")
    // const navigate = useNavigate()
    if(localStorage.getItem("token")){
        // console.log("if==========")
        return children

    }else{
        // console.log("else==========");
        return <Navigate to="/" />

    }

}

export default PrivateRoute