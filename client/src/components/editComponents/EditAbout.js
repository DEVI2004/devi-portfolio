import React, {useState,useEffect} from 'react'
import { Link,useNavigate , useParams} from 'react-router-dom';
import './Edit.css'
import axios from 'axios'



const EditAbout = (props) => {

  const [message, setMessage] = useState('');
  const [about, setAbout] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  //getting the specific id
  useEffect(()=>{

    axios.get(`/about/${id}`)
    //'/about/${props.match.params.id}'
    .then(res=>{
      setAbout(res.data.about);
      
    }).catch(err=>console.log(err))
  },[id]);

  //onChange
  const onChangeAbout = (e) => {
    setAbout(e.target.value);
    //console.log(about);
  };

  //update about

  const updateAbout = (e)=>{
    e.preventDefault();

    const postAbout = {
      about
    }

    axios.put(`/about/update/${id}`,postAbout)
    .then(res=>{
      setMessage(res.data.msg);
    }).catch(err=>console.log(err))

    setAbout('');
    setTimeout(()=>{
      navigate("/admin");
    },2000)
  }

  return (
    <div className='edit'>
      <div className='main-container'>
        <div className='same-component'>
          <div className='same-form'>
            <form onSubmit={updateAbout}>
              <h3 className='updated'>{message}</h3>
              <label htmlFor='text'>About</label>
              <textarea 
              value={about}
              onChange={onChangeAbout}
              name='textarea' 
              //id="about-textarea" 
              id="" 
              cols="30" 
              rows="3" 
              />
              <div className='btns'>
                <button type="submit">Updated Item</button>
                <Link to='/admin'> <button className='cancel-btn'>Cancel</button></Link>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default EditAbout;
