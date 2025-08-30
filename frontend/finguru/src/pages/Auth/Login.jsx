import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'

const Login = () => {
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-[75%] md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-white">Welcome Back</h3>
        <p className="text-xs text-amber-200 mt-[5px]">
          Please Enter Your Details in Login
        </p>
      </div>
    </AuthLayout>
  )
}

export default Login
