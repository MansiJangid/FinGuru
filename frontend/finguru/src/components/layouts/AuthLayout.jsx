import React from 'react';
import card2 from "../../assets/images/card2.png"
import {LuTrendingUpDown} from "react-icons/lu"

const AuthLayout = ({ children }) => {  
  return (
    <div className='flex'>
      
      {/* Left side (Auth content) */}
      <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <h1 className='text-lg font-medium text-black'>FinGuru</h1>
        {children}  
      </div>

      {/* Right side (Decoration / Image) */}
      <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>
        <div className='w-48 h-48 rounded-[40px] bg-blue-700 absolute -top-7 -left-5'/>
        <div className='w-48 h-56 rounded-[40px] border-[20px] border-amber-300 absolute top-[30%] -right-10'/>
        <div className='w-48 h-48 rounded-[40px] bg-blue-700 absolute -bottom-7 -left-5'/>

        <div className='grid grid-cols-1 z-20'>
          <StatsInfoCard 
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="4,30,000"
            color='bg-primary'
          />

        </div>

        <img src={card2} alt="finance image" 
        className='w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-800'/>
      </div>
    </div>
  )
}

export default AuthLayout;


const StatsInfoCard = ({icon, label, value, color}) => {
  return <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border-gray-200/50 z-10'>
      <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>
      <div>
        <h6 className='text-xs text-gray-500 mb-1'>₹{label}</h6>
        <span className='text-[20px]'>₹{value}</span>
      </div>
  </div>
}