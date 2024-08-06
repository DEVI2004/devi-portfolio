import React, { useContext } from 'react'
import customer from '../../images/customer.jpeg';
import language_app from '../../images/language_app.png';
import cancer from '../../images/cancer.jpeg';
import door from '../../images/door.jpeg';
import { DataContext } from '../context/GlobalContext';

const Project = () => {

  const state = useContext(DataContext);
  const [project] = state.projects

  return (


    <div className="main-container">
      <div className="projects">
        <h2 className="title">Projects</h2>
        <div className="projects-center">


          {project.map(item => (


            <div className="single-project" key={item._id}>
              <div className="single-project-img">
                <img src={item.images.url} alt="" />
              </div>

              <div className="single-project-info">
                <h3>{item.title}</h3>
                <p>{item.description} </p>
              </div>
            </div>


          ))}
        </div>
      </div>
    </div>
  )
}

export default Project;
