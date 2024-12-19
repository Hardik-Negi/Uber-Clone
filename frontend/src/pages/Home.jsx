import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div className='bg-cover bg-current bg-[url("https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-screen pt-8  w-full flex flex-col justify-between'>
    <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='bg-white pb-7 py-4 px-4 '>
        <h2 className='text-[30px] font-bold'>Get started with Uber</h2>
        <Link to='/login' className='flex items-center justify-center w-full mt-5 bg-black text-white py-3 rounded-lg' >Continue</Link>
      </div>
    </div>


    </div>
  )
}

export default Home