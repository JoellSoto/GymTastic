import { useState,useEffect } from "react";
import ReactLoading from "react-loading";

import lg from "./Imagens/GYMTASTIC.png";
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

import "./styles.css";


const logo=()=>{

    return (
    <div className='bg-image'>
      <img src={lg} className='img-fluid rounded mx-auto d-block' alt='GYMTASTIC'  width={"70%"} height={"70%"}/>
      <div className='mask' >
        <div className='d-flex justify-content-center align-items-center h-100'>
            <ReactLoading
            type={"bars"}
            color={"#b721ff"}
            height={"0 auto"}
            width={100}
            /> 
        </div>
      </div>
    </div>
  );
}


function Login() {
  let navigate = useNavigate();
  const[msg,setMsg]=useState("");
  let send;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
  let ll="";

  const err=()=>{
    console.log("cheguei");
    ll="Erro no Email ou Password!";
    setMsg("Erro no Email ou Password!");
    console.log(msg);
    console.log("cheguei");
  }
    const sende= async(e)=>{
      send=sende;
      e.preventDefault()

      setTimeout(() => setMsg("Erro no Email ou Password!"), 3000)

      
                          
          
      await axios.post('https://gym-group.herokuapp.com/login',{
          "email":email,
          "password":password
      }).then(response=>{ response.data.status=='ok'?chamada(response):console.log(response);console.log("Cheguei") })
      
     
      
      
 

  
  }

    useEffect(() => {setTimeout(() => {  if(localStorage.getItem("id")!=""){navigate("/Home", { replace: true })} setDone(true);}, 1000);},[])


    const chamada=(e)=>{
      navigate("/Home", { replace: true })
      //props.setVeiculoId(e.data.num)
      localStorage.setItem("id",e.data.id);
      localStorage.setItem("ps",e.data.payment_state);
      console.log(e);
      console.log("O ID é "+localStorage.getItem("id"))
      console.log("O ID é "+localStorage.getItem("ps"))
    }


  return (<>
  
  {!done ? (<div className="container-login" >
            {logo()}

      </div>
        
  
    ) : (
    <div className="container">
      <div className="container-login">
        
        <div className="wrap-login">
        <span className="login-form-title" > Bem vindo </span>
        <br/>
          <form className="login-form">
          

            <span className="login-form-title">
              
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input " : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={(e)=>sende(e,email,password)}>Login</button>
            </div>

            <div className="text-center ">
              <span className="" style={{textColor: 'black',textSize: '20px'}}>{ll} {msg}</span>
              
               <div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )}
  
  </>
)}

export default Login;
