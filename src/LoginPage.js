import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        console.log(response.data.message);
      }else{
        console.log(response.data[0].email);
        navigate('/prehome');
       
      }
    })
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-900">
    <form className="bg-yellow-200 p-8 rounded shadow-md">
      <div className="mb-4">
        <h1 className="font-extrabold text-3xl flex justify-center ">Login</h1>
        <label className="block text-red-700 font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          onChange={(e) => {setUsername(e.target.value)}}
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <label className="block text-red-700 font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          onChange={(e) => {setPassword(e.target.value)}}
          placeholder="Password"
        />
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
     <button
          className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
           onClick={login} 
        >
            sign in
        </button> 
       
        <Link to="/reset">  <p
          className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-blue-800 mr-4"
          
        >
          Forgot Password?
        </p> </Link>
      
        <Link to="/register"> <p
          className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-blue-800"
          
        > Create New Account 
        </p> </Link> 
      
      </div>
    </form>
  </div>
  );
};

export default LoginPage;
