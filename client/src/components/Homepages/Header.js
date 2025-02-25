import React from 'react'
import Profile from '../../images/profile.jpg';
import Particles from 'react-tsparticles';
import Typewriter from 'typewriter-effect';
//import { loadFull } from 'tsparticles';
import './Header.css'



const Header = () => {
  
  return (
    <React.Fragment>
      <div className="header">
        <div className="particle">
          <Particles className='particleComp'
          height = "400px"
          width="100%"
          options={{
            particlesOptions:{
              number:{
                value:100,
                density:{
                  enable:false,
                  value_area:800
                }
              }
            },


            "interactivity":{
              "events":{
                "onHover":{
                  "enable":true,
                  "mode":"repulse"
                }
              }
            }
          }}
          />
        
        {/* <div className="fullName">
          <h1>
            <Typewriter
            options={{
              strings:['Kabala','Devi','Rishitha'],
              autoStart:true,
              loop:true
            }}
            />
          </h1>
        </div> */}
        <div className="cv">
          <span><b>Cv:</b> <a href="https://drive.google.com/file/d/1rVVracuNwpQqXdntaf7-7zDC3x-27joB/view?usp=sharing" target="_blank" rel="noreferrer"><i className="fas fa-file-pdf"></i></a></span>
        </div>
        </div>
        <div className="personalInfo">
          <div className="personalInfo-center">
          <div className="personalInfo-details">
          <div className="info">
            <label htmlfor="name">FullName:</label>
            <h4>Kabala Devi Rishitha</h4>
          </div>

            <div className="info">
            <label
            htmlfor="Currently Pursuing">Currently Pursuing:</label>
            <h4>UG at VIT</h4>
            </div>

            <div className="info">
            <label
            htmlfor="email">Email:</label>
            <h4>devirishitha184@gmail.com</h4>
            
            </div>
            </div>

            <div className="personalInfo-img">
              <img src = {Profile} alt="profile" />
            </div>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Header
