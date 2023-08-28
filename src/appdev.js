import React from "react";
import {useState} from "react";
import {BsArrowLeftShort } from "react-icons/bs";
import {MdOutlineMenuBook } from "react-icons/md";
import {RiDashboardFill } from "react-icons/ri"; 
import {IoIosArrowDropup} from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import {Link as ScrollLink } from 'react-scroll';
import img from './images/app1.jpg'
import img1 from './images/skillf.jpg'
import img2 from './images/andrid.png'







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
        
        <h1 className=" pl-8 pt-6 font-medium text-[#1e7f17]" id={"About the course"}> App developement?</h1>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">App development refers to the process of creating software applications that run on mobile devices, such as smartphones or tablets. This can involve developing native apps that are designed specifically for a particular platform, such as iOS or Android, or developing web apps that can be accessed through a mobile browser.</p>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">Applications can be developed for various platforms, including iOS, Android, Windows, and macOS. They can be downloaded from app stores, such as the Apple App Store and Google Play Store, or they can be accessed through a web browser..</p>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">Applications can be designed for a variety of purposes, such as helping users organize their schedules, connect with friends and family, play games, or learn new skills. They can be free or paid, and they may offer in-app purchases or subscriptions.</p>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">All Android applications must be written using Kotlin, Java, and/or C/C++. Kotlin and Java are the primary languages developers use to build Android applications, while C++ is used to write performance-oriented or hardware-based features that use the Java Native Interface (JNI) to call native functions.</p>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">App development can be a complex process that requires a range of skills, including programming, design, and project management. Many app developers use specialized tools and frameworks to streamline the development process and ensure that the final product is high-quality and user-friendly.</p>
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
        <p className="pl-14"><a href="https://www.youtube.com/watch?v=EplH-amHTtE&list=PLUhfM8afLE_Ok-0Lx2v9hfrmbxi3GgsX1" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">1.neat roots</a></p>
    <p className="pl-14"><a href="https://www.youtube.com/watch?v=6fGp_Ko-bIQ&list=PLsyeobzWxl7p-lZvWabkVJdM_UVURhUh4" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">2.telusko</a></p>
    <p className="pl-14"><a href="https://www.youtube.com/watch?v=7eh4d6sabA0" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">3. Programming with mosh</a></p>
       
        

        </div>
        <h2 className="font-medium text-2xl mt-3 pl-16 mb-10 ">Best READING SITES</h2>
        <div className="pl-14 text-2xl  ">
        <p className="pl-14"><a href="https://www.w3schools.com/ai/default.asp" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">1. W3schools</a></p>
    <p className="pl-14"><a href="https://www.javatpoint.com/" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">2. javatpoint</a></p>
    <p className="pl-14"><a href="https://www.geeksforgeeks.org/" className="hover:text-green-500 hover:bg-gray-700 rounded-lg">3. geeksforgeeks</a></p>
       
        

        </div>
        
      </div>
      
      <div className="h-screen items-center bg-white mt-4  rounded-3xl mx-auto border-radius-[30px]">
        <h1 id={"Other Information"} className="pt-6 pl-8 font-medium text-[#1e7f17]">Other Information</h1>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">So, the fact that we all know is Android Shares more than 80% of the world’s mobile market share. Also, you should know that there are more than 3.5 billion users of Android, plus more than 3 million apps are available alone on the Google Play Store. </p>

        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">Isn’t that too big of a deal?

Android is dominating all other mobile operating systems in the market globally. There’s no doubt that Android applications will always be in demand. Companies like, Flipkart, Amazon, PayTM, Airtel, and many more are investing highly into third-party apps.  </p>
<img className=' sm:h-96    w-fit      h-1/5   mx-auto  mt-5' src={img2}  alt="/" />
       
       
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