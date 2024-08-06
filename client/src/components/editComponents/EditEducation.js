import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import './Edit.css'
import axios from 'axios'


const EditEducation = (props) => {

  const navigate = useNavigate();
  const [education, setEducation] = useState('');
  const [message, setMessage] = useState('');
  const [educationData, setEducationData] = useState([]);
  const { id } = useParams();

    //getting the specific id
    useEffect(()=>{

      axios.get(`/education/${id}`)
      //'/education/${props.match.params.id}'
      .then(res=>{
        setEducation(res.data.education);
        
      }).catch(err=>console.log(err))
    },[id]);

    //onChange
  const onChangeEducation = (e) => {
    setEducation(e.target.value);
    //console.log(education);
  };

  //update Education

  const updateEducation = (e)=>{
    e.preventDefault();

    const postEducation = {
      education
    }

    axios.put(`/education/update/${id}`,postEducation)
    .then(res=>{
      setMessage(res.data.msg);
    }).catch(err=>console.log(err))

    setEducation('');
    setTimeout(()=>{
      navigate("/admin");
    },2000)
  }



  return (
    <div className='edit'>
      <div className='main-container'>
        <div className='same-component'>
          <div className='same-form'>
            <form onSubmit={updateEducation}>
              <h3 className='updated'>{message}</h3>
              <h4>Education Component</h4>
              <label htmlFor='text'>Education</label>
              <input type='text' 
              value={education}
              onChange={onChangeEducation}
              />
              <div className='btns'>
                <button type='submit'>Update Item</button>
                <Link to='/admin'><button className='cancel-btn'>Cancel</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default EditEducation
