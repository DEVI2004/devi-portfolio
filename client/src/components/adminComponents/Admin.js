import React from 'react'
import './admin.css'
import {Link} from 'react-router-dom'
import AboutAdmin from './AboutAdmin'
import EducationAdmin from './EducationAdmin'
import SkillAdmin from './SkillAdmin'
import ProjectsAdmin from './ProjectsAdmin'
import AchievementAdmin from './AchievementAdmin'

const Admin = () => {
  return (
    <div className='main-container'>
      <br />
      <h2 className='title'>Admin Forms</h2>
      <div className='admin-center'>

        {/* aboutAdmin component */}

        <h4 className='admin-title'> About Component</h4>
        <AboutAdmin />

        {/* end of aboutAdmin component */}

        <br />
        <br />
        <hr style={{border:"1px solid #dfebf1"}} />
        <br />

        {/* educationAdmin component */}

        <h4 className='admin-title'>Education Component</h4>
        <EducationAdmin /> 
        {/* end of educationAdmin component */}

        <br />
        <br />
        <hr style={{border:"1px solid #dfebf1"}} />
        <br />

        {/* skillAdmin component */}

        <h4 className='admin-title'>Skill Component</h4>
        <SkillAdmin />

        {/* end of skillAdmin component */}

        <br />
        <br />
        <hr style={{border:"1px solid #dfebf1"}} />
        <br />

        {/* ProjectsAdmin component */}

        <h4 className='admin-title'>Projects Component</h4>
        <ProjectsAdmin />

         {/* end of ProjectAdmins component */}

         <br />
        <br />
        <hr style={{border:"1px solid #dfebf1"}} />
        <br />

         {/* AchievementsAdmin component */}

         <h4 className='admin-title'>Achievements Component</h4>
        <AchievementAdmin />

        {/*end of AchievementsAdmin component */}

        <br />

      </div>
      
    </div>
  )
}

export default Admin
