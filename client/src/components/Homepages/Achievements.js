// import React from 'react'

// const Achievement = () => {
//   return (
//     <div>
//       <div className="main-container">
//         <h2 className='title'>
//           Activities & Achievements
//         </h2>
//         <div className="achievements">
//           <div className="achievements-center">

//             {/* static single Achievement */}
//             <div className="single-achievement">
//               <p></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Achievement;

import React, { useContext } from 'react'
import customer from '../../images/customer.jpeg';
import language_app from '../../images/language_app.png';
import cancer from '../../images/cancer.jpeg';
import door from '../../images/door.jpeg';
import { DataContext } from '../context/GlobalContext';

const Achievement = () => {

  const state = useContext(DataContext);
  const [achievements] = state.achievements
  return (


    <div className="main-container">
      <div className="achievements">
        <h2 className="title">Activities and Achievements</h2>
        <div className="achievements-center">

          {achievements.map(item => (

            <div className="single-achievement" key={item._id}>
              <div className="single-achievement-img">
                <img src={item.images.url} alt="" />
              </div>
              <div className="single-achievement-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievement;

