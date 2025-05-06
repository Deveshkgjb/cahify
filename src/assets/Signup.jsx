import React, { useState } from "react";

const app=()=>{
  const [username,setusername]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(username)
    setusername('')
  }
  return(
    <div>
    <form  onSubmit={(e)=>{
      submitHandler(e)
    }}
    >
      <input
      value={username}
        onChange={(e)=>{
          setusername(e.target.value)
        }}
       type="text" className="bg-white p-2 ml-100 px-4 py-3" placeholder="enter your name" /><br />
      <button className="px-4 py-3 ml-100 m-5 border-round bg-blue-400 text-xl font-semibold text-white">submit</button>
    </form>
    </div>
  )
}
export default signup