import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';


const Register = () => {

  const [user, setUser] = useState({username:'',email:'',password:''});
  const[err,setErr] = useState('');
  

    //onChange inputs
    const onChangeInput = (e) =>{
      const {name,value} = e.target;
      setUser({...user, [name]:value})
      setErr('');
    }

    //register Submit

  const registerSubmit = async (e)=>{
    e.preventDefault();

    try {
      const res= await axios.post(`/user/register`,{

        username: user.username,
        email:user.email,
        password:user.password

      })
      setUser({username:'', email:'', password:''});
      setErr(res.data.msg);
      
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
        <h2>Register for admin</h2>
      </div>
      <div className='login-center'>
        <form onSubmit={registerSubmit}>
          <p>{err}</p>

          <label htmlFor='name'>Name</label>
          <input type='text' 
          placeholder='import name.....' 
          name='username' 
          required 
          value={user.username}
          onChange={onChangeInput}
          />

         
          <label htmlFor='email'>Email</label>
          <input className='email' 
          placeholder='import email.....' 
          name='email' 
          required
          value={user.email}
          onChange={onChangeInput}
          />

          <label htmlFor='password'>Password</label>
          <input className='password' 
          placeholder='import password.....' 
          name='password' 
          required
          value={user.password}
          onChange={onChangeInput}
          />

          <div className='login-btn'>
            <button type="submit">Register</button>
            <Link to="/"><button>Home</button> </Link>
          </div>
        </form>
      </div>
    </div>
    
    
    </>
  )
}

export default Register
