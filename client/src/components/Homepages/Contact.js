import React, { useState } from 'react'
import './contact.css'
import contact from '../../images/contact.jpg'
import contact_1 from '../../images/contact_1.jpg'
import contact_2 from '../../images/contact_2.jpg'
import axios from 'axios'

const Contact = () => {

  const[name, setName] = useState('');
  const[email,setEmail] = useState('');
  const[message,setMessage] = useState('');
  const[banner, setBanner] = useState('');
  const[bool,setBool] = useState(false);

  //handle inputs

  const handleNameChange=(e)=>{
    setName(e.target.value);
    console.log(name)
  }

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
    console.log(email)
  }

  const handleMessageChange=(e)=>{
    setMessage(e.target.value);
    console.log(message)
  }


  // submit form
  const formSubmit = (e)=>{
    e.preventDefault();

    let data={
      name:name,
      email:email,
      message:message
      
    }

    setBool(true);
    axios.post(`/contact`, data)
    .then(res=>{
      setBanner(res.data.msg)
      setBool(false);
      setTimeout(()=>{
        setBanner('');
      },2000)

      setName('');
      setEmail('');
      setMessage('');
    }).catch((err)=> {
      setBanner('Error sending message');
      console.log(err);
      setBool(false);
    })
  }


  return (
    <div className="main-container">
      <div className="contactform">
        <h2 className="title">
          Contact Form
        </h2>
        <div className="contactForm-center">
          <div className="contact_form">
            <form onSubmit={formSubmit}>
              <p>{banner}</p>

              <label htmlFor="name">Name</label>
              <input type="text" 
              placeholder="import name..." 
              required 
              value={name}
              onChange={handleNameChange}
              />

              <label htmlFor="name">Email</label>
              <input type="text" 
              placeholder="import email..." 
              required 
              value={email}
              onChange={handleEmailChange}
              />

              <label htmlFor="message">Message</label>
              <textarea type="message" 
              id= "" 
              placeholder="import contact reason..." 
              value={message}
              onChange={handleMessageChange}
              />
              

              <div className="send-btn">
                <button type="submit">Send{bool? <b className='load'><img src={contact_1} alt='' /></b>:''}</button>
              </div>
            </form>
          </div>

          {/* contact info */}

          <div className= "contact-info">
            <h4>Send your message</h4>
            <img src={contact_1} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
