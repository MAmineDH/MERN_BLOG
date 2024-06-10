/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
export default function SignIn() {
  const [formdata , setFormData] = useState({})
  const handelChange =(e)=>{
    setFormData({...formdata , [e.target.id] : e.target.value})
  };
  const handlesubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await fetch('/api/auth/signup',{
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body :JSON.stringify(formdata),
      });

      const data = await res.json();
    }
    catch(error){
      alert('An erroe occured !')
    }

  }
  console.log(formdata,'this is the from data rigth now')
  return (
    <div className="min-h-screen mt-20">
      <div className=" gap-5 flex p-4 max-w-3xl mx-auto  flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to={"/"} className=" text-4xl  dark:text-white font-bold">
            <span className=" text-4xl px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Saraha
            </span>
            Blog
          </Link>
          <p className=" text-sm mt-3">
            this is a demo project for a blogging app you need SignIn first{" "}
          </p>
        </div>
        {/* rigth */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
            <div>
              <Label value="Your user name " />
              <TextInput type="text"
              placeholder="Name"
              id="username"

              onChange={(e)=>{
                handelChange(e)
              }}
              />
            </div>
            <div>
              <Label value="Your user Email " />
              <TextInput type="text"
              placeholder="Email"
              id="email"
              onChange={(e)=>{
                handelChange(e)
              }}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="password"
              placeholder="Password"
              id="password"
              onChange={(e)=>{
                handelChange(e)
              }}
              />
            </div>
            <Button gradientDuoTone={'purpleToPink'} 
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account ?</span>
            <Link to={'/signup'} className="text-blue-500"> Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
