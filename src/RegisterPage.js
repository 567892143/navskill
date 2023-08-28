import React from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";
import { useState } from "react";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [registerStatus, setRegisterStatus] = useState("");

    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/register", {
          email: email,
          username: username,
          password: password,
        }).then((response) => {
          // setRegisterStatus(response);
          // console.log(response);
          if(response.data.message){
            setRegisterStatus(response.data.message);
          }else{
           setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
           console.log("ACCOUNT CREATED SUCCESSFULLY"); 
           
          }
        })
      }
  
    return (
      <div class="min-h-screen flex items-center justify-center bg-slate-900">
      <div class="max-w-md w-full bg-yellow-200 p-8 rounded-md shadow-md">
          <h2 class="text-lg font-extrabold text-gray-900 mb-6 flex justify-center">Register</h2>
          <form>
              <div class="mb-4">
                  <label class="block text-red-700 font-bold mb-2" htmlFor="email">
                      Email
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Enter your email"/>
              </div>
              <div class="mb-4">
                  <label class="block text-red-700 font-bold mb-2" htmlFor="username">
                      username
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"  onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your username"/>
              </div>
              <div class="mb-4">
                  <label class="block text-red-700 font-bold mb-2" htmlFor="password">
                      Password
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your password"/>
              </div>
             
              <div class="flex items-center justify-between">
                  <button class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"  onClick={register}>
                      Register
                  </button>
              </div>
              <Link to="/login">  <p
          class="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-blue-800"
          
        >
           Already have Account 
        </p> </Link> 
          </form>
      </div>
  </div>
    
);
}
export default RegisterPage;