import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
 
   const token=localStorage.getItem('token');
   const nav=useNavigate();

   axios.get(`${import.meta.env.VITE_API_URL}/users/logout`,{
      headers:{
         Authorization:`Bearer ${token}`
      }
   }).then((response)=>{
     if(response.status===200){
      localStorage.removeItem('token')
      nav('/login')
     }
   })

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout