import React, { useContext, useEffect } from "react";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const nav = useNavigate();
  const {user,setUser}=useContext(userDataContext);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
   if(!token){
      nav('/login')
   }

   axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(response=>{
    if(response.status===200){
      setUser(response.data.user)
      setIsLoading(false);
    }
  })
  .catch(err=>{
    console.log(err)
    localStorage.removeItem('token')
      nav('/login')
    
  })
  },[token])

 

  if(isLoading){
    return (
       <div>Loading...</div>
    )
   }
 

  return <>{children}</>;
};

export default UserProtectWrapper;
