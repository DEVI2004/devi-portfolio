import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const DataContext = createContext();

export const DataProvider = ({children})=>{

const [isLogin, setIsLogin] = useState(false);
const [about,setAbout] = useState([]);
const [education,setEducation] = useState([]);
const [skill , setSkill] = useState([]);
const [projects, setProjects] = useState([]);
const [achievements, setAchievements] = useState([]);


//checking token login

const checkLogin= async () =>{
    // const token = localStorage.getItem('tokenStore');
    // if(token){
    //     const verified = await axios.getItem(`/user/verify`,{headers:{Authorization:token}})
    //     console.log(verified);

    //     setIsLogin(verified.data);
    //     if(verified.data===false){
    //         localStorage.clear()
    //     }
    // }else{
    //     setIsLogin(false)
    // }

    try {
        const token = localStorage.getItem('tokenStore');
        if (token) {
          const verified = await axios.get(`/user/verify`, { headers: { Authorization: token } });
          console.log(verified);
  
          setIsLogin(verified.data);
          if (verified.data === false) {
            localStorage.clear();
          }
        } else {
          setIsLogin(false);
        }
      } catch (err) {
        console.error('Login verification failed:', err);
        setIsLogin(false);
      }
}

useEffect(()=>{
    try {
        checkLogin();
    } catch (err) {
        console.error('Login verification failed:', err);
        setIsLogin(false);
    }
})

// fetching data

const fetchData = async() =>{
    //for fetching about
    const res1 = await axios.get('/about');
    // console.log(res1.data);
    setAbout(res1.data);

    //for fetching education
    const res2 = await axios.get('/education');
    //console.log(res2.data);
    setEducation(res2.data);

    //for fetching skill
    const res3 = await axios.get('/skill');
    //console.log(res3.data);
    setSkill(res3.data);

    //for fetching projects
    const res4 = await axios.get('/project');
    setProjects(res4.data);
    //console.log(res4.data);

    //for fetching achievements
    const res5 = await axios.get('/achievement');
    setAchievements(res5.data);
    //console.log(res5.data);
}
useEffect(()=> {

     try {
        fetchData();
     } catch (err) {
        console.log(err);
     }

} , [])

const state = {
    about: [about, setAbout],
    education: [education, setEducation],
    skill: [skill , setSkill],
    projects: [projects, setProjects],
    achievements: [achievements, setAchievements],
    isLogin : [isLogin, setIsLogin]
}

    return(
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )
}