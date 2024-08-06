// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'


// const AboutAdmin = () => {

//   const [about, setAbout] = useState('');
//   const [aboutData, setAboutData] = useState([]);
//   const [messageCond, setMessageCond] = useState(false);
//   const [message,setMessage] = useState('');


//   useEffect(() => {

//     // fetching data

//     const fetchData = async () => {

//       try {
//         const res = await axios.get('/about');
//         //console.log(res.data);
//         setAboutData(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     fetchData();

//   }, [])

// //onChange

// const onChangeAbout = (e)=>{
//   setAbout(e.target.value);
//   console.log(about);
// }



// //submit about

// const handleSubmit = (e)=>{
//   e.preventDefault();

//   const postAbout = {
//     about
//   };

//   setAbout('');
//   axios.post('/about', postAbout)
//   .then(res=>console.log('added'))
//   .catch(err=>console.log(err))
//   // // console.log('clickde');

// };



//   return (
//     <div className='same-component'>
//       <div className='same-form'>
//         <form onSubmit={handleSubmit}>
//           <h4>About Component</h4>
//           <label htmlFor='text'>About</label>
//           <textarea 
//           value={about}
//           onChange={onChangeAbout}
//           name='textarea' 
//           cols="30" 
//           rows="3" 
//           />
//           <button type='submit'>Add item</button>
//         </form>
//       </div>

//       <div className='same-item'>

//         {aboutData.map(item => (
//           <div className='about-info' key={item._id}>
//             <div className='icons'>
//               <Link to={'/edit'}><i className='fas fa-edit'></i></Link>
//               <i className='fas fa-trash'></i>
//             </div>
//             <p>{item.about}</p>
//             <h3 className={ setMessageCond?"new-delete item-delete-tab":"item-delete-tab"}>{message}</h3>
//           </div>
//         ))}

//       </div> 

//       {/* <h3 className='item-delete-tab'>Item Deleted</h3> */}
//     </div>
//   )
// }

// export default AboutAdmin;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AboutAdmin = () => {
  const [about, setAbout] = useState('');
  const [aboutData, setAboutData] = useState([]);
  const [messageCond, setMessageCond] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // fetching data
    const fetchData = async () => {
      try {
        const res = await axios.get('/about');
        //console.log(res.data);
        setAboutData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  //onChange
  const onChangeAbout = (e) => {
    setAbout(e.target.value);
    console.log(about);
  };

  //submit about
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postAbout = {
      about,
    };

    try {
      await axios.post('/about', postAbout);
      console.log('added');
      // Fetch updated data after adding a new item
      const res = await axios.get('/about');
      setAboutData(res.data);
      setAbout('');
    } catch (err) {
      console.log(err);
    }
  };


  //delete about

  // const deleteAbout=(id)=>{

  //   axios.delete('/about/${id}')
  //   .then(res=>{
  //     setMessageCond(true);
  //     setMessage('${res.data.msg}');
  //     setTimeout(()=>{
  //       setMessageCond(false);
  //     },2000)
  //   }).catch(err=>console.log(err))

  //   //delete for ui
  //   const aboutFilterDel = aboutData.filter(item=>item._id !==id)
  //   setAboutData(aboutFilterDel);
  // }

  const deleteAbout = async (id) => {
    try {
      const res = await axios.delete(`/about/${id}`);
      setMessageCond(true);
      setMessage(`${res.data.msg}`); //this line is to show the msg (item deleted) which we have kept in backend (aboutCtrl)
      setTimeout(() => {
        setMessage('');
        setMessageCond(false);
      }, 2000);
  
      // delete for UI
      const aboutFilterDel = aboutData.filter((item) => item._id !== id);
      setAboutData(aboutFilterDel);
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className='same-component'>
      <div className='same-form'>
        <form onSubmit={handleSubmit}>
          <h4>About Component</h4>
          <label htmlFor='text'>About</label>
          <textarea
            value={about}
            onChange={onChangeAbout}
            name='textarea'
            cols='30'
            rows='3'
          />
          <button type='submit'>Add item</button>
        </form>
      </div>

      <div className='same-item'>
        {aboutData.map((item,index) => (
          <div className='about-info' key={item._id}>
            <div className='icons'>
              <Link to={`/edit/${item._id}`}>
                <i className='fas fa-edit'></i>
              </Link>
              <i className='fas fa-trash'
              onClick={()=>deleteAbout(item._id)}
              ></i>
            </div>
            <p>{item.about}</p>
            <h3 className={setMessageCond ? 'new-delete item-delete-tab' : 'item-delete-tab'}>{message}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAdmin;
