import "./Login.css"
import loginBanner from "../../../asset/images/loginBanner.jpg"
import { FaGoogle,FaMicrosoft } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { loginHandle } from "../../../redux/features/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    console.log("session storage==========>",localStorage)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [showModal,setShowModal] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = ()=>{
        if(email && password){
            localStorage.setItem("token",true)
            // console.log("token in storage",localStorage.getItem("token"))
            dispatch(loginHandle({email,password}))
            navigate("/dashboard",{state:{name:"suraj",lName:"singh"}});
        }else{
            setTimeout(()=>{
                setError("")
            },2000)
            setError("Both fields are mandatory.")
        }
    }

    const handleModal = ()=>{
        setShowModal(true)
    }
    return <div className="login">
        <div className="login-content">
            <div className="login-content-logo">
                <h1>MailerLite Logo</h1>
            </div>
            <div className="login-content-form">
                <h1>Sign in to your MailerLite account</h1>
                <h3>Don't have an account yet? Sign up</h3>
                <div  className="login-content-form-content">
                    <div className="login-content-form-content-row">
                    <label htmlFor="">Email address</label>
                    <input value={email} type="text" onChange={(e)=>{
                            setEmail(e.target.value)

                        }} />

                    </div>
                    
                    <div className="login-content-form-content-row">
                    <label htmlFor="">Password</label>
                    <input value={password} type="password" onChange={(e)=>{
                            setPassword(e.target.value)
                        }} />

                    </div>
                    <div className="login-content-form-content-forgot">
                    <div style={{display:"flex",alignItems:"center"}}>
                        <input  type="checkbox" style={{marginRight:"10px"}} />
                        <p>Remember Me</p>
                    </div>
                    <div>
                        <p>Forgot your Password?</p>
                    </div>
                    </div>
                    <div className="login-content-form-content-row">
                    {
                        error && <p style={{color:"red",textAlign:"center"}}>{error}</p>
                    }
                    </div>
                    <div className="login-content-form-content-row">
                    <button onClick={()=>{handleLogin()}}>Sign In</button>
                    </div>
                    
                    <div style={{margin:"30px 0px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{padding:"0.5px 0px",backgroundColor:"#ECEDF0",width:"45%"}}></div>
                        <p style={{color:"#644F48"}}>or</p>
                        <div style={{padding:"0.5px 0px",backgroundColor:"#ECEDF0",width:"45%"}}></div>
                    </div>
                    <div className="login-content-form-content-btn">
                        <div onClick={()=>{handleModal()}} className="login-content-form-content-btn-content">
                            <FaGoogle style={{marginRight:"10px"}} />
                            Google
                        </div>
                        <div className="login-content-form-content-btn-content">
                        <FaMicrosoft style={{marginRight:"10px"}} />
                            Microsoft
                        </div>

                    </div>

                </div>
            </div>

        </div>
        <div className="login-banner">
        {
            showModal && <div className="login-modal">
                <div className="login-modal-content">
                    <h1>Heading Modal</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis similique, ullam est rerum deserunt odit qui quas quisquam error amet!</p>
                        <button onClick={()=>{setShowModal(false)}}>Close Modal</button>
                    </div>
                </div>
                </div>
        }
            <img src={loginBanner} alt="" height="100%" width="100%" />
        </div>
        
    </div>
}
export default Login