import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import './Edit.css'
import axios from 'axios'

const EditSkill = (props) => {

  const navigate = useNavigate();
  const [skill, setSkill] = useState('');
  const [message, setMessage] = useState('');
  const [skillData, setSkillData] = useState([]);
  const { id } = useParams();

      //getting the specific id
      useEffect(()=>{

        axios.get(`/skill/${id}`)
        //'/skill/${props.match.params.id}'
        .then(res=>{
          setSkill(res.data.skill);
          
        }).catch(err=>console.log(err))
      },[id]);


  //onChange
  const onChangeSkill = (e) => {
    setSkill(e.target.value);
    //console.log(skill);
  };

   //update Skill

   const updateSkill = (e)=>{
    e.preventDefault();

    const postSkill = {
      skill
    }

    axios.put(`/skill/update/${id}`,postSkill)
    .then(res=>{
      setMessage(res.data.msg);
    }).catch(err=>console.log(err))

    setSkill('');
    setTimeout(()=>{
      navigate("/admin");
    },2000)
  }


  return (
    <div className='edit'>
      <div className='main-container'>
        <div className='same-component'>
          <div className='same-form'>
            <form onSubmit={updateSkill}>
              <h3 className='updated'>{message}</h3>
              <h4>Skills Component</h4>
              <label htmlFor='text'>Skills</label>
              <input type='text'
              value={skill}
              onChange={onChangeSkill} />
              <div className='btns'>
                <button type='submit'>Updated Item</button>
                <Link to='/admin'><button className='cancel-btn'>Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default EditSkill
