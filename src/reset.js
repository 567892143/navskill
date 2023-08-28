import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetPassword = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/reset-password", {
      email: email,
      password: password,
    }).then((response) => {
      if(response.data.message){
        console.log(response.data.message);
      }else{
        console.log(response.data);
        navigate('/login');
      }
    })
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-900">
    <form className="bg-yellow-200 p-8 rounded shadow-md">
      <div className="mb-4">
        <h1 className="font-extrabold text-3xl flex justify-center ">Reset Password</h1>
        <label className="block text-red-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder="Email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-red-700 font-bold mb-2" htmlFor="password">
          New Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          onChange={(e) => {setPassword(e.target.value)}}
          placeholder="New Password"
        />
        <p className="text-red-500 text-xs italic">Please choose a strong password.</p>
      </div>
      <div className="flex items-center justify-between">
     <button
          className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
           onClick={resetPassword} 
        >
            Reset Password
        </button> 
       
        <Link to="/login"> <p
          className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-blue-800"
          
        > Back to Login
        </p> </Link> 
      
      </div>
    </form>
  </div>
  );
};

export default ResetPasswordPage;
