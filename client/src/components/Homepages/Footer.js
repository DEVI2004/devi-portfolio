import React from 'react'
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';


const Footer = () => {

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -80
    })
  }


  return (
    <React.Fragment>
      <div className="main-title">
        <h2 className="title contact-title">

          Contact

        </h2>
      </div>

      <div className="main-contact">
        <div className="contact">
          <div className='contact-center'>

            {/* links */}

            {/* <div className='contact-center-links'>
              <h3>Links</h3>
              <div className='contact-links'>
                <li onClick={() => scrollToElement('Home')}><Link to='/'>Home</Link></li>
                <li onClick={() => scrollToElement('About')}><Link to='/'>About</Link></li>
                <li onClick={() => scrollToElement('Education')}><Link to='/'>Education</Link></li>
                <li onClick={() => scrollToElement('Skills')}><Link to='/'>Skills</Link></li>
                <li onClick={() => scrollToElement('Projects')}><Link to='/'>Projects</Link></li>
                <li onClick={() => scrollToElement('Achievements')}><Link to='/'>Achievements</Link></li>
                <li><Link to='/'>Admin</Link></li>
                <li><Link to = "/login">Login</Link></li>
              </div>
            </div> */}

            {/* media */}

            <div className='contact-center-media'>
              <h3>Media</h3>
              <div className='contact-media'>
                {/* <li><a href='#'><i className='fab fa-linkedin'></i>Linkedin</a></li> */}
                {/* <li><a href="www.linkedin.com/in/kabala-devi-rishitha-b8b150283" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>LinkedIn</a></li> */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/kabala-devi-rishitha-b8b150283"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>LinkedIn
                  </a>
                </li>
                {/* <li><a href='#'><i className='fab fa-instagram'></i>Instagram</a></li> */}
                <li>
                  <a
                    href="https://www.instagram.com/devi__184"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>Instagram
                  </a>
                </li>
                {/* <li><a href='#'><i className='fab fa-github'></i>GitHub</a></li> */}
                <li>
                  <a
                    href="https://github.com/DEVI2004"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>GitHub
                  </a>
                </li>
                {/* <li><a href='#'><i className='fab fa-whatsapp'></i>WhatsApp</a></li> */}
                <li>
                  <a
                    href="https://wa.me/8186945854"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>WhatsApp
                  </a>
                </li>
                
              </div>
            </div>
          </div>
        </div>

        <div className='footer'>
          <p>Designed And Created By Kabala Devi Rishitha-2024</p>
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default Footer
