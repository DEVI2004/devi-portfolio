import React, {useContext} from 'react';
import { DataContext } from '../context/GlobalContext';

const Skill = () => {

    const state = useContext(DataContext);
    const [skill] = state.skill;
    console.log(skill);

    
  return (
    <div className="main-container">
        <h2 className="title skill-title">
            Skills
        </h2>
        <div className="skill">
            <div className="skill-center">


                {skill.map(item=>(
                    <div className="single-skill" key={item._id}>
                    <p>{item.skill}</p>
                </div>
                ))}
                
                {/* static single skill */}
                {/* <div className="single-skill">
                    <p>Dsa</p>
                </div> */}

                {/* static single skill */}
                {/* <div className="single-skill">
                    <p>Java</p>
                </div> */}

                {/* static single skill */}
                {/* <div className="single-skill">
                    <p>Mern Full Stack</p>
                </div> */}

                {/* static single skill */}
                {/* <div className="single-skill">
                    <p>ML & DL</p>
                </div> */}

                {/* static single skill */}
                {/* <div className="single-skill">
                    <p>DBMS</p>
                </div> */}

            </div>
        </div>
      
    </div>
  );
}

export default Skill;


