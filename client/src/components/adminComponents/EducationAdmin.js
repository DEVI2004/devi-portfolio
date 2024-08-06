import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const EducationAdmin = () => {

  const [education, setEducation] = useState('');
  const [educationData, setEducationData] = useState([]);
  const [message, setMessage] = useState('');
  const [messageCond, setMessageCond] = useState(false);


  useEffect(() => {
    // fetching data
    const fetchData = async () => {
      try {
        const res = await axios.get('/education');
        //console.log(res.data);
        setEducationData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  //onChange
  const onChangeEducation = (e) => {
    setEducation(e.target.value);
    console.log(education);
  };


  //Submit Education
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postEducation = {
      education,
    };

    try {
      await axios.post('/education', postEducation);
      console.log('added');
      // Fetch updated data after adding a new item
      const res = await axios.get('/education');
      setEducationData(res.data);
      setEducation('');
    } catch (err) {
      console.log(err);
    }
  };


  //delete education
  const deleteEducation = async (id) => {
    try {
      const res = await axios.delete(`/education/${id}`);
      setMessageCond(true);
      setMessage(`${res.data.msg}`); //this line is to show the msg (item deleted) which we have kept in backend (EducationCtrl)
      setTimeout(() => {
        setMessage('');
        setMessageCond(false);
      }, 2000);
  
      // delete for UI
      const educationFilterDel = educationData.filter((item) => item._id !== id);
      setEducationData(educationFilterDel);
    } catch (err) {
      console.log(err);
    }
  };
  



  return (
    <div className='same-component'>
      <div className='same-form'>
        <form onSubmit={handleSubmit}>
          <h4>Education Component</h4>
          <label htmlFor='text'>Education</label>
          <input type='text' value={education} onChange={onChangeEducation} />
          <button type='submit'>Add item</button>
        </form>
      </div>

      <div className='same-item'>
      <div className='about-info'>
        {educationData.map(item => (
            <div className='same-admin' key={item._id}>
              <div className='icons'>
                <Link to={`/editEducation/${item._id}`}><i className='fas fa-edit'></i></Link>
                <i className='fas fa-trash'
                onClick={()=>deleteEducation(item._id)}
                ></i>
              </div>
              <div className='single-education'>
                <p>{item.education}</p>
              </div>
              {/* <h3 className='item-delete-tab'>Item delete</h3> */}
              {/* <h3 className={setMessageCond ? 'new-delete item-delete-tab' : 'item-delete-tab'}>{message}</h3> */}
            </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default EducationAdmin
