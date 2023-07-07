import React from 'react'
import logo from './Logo.png';
import logoName from './LogoName.png';
import Btncoffee from './coffeebutton.png'
import Btncake from './cakebutton.png'
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { Axios, AxiosHeaders } from 'axios';



let logClient = "";

function clientName() {
  for (let index = 0; index < logEmail.length; index++) {
    const element = logEmail[index];
    if(element !== "@"){
    logClient = logClient+element;
    }else{
      break;
    }
  }
}
let logEmail = "";
let status = false;


export default function NavBar() {

    const navStyle = {  
        backgroundColor: "#DBC1AC",
        padding:"0"
    }
    const div2 = {
      paddingLeft:'0',
    }
    const logoStyle = {
        width:"13%",
        height:'100%'
    }
    const logo2Style = {
      width:"13%",
      height:'100%'
  }
    const btnImg = {
      height:'auto',
      width:"100%",
      backgroundSize: 'cover',
      padding:'0',
      margin:'0'
      
    }
    const btn1 ={
      marginLeft:'1%',
      width:"13%",
      backgroundColor:'transparent',
      border:'0'

    }
    const emailFormStyle = {
        marginLeft:"5%",
        width:"300%"
    }
    const passFormStyle = {
        marginLeft:"1%",
        width:"300%"
    }
    const buttonStyle = {
        backgroundColor: "rgb(81,49,27)",
        color: "rgb(255,255,255)",
        marginLeft:"1%",
        width:"100%",
        height:"50%",
        fontSize: "18px"
    }
    
    const [user, setUser] = useState ({
      email:"",
      password:"",
    });

    let {email,password} = user

    let navegate = useNavigate();

    

    const onInputChange = (e) =>{
      setUser({...user,[e.target.name]: e.target.value });
    };
    const onSubmit = async (e) => {
      e.preventDefault();

      if(email!=="" && password!==""){
        try{
            //Post Log In Info
            console.log(await axios.post("http://localhost:8080/api/v1/auth/authenticate",user))
            //Confirmation Success Routing
            logEmail = email;
            clientName();
            status = true;
            navegate("/client");
            alert("Log In Success!");
            

        }
        //Somthing Error
        catch(err){
          alert('Error');
        }
    }
    else if (email=="" || password==""){
     alert("Empty");
    }
    }
  function design() {
    if(status === false){
      return designOut();
    }else{
      return designIn();
    }
     
  }


    function designIn() {
      const navStyle = {  
        backgroundColor: "#DBC1AC",
        padding:"0"
    }
    const div2 = {
      paddingLeft:'0',
    }
    const logoStyle = {
        width:"13%",
        height:'100%'
    }
    const logo2Style = {
      width:"13%",
      height:'100%'
  }
    const btnImg = {
      height:'auto',
      width:"100%",
      backgroundSize: 'cover',
      padding:'0',
      margin:'0'
    }
    const coff ={
      marginLeft:'1%',
      width:"13%",
      backgroundColor:'transparent',
      border:'0'

    }
    const cake ={
      marginLeft:'1%',
      width:"13%",
      backgroundColor:'transparent',
      border:'0'
    }
    const emailFormStyle = {
        marginLeft:"5%",
        width:"300%"
    }
    const passFormStyle = {
        marginLeft:"1%",
        width:"300%"
    }
    const buttonStyle = {
        backgroundColor: "rgb(81,49,27)",
        color: "rgb(255,255,255)",
        marginLeft:"1%",
        width:"100%",
        height:"50%",
        fontSize: "18px",
    }
    const mess = {
      fontSize:'30px'
    }
    return(
        <nav className="navbar navbar-expand-lg" style={navStyle}>
        <div className="container-fluid" style={div2}>
          <img src={logo} style={logoStyle} />
          <Link style={logo2Style} to="/"><img src={logoName}  /></Link>
          <Link style={coff} to="/coffee"><img src={Btncoffee} style={btnImg} /></Link>
          <Link style={cake} to="/cakes"><img src={Btncake} style={btnImg} /></Link>
          <p style={mess}>Hello {logClient}! Have a good day!</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         <div>
          
         </div>
    
  </div>
</nav>

    )}

     function designOut() {
      return(
      <nav className="navbar navbar-expand-lg" style={navStyle}>
        <div className="container-fluid" style={div2}>
        <img src={logo} style={logoStyle} />
        <img src={logoName} style={logo2Style} />
        <Link style={btn1} to="/coffee"><img src={Btncoffee} style={btnImg} /></Link>
        <Link style={btn1} to="/cakes"><img src={Btncake} style={btnImg} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >  
        <form style={emailFormStyle} onSubmit={(e)=>onSubmit(e)}>
            <input 
                    type={"text"}
                    className='form-control'
                    placeholder='Enter e-mail'
                    name='email'
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
        </form>
        <form style={passFormStyle} onSubmit={(e)=>onSubmit(e)}>
            <input 
                    type={"password"}
                    className='form-control'
                    placeholder='Enter password'
                    name='password'
                    value={password}
                    onChange={(e)=>onInputChange(e)}
                    />
        </form>
                    <button className="btn btn-outline-dark" type='submit' style={buttonStyle} onClick={onSubmit}>Log In</button>
            <Link  className="btn btn-outline-dark" type='submit' style={buttonStyle} to="/register">Register</Link>
      
      </div>
    
  </div>
</nav>
      )}

  return (
    <div >
        {design()}
    </div>
  )
}
