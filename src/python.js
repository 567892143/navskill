import React from "react";
import {useState} from "react";
import {BsArrowLeftShort } from "react-icons/bs";
import {MdOutlineMenuBook } from "react-icons/md";
import {RiDashboardFill } from "react-icons/ri"; 
import {IoIosArrowDropup} from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import {Link as ScrollLink } from 'react-scroll';
import {Link } from 'react-router-dom';
import img from './images/python.jpg'
import img1 from './images/skillf.jpg'
import img2 from './images/python2.png'







const Neee =() =>{
  const [open ,setOpen]=useState(true);
  const Menua=[
    { id:1,
      title : "About the course"},
    { id:2,
      title : "RoadMap"},
    { id:3,
      title : "Sources"},
    { id:4,
      title : "Other Information"},
  ]
  return (
    
    <div >
    <div className="bg-[#282a35]">
      <header className="bg-[#282a35] border border-gray-500 rounded-2xl ">
        <div className="container mx-auto py-4 px-5 flex justify-between items-center">
        
          <h1 href="/" className="text-white font-bold text-3xl">Skill Learn </h1>
          <img className=' mt-2  h-16 w-18 mr-auto ml-8 mb-2' src={img1}  alt="/" />
          <nav>
            <ul className="flex  items-end ">
             
              <li>
              <Link to="/login"> <button className='p-6 pr-6  text-[#282a35] bg-[#1bb669] w-[115px] rounded-3xl   border-slate-900 font-medium my-auto mx-3 py-3 ml-20 hover:bg-zinc-100' >Sign-out</button></Link>              </li>
              <li>
              <button className='p-6 pr-6   text-[#282a35] bg-[#1bb669] w-[100px] rounded-3xl border-slate-900 font-medium my-auto mr-8 py-3'>Profile</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      
    </div>
    <div className="flex ">
    <nav className={` bg-[#282a35] text-white h-auto p-5 pt-8  ${open ? "w-72" : "w-20"} duration-500  relative`} >
          <BsArrowLeftShort className={`bg-white text-[#282a35] text-3xl rounded-full absolute -right-3 top-9 border border-[#282a35] cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}></BsArrowLeftShort>
          <div className="inline-flex">
            <MdOutlineMenuBook className="text-3xl mr-4"></MdOutlineMenuBook>
            <h1 className={`text-xl font-medium text-white duration-300 ${!open && "scale-0"} `}>Contents</h1>
            
          </div>
          <div>
          <ul className="pt-8 pr-10 font-medium">
                {Menua.map((menu , index) =>(
                  <>

                  <li key={index} className={`flex items-center gap-x-4  cursor-pointer p-2 hover:bg-slate-400 rounded-md mt-6 `}>
                      <span className="text-2xl block float-left">
                        <RiDashboardFill></RiDashboardFill>
                      </span>
                      <ScrollLink to={menu.title} smooth={true} offset={0} duration={300}><span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>{menu.title}</span></ScrollLink>
                  </li>
                  </>
                ))
                }
            </ul>
          </div>
    </nav>
    <header className="  text-4xl   items-center mx-auto pl-4 pt-4 pr-4 bg-[#282a35] ">
      <div className="sm:h-screen h-auto items-center bg-white rounded-3xl mx-auto border-radius-[30px]">
        
        <h1 className=" pl-8 pt-6 font-medium text-[#1e7f17]" id={"About the course"}>What is Python?</h1>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java.</p>
      <h2 className="font-medium mt-8  pl-8 mb-6 text-[#1e7f17]"> Applications</h2>
      <p className=" pl-14 lg:text-2xl md:text-xl sm:text-lg text-lg">1. GUI Applications (like Kivy, Tkinter, PyQt etc. ).</p><br />
      <p className=" pl-14 lg:text-2xl md:text-xl sm:text-lg text-lg">2.Web frameworks like Django (used by YouTube, Instagram, Dropbox)</p><br />
      <p className=" pl-14 lg:text-2xl md:text-xl sm:text-lg text-lg">3.Image processing (like OpenCV, Pillow)</p><br />
      <p className=" pl-14 lg:text-2xl md:text-xl sm:text-lg text-lg">4. Machine Learning.</p>
      <ScrollLink to={"About the course"} smooth={true} offset={0} duration={300}><span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}><IoIosArrowDropup className="text-4xl ml-auto mt-[38rem] mr-3 items-end"></IoIosArrowDropup></span></ScrollLink>
      </div>

      <div className="h-screen items-center bg-white mx-auto  mt-4 rounded-3xl border-radius-[30px]">
        <h1 id={"RoadMap"} className="pt-6 pl-8 font-medium text-[#1e7f17] "> RoadMap</h1>
        <img className=' sm:h-2/3  h-1/4    mx-auto  mt-20' src={img}  alt="/" />
        <ScrollLink to={"About the course"} smooth={true} offset={0} duration={300}><span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}><IoIosArrowDropup className="text-4xl ml-auto mt-[47rem] mr-3 items-end"></IoIosArrowDropup></span></ScrollLink>
      </div>
      

      <div className="h-screen items-center bg-white mx-auto mt-4  rounded-3xl border-radius-[30px]">
        <h1 id={"Sources"} className="font-medium pt-6 pl-8 text-[#1e7f17]"> Sources</h1>
        <h1 className="font-medium text-2xl mt-3 pl-16 mb-10 ">we recommend  you to learn by doing</h1>
        <h2 className="font-medium text-2xl mt-3 pl-16 mb-10 ">Best free certification programs</h2>
        <div className="pl-14 text-2xl  ">
        <p className="pl-14"><a href="https://www.udemy.com/" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">1. Udemy</a></p>
    <p className="pl-14"><a href="https://www.coursera.org/" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">2. Coursera</a></p>
    <p className="pl-14"><a href="https://www.educative.io/" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">3. Educative</a></p>

       
        

        </div>
        <h2 className="font-medium text-2xl mt-3 pl-16 mb-10 ">Best YOUTUBE CHANNELS</h2>
        <div className="pl-14 text-2xl ">
        <p className="pl-14"><a href="https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">1. Code with harry</a></p>
    <p className="pl-14"><a href="https://www.youtube.com/@edurekaIN" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">2. Edurekha</a></p>
    <p className="pl-14"><a href="https://www.youtube.com/@Telusko" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">3. Telusko</a></p>
       
        

        </div>
        <h2 className="font-medium text-2xl mt-3 pl-16 mb-10 ">Best READING SITES</h2>
        <div className="pl-14 text-2xl  ">
        <p className="pl-14"><a href="https://www.w3schools.com/python/default.asp" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">1. W3schools</a></p>
    <p className="pl-14"><a href="https://www.javatpoint.com/" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">2. javatpoint</a></p>
    <p className="pl-14"><a href="https://www.geeksforgeeks.org/" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">3. geeksforgeeks</a></p>
       
        

        </div>
        
      </div>
      
      <div className="h-screen items-center bg-white mt-4  rounded-3xl mx-auto border-radius-[30px]">
        <h1 id={"Other Information"} className="pt-6 pl-8 font-medium text-[#1e7f17]">Other Information</h1>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">Python has become increasingly popular in recent years and has been consistently ranked as one of the most popular programming languages in the world. Python's popularity can be attributed to its simplicity, versatility, and wide range of applications in areas such as data science, machine learning, web development, and scientific computing.</p>

        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">According to the TIOBE Index, which measures the popularity of programming languages based on search engine results, Python has been steadily increasing in popularity since 2005. </p>
        
        <img className=' sm:h-96   h-4-5    w-4/6  mx-auto   ' src={img2}  alt="/" />

       
      </div>
      
      
    </header>
    </div>



    <footer className="bg-[#282a35] py-8 h-[320px] border-radius-[30px]">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col">
          <img className="h-16 w-16  mr-auto ml-8 mb-2 mt-2 " src={img1} alt="Logo" />
          <p className="text-gray-200 leading-loose ml-8 mt-8">
            Skill Learn<br />
            Phone: (123) 456-7890<br />
            Email: info@yourcompany.com
          </p>
        </div>
        <div className="flex flex-row">
          <a href="#" className="text-gray-500 hover:text-gray-400 mr-4">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-400 mr-4">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-400 mr-4">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-400 pr-4">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center text-gray-500 mt-4">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
    
    
    </div>
  );
}

export default Neee;