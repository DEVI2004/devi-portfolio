import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './admin.css'

const SkillAdmin = () => {

  const [skill, setSkill] = useState('');
  const [skillData, setSkillData] = useState([]);
  const [messageCond, setMessageCond] = useState(false);
  const [message, setMessage] = useState('');


  useEffect(() => {
    // fetching data
    const fetchData = async () => {
      try {
        const res = await axios.get('/skill');
        //console.log(res.data);
        setSkillData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

   //onChange
   const onChangeSkill = (e) => {
    setSkill(e.target.value);
    //console.log(skill);
  };

  //Submit Skill

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postSkill = {
      skill,
    };

    try {
      await axios.post('/skill', postSkill);
      console.log('added');
      // Fetch updated data after adding a new item
      const res = await axios.get('/skill');
      setSkillData(res.data);
      setSkill('');
    } catch (err) {
      console.log(err);
    }
  };


  //delete Skill

  const deleteSkill = async (id) => {
    try {
      const res = await axios.delete(`/skill/${id}`);
      setMessageCond(true);
      setMessage(`${res.data.msg}`); //this line is to show the msg (item deleted) which we have kept in backend (SkillCtrl)
      setTimeout(() => {
        setMessage('');
        setMessageCond(false);
      }, 2000);
  
      // delete for UI
      const skillFilterDel = skillData.filter((item) => item._id !== id);
      setSkillData(skillFilterDel);
    } catch (err) {
      console.log(err);
    }
  };




  return (
    <div className='same-component'>
      <div className='same-form'>
        <form onSubmit={handleSubmit}>
          <h4>Skill Component</h4>
          <label htmlFor='text'>Skills</label>
          <input type="text" 
          value={skill}
          onChange={onChangeSkill}
          />
          <button type='submit'>Add item</button>
        </form>
      </div>

      <div className='same-item'>
        <div className='about-info'>

          {skillData.map(item=>(
            <div className='same-admin' key={item._id}>
            <div className='icons'>
            <Link to={`/editSkills/${item._id}`}><i className='fas fa-edit'></i></Link>
            <i className='fas fa-trash' onClick={() =>deleteSkill(item._id)}></i>
            </div>

            {/* single skill */}
            <div className='single-skill'>
              <p>{item.skill}</p>
            </div>
            {/* <h3 className={setMessageCond ? 'new-delete item-delete-tab' : 'item-delete-tab'}>{message}</h3> */}
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillAdmin
