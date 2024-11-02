import React from 'react'
import Link from "next/link"
function Signup() {
  return (

    <div className="flex justify-center items-center h-screen bg-blue-400 	">
      
      <div className="bg-gray-100 text-blue-500 h-[500px] w-[500px] flex flex-col justify-center items-center gap-6 text-xl font-sans shadow-gray-100 shadow-sm rounded-3xl">
        
      <h1 className="text-5xl font-bold leading-snug">Create new account </h1>

      <input placeholder="Name" className="outline text-lg w-72 pl-2 text-black placeholder-shown:text-blue-800  hover:text-blue-600" />

      <input placeholder=" Email" className="outline text-lg w-72 pl-2 text-black placeholder-shown:text-blue-800  hover:text-blue-600" />


      <input placeholder="Password" className="outline text-lg w-72 pl-2 text-black placeholder-shown:text-blue-800  hover:text-blue-600" />

      <button className=" bg-sky-500 hover:bg-sky-700 w-72 text-center p-2 rounded-lg text-white"> Sign in</button>

      <p>Do you have already account?</p>

      <Link href="/">
        <button type="button" className=" bg-sky-500 hover:bg-sky-700 w-72 text-center p-2 rounded-lg text-white">Log In</button>
      </Link>

    </div>
    </div>
  )
}

export default Signup