import React from 'react';
import card2 from "../../assets/images/card2.png"

const AuthLayout = ({ children }) => {   // ✅ fixed typo
  return (
    <div className='flex'>
      
      {/* Left side (Auth content) */}
      <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 bg-gray-950'>
        <h2 className='text-lg font-medium text-white'>Expense Tracker</h2>
        {children}   {/* ✅ corrected */}
      </div>

      {/* Right side (Decoration / Image) */}
      <div className='hidden md:block w-[40vw] h-screen bg-blue-100 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>
        <div className='w-48 h-48 rounded-[40px] bg-blue-700 absolute -top-7 -left-5'/>
        <div className='w-48 h-56 rounded-[40px] border-[20px] border-amber-600 absolute top-[30%] -right-10'/>
        <div className='w-48 h-48 rounded-[40px] bg-blue-700 absolute -bottom-7 -left-5'/>

        <img src={card2} alt="finance image" 
        className='w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-600'/>
      </div>
    </div>
  )
}

export default AuthLayout;
