import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const initialState = {
  product_id: '',
  title: '',
  description: '',
}

const EditAchievement = () => {

  const [product, setProducts] = useState(initialState);
  const [images, setImages] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();


  //upload image functionality

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const file = e.target.files[0];
      if (!file)
        return alert('no files exist');
      if (file.size > 1024 * 1024) {
        return alert('size is too big');
      }
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        return alert('incorrect file format');
      }

      let formData = new FormData();
      formData.append('file', file);

      const res = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      setImages(res.data);

    } catch (err) {
      //console.log(err.response.data.msg);  
      console.log(err.response?.data?.msg || err.message);
    }
  }


  //delete image.....
  const handleDestroy = async () => {
    try {

      await axios.post('/destroy', { public_id: images.public_id });
      setImages(false);

    } catch (err) {
      //console.log(err.response.data.msg);
      console.log(err.response?.data?.msg || err.message);
    }
  }

  //handle change Input

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setProducts({ ...product, [name]: value });
    // console.log(product.description)
    // console.log(product.title)

  }

  //getting data
  useEffect(() => {

    axios.get(`/achievement/${id}`)
      .then(res => {
        // console.log(res.data)

        setProducts({
          product_id: res.data.product_id,
          title: res.data.title,
          description: res.data.description
        })
      }).catch(err => console.log(err))


  }, [])


  //handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/achievement/update/${id}`, { ...product, images });
      //console.log('Submit response:', res.data);
      setMessage(res.data.msg);
      //setMessageCond(true);
      setTimeout(() => {
      //   setMessage('');
      //   setMessageCond(false);
      }, 2000);

      // setProducts(initialState);
      // setImages(false);
    } catch (err) {
      console.log(err.response?.data?.msg || err.message);
      setMessage(err.response?.data?.msg || 'An error occurred');
      //setMessageCond(true);
      setTimeout(() => {

        navigate("/admin")

        // setMessage('');
        // setMessageCond(false);
      }, 2000);
    }
  };

  const styleUpload = {
    display: images ? 'block' : 'none'
  }






  return (
    <div>
      <div className='edit'>
        <div className='main-container'>
          <div className='same-component'>
            <div className='same-form'>

              <form onSubmit={handleSubmit}>

                <h3 className='updated'>{message}</h3>

                <h4>Achievements Component</h4>
                <label type='text'>Id</label>
                <input type='text'
                  name='product_id'
                  required id='product_id'
                  value={product.product_id}
                  onChange={handleChangeInput}
                />

                <label type='text'>title</label>
                <input type='text'
                  name='title'
                  required id='title'
                  value={product.title}
                  onChange={handleChangeInput}
                />

                <label type='text'>Description</label>
                <input type='text'
                  name='description'
                  required id='description'
                  value={product.description}
                  onChange={handleChangeInput}
                  cols="30" rows="3" />

                <div className='upload'>
                  <input type='file' 
                  name='file' 
                  id='file_up' 
                  onChange={handleUpload}
                  />
                  <div id='file_img' style={styleUpload} >
                    <img src={images?images.url:''} alt='' />
                    <span  onClick={handleDestroy}>
                      X
                    </span>
                  </div>

                </div>

                <div className='btns'>
                  <button>Update item</button>
                  <Link to='/admin'><button className='cancel-btn'>Cancel</button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EditAchievement
