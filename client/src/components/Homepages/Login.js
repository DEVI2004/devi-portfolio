import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
// import Register from './Register'
import axios from 'axios'
import e from 'cors'
import { DataContext } from '../context/GlobalContext'

const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({name:'',email:'',password:''});
  const[err,setErr] = useState('');
  const state = useContext(DataContext);
  const [isLogin, setIsLogin] = state.isLogin;

  //onChange inputs
  const onChangeInput = (e) =>{
    const {name,value} = e.target;
    setUser({...user, [name]:value})
    setErr('');
  }

  //login Submit

  const loginSubmit = async (e)=>{
    e.preventDefault();

    try {
      const res= await axios.post(`/user/login`,{

        email:user.email,
        password:user.password

      })
      setUser({name:'', email:'', password:''});
      localStorage.setItem('tokenStore',res.data.token);
      setIsLogin(true);
      
      setErr(res.data.msg);
      navigate("/admin");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setErr(err.response.data.msg);
      } else {
        setErr('Login failed');
      }
    }

  }


  return (

    <>

      <div className='login'>
        <div className='main-container'>
          <h2>Login for admin</h2>
        </div>
        <div className='login-center'>
          <form onSubmit={loginSubmit}>
            <p>{err}</p>

            <label htmlFor='email'>Email</label>
            <input className='email' 
            placeholder='import email.....' 
            name='email' 
            value={user.email}
            onChange={onChangeInput}
            required 
            />

            <label htmlFor='password'>Password</label>
            <input className='password' 
            placeholder='import password.....' 
            name='password' 
            value={user.password}
            onChange={onChangeInput}
            required 

            />

            <div className='login-btn'>
              <button type="submit">Login</button>
              <Link to="/"><button>Home</button> </Link>
            </div>
          </form>
        </div>
      </div>

      {/* register */}

      {/* <Register /> */}

    </>

  )
}

export default Login

