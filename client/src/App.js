
// import './App.css';
// import { Element } from 'react-scroll';

// import Navbar from './components/Homepages/Navbar'
// import Home from './components/Homepages/Home' // Import the Home component
// import Header from './components/Homepages/Header'
// import About from './components/Homepages/About'
// import Education from './components/Homepages/Education'
// import Achievements from './components/Homepages/Achievements'
// import Projects from './components/Homepages/Projects'
// import Contact from './components/Homepages/Contact'
// import Footer from './components/Homepages/Footer'
// import Login from './components/Homepages/Login'
// import Skill from './components/Homepages/Skill'

// //import Register from './components/Homepages/Register'


// //admin Components

// import Admin from './components/adminComponents/Admin'
// import AboutAdmin from './components/adminComponents/AboutAdmin'
// import AchievementAdmin from './components/adminComponents/AchievementAdmin'
// import EducationAdmin from './components/adminComponents/EducationAdmin'
// import ProjectsAdmin from './components/adminComponents/ProjectsAdmin'


// //edit components

// import EditAbout from './components/editComponents/EditAbout'
// import EditAchievement from './components/editComponents/EditAchievement'
// import EditEducation from './components/editComponents/EditEducation'
// import EditProjects from './components/editComponents/EditProjects'
// import EditSkill from './components/editComponents/EditSkill'


// //import {Route} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// function App() {
//   return (

//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           {/* <Element className='Home'>
//           <Route path="/" element={<Header />} />
//           </Element>

//           <Element className='About'>
//           <Route path="/" element={<About />} />
//           </Element>

//           <Element className='Education'>
//           <Route path="/" element={<Education />} />
//           </Element>

//           <Element className='Skills'>
//           <Route path="/" element={<Skill />} />
//           </Element>

//           <Element className='Projects'>
//           <Route path="/Projects" element={<Projects />} />
//           </Element>

//           <Element className='Achievements'>
//           <Route path="/Achievements" element={<Achievements />} />
//           </Element>

//           <Element className='Contact'>
//           <Route path="/Contact" element={<Contact />} />
//           </Element>

//           <Element>
//           <Route path="/" element={<Home />} />
//           </Element> */}


//            <Route path="/" element={<Home />} />  {/*Use the Home component for the root route */}
          
//           <Route path="/" element={<Header />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/education" element={<Education />} />
//           <Route path="/skills" element={<Skill />} />
//           <Route path="/projects" element={<Projects />} /> 
//           <Route path="/achievements" element={<Achievements />} />
//           <Route path="/contact" element={<Contact />} />

//           <Route path="/login" element={<Login />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/edit/:id" element={<EditAbout />} />
//           <Route path="/editEducation/:id" element={<EditEducation />} />
//           <Route path="/editSkills/:id" element={<EditSkill />} />
//           <Route path="/editProjects/:id" element={<EditProjects />} />
//           <Route path="/editAchievements/:id" element={<EditAchievement />} />
//         {/* <Route component={Footer} /> */}
//         </Routes>
//         <Footer />
//       </div>
   
//     </Router>
    
//   );
// }

// export default App;

import './App.css';
import React, { useContext, useState } from 'react'

import Navbar from './components/Homepages/Navbar';
import Home from './components/Homepages/Home';
import Header from './components/Homepages/Header';
import About from './components/Homepages/About';
import Education from './components/Homepages/Education';
import Achievements from './components/Homepages/Achievements';
import Projects from './components/Homepages/Projects';
import Contact from './components/Homepages/Contact';
import Footer from './components/Homepages/Footer';
import Login from './components/Homepages/Login';
import Skill from './components/Homepages/Skill';

// admin Components
import Admin from './components/adminComponents/Admin';
import AboutAdmin from './components/adminComponents/AboutAdmin';
import AchievementAdmin from './components/adminComponents/AchievementAdmin';
import EducationAdmin from './components/adminComponents/EducationAdmin';
import ProjectsAdmin from './components/adminComponents/ProjectsAdmin';

// edit components
import EditAbout from './components/editComponents/EditAbout';
import EditAchievement from './components/editComponents/EditAchievement';
import EditEducation from './components/editComponents/EditEducation';
import EditProjects from './components/editComponents/EditProjects';
import EditSkill from './components/editComponents/EditSkill';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Element} from 'react-scroll'
import { DataContext } from './components/context/GlobalContext';
import { Navigate } from 'react-router-dom';

function App() {

  const state = useContext(DataContext);
  const [isLogin,setIsLogin] = state.isLogin;



  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Element name="Home"><Home /></Element>
              <Element name="About"><About /></Element>
              <Element name="Education"><Education /></Element>
              <Element name="Skills"><Skill /></Element>
              <Element name="Projects"><Projects /></Element>
              <Element name="Achievements"><Achievements /></Element>
              <Element name="Contact"><Contact /></Element>
            </>
          } />
          {/* <Route path="/login" render={()=>isLogin? <Admin />:<Login setIsLogin={setIsLogin} />} />
          <Route path="/admin" element={<Admin />} /> */}
          <Route path="/login" element={isLogin ? <Navigate to="/admin" /> : <Login setIsLogin={setIsLogin} />} />
          <Route path="/admin" element={isLogin ? <Admin /> : <Navigate to="/login" />} />
          <Route path="/edit/:id" element={<EditAbout />} />
          <Route path="/editEducation/:id" element={<EditEducation />} />
          <Route path="/editSkills/:id" element={<EditSkill />} />
          <Route path="/editProjects/:id" element={<EditProjects />} />
          <Route path="/editAchievements/:id" element={<EditAchievement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
