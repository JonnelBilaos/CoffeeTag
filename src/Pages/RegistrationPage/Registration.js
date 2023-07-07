import React, { useState } from 'react'
import NavBar from '../../Components/NavBar'
import backgroundimg from '../Background.jpg'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Registration() {
const formLayout = {
  paddingRight:'60%',
  paddingLeft: '15%',
  paddingTop: '2%',
}
const space = {
  paddingTop: '2%'
}
const buttonStyle = {
  float: "left",
  marginTop: "2%",
  marginLeft: "20%",
  backgroundColor: "rgb(81,49,27)",
  color: "rgb(255,255,255)",
  height:"50%",
  fontSize: "18px",
}
const linkStyle = {
  float: "left",
  marginTop: "2%",
  marginLeft: "2%",
  backgroundColor: "rgb(81,49,27)",
  color: "rgb(255,255,255)",
  height:"50%",
  fontSize: "18px",
}


const bodyStyle = {
    backgroundImage: `url(${backgroundimg})`,
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width:'100%',
}

let navegate = useNavigate();

const cancel = () => {
  navegate("/")
}

const [regAcc,setAcc] = useState({
  name:'',
  address:'',
  contactNum:'',
  email:'',
  password:'',
  conpass: ''
});

const onInputChange = (e) =>{
  setAcc({...regAcc,[e.target.name]: e.target.value});
};

let {name, address, contactNum, email, password, conpass} = regAcc;




const onSubmit = async (e) => {
      e.preventDefault();
      if(name==="" || address==="" || contactNum==="" || email==="" || password==="" || conpass===""){
        alert("Fill all fields");
    }
    else if(password !== conpass){
        alert("Password not match");
    }
    else if(password === conpass){
      await axios.post("http://localhost:8080/api/v1/auth/register",regAcc)
      alert("Create Account Success!");
      navegate("/");
    }
    else{
      alert("Somthing Wrong!");
    }
}


  return (
    <div>
      <div className='body bg-body-tertiary' style={bodyStyle}>
      <NavBar />
      <div>
      <form style={formLayout}>
        <input
        type={"text"}
        className='form-control'
        placeholder='Enter Name'
        name='name'
        value={name}
        onChange={(e)=>onInputChange(e)}
        />
        <div style={space}/>
        <input
        type={"text"}
        className='form-control'
        placeholder='Enter Address'
        name='address'
        value={address}
        onChange={(e)=>onInputChange(e)}
        />
        <div style={space}/>
        <input
        type={"text"}
        className='form-control'
        placeholder='Enter Phone Number'
        name='contactNum'
        value={contactNum}
        onChange={(e)=>onInputChange(e)}
        />
        <div style={space}/>
        <input
        type={"text"}
        className='form-control'
        placeholder='Enter Email'
        name='email'
        value={email}
        onChange={(e)=>onInputChange(e)}
        />
        <div style={space}/>
        <input
        type={"password"}
        className='form-control'
        placeholder='Enter Password'
        name='password'
        value={password}
        onChange={(e)=>onInputChange(e)}
        />
         <div style={space}/>
        <input
        type={"password"}
        className='form-control'
        placeholder='Enter Confirm Password'
        name='conpass'
        value={conpass}
        onChange={(e)=>onInputChange(e)}
        />
      </form>
      <button lassName="btn btn-outline-dark" type='submit' style={buttonStyle} onClick={onSubmit}>Submit</button>
      <button style={linkStyle} onClick={cancel}>Cancel</button>
      </div>
      </div>
    </div>
  )
}
