import React from "react";
import {useState} from "react";
import {BsArrowLeftShort } from "react-icons/bs";
import {MdOutlineMenuBook } from "react-icons/md";
import {RiDashboardFill } from "react-icons/ri"; 
import {IoIosArrowDropup} from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


import {Link as ScrollLink} from 'react-scroll';
import {Link} from 'react-router-dom';
import img from './images/dataanal.jpg'
import img1 from './images/skillf.jpg'
import img2 from './images/dataanal2.jpeg'







const Data =() =>{
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
            <Link to='/login'  ><button className='p-6 pr-6  text-[#282a35] bg-[#1bb669] w-[115px] rounded-3xl   border-slate-900 font-medium my-auto mx-3 py-3 ml-20'>Sign-out</button></Link>
              </li>
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
        
      <h1 className=" pl-8 pt-6 font-medium text-[#1e7f17]" id={"About the course"}>What Is Data Analysis?</h1>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">Data analysis is the process of gleaning insights from data to inform better business decisions. The process of analyzing data typically moves through five iterative phases: </p>
        
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-16 mt-6"> - Identify the data you want to analyze </p>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-16 mt-6"> - Collect the data </p>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-16 mt-6"> - Clean the data in preparation for analysis</p>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-16 mt-6"> - Analyze the data </p>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-16 mt-6"> - Interpret the results of the analysis </p>
        
        
        
        
        <h1 className=" pl-8 pt-6 font-medium text-[#1e7f17]" id={"About the course"}>What Does a Data Analyst Do?</h1>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">A data analyst collects, cleans, and interprets data sets in order to answer a question or solve a problem. They work in many industries, including business, finance, criminal justice, science, medicine, and government. </p>
    
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
        <h2 className="font-medium text-2xl mt-3 pl-16 mb-6 ">Best  certification programs(Frontend)</h2>
        <div className="pl-14 text-2xl  ">
        <p className="pl-14"><a href="https://www.udemy.com/courses/search/?src=ukw&q=data+analyst" className="hover:text-[#282a35] hover:bg-gray-300 rounded-lg">1. Udemy</a></p>
    <p className="pl-14"><a href="https://www.coursera.org/search?query=data%20analyst&irclickid=RYMVVKQbyxyNRem2to3eKwh-UkAQMsUHFzzTyE0&irgwc=1" className="hover:text-white hover:bg-gray-700 rounded-lg">2. Coursera</a></p>
    <p className="pl-14"><a href="https://grow.google/intl/en_in/certificates/" className="hover:text-white hover:bg-gray-700 rounded-lg">3. Grow eith Google</a></p>

        </div>
        
        <h2 className="font-medium text-2xl mt-3 pl-16 mb-6 ">Best YOUTUBE CHANNELS</h2>
        <div className="pl-14 text-2xl ">
        <p className="pl-14"><a href="https://www.youtube.com/watch?v=rGx1QNdYzvs&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF" className="hover:text-white hover:bg-gray-700 rounded-lg">1. Data analyst bootcamp</a></p>
    <p className="pl-14"><a href="https://www.youtube.com/watch?v=CaqJ65CIoMw" className="hover:text-white hover:bg-gray-700 rounded-lg">2. Simplilearn</a></p>
    <p className="pl-14"><a href="https://www.youtube.com/watch?v=Y6vY-fJbwUA" className="hover:text-white hover:bg-gray-700 rounded-lg">3. Edureka</a></p>
    
        </div>
        <h2 className="font-medium text-2xl mt-3 pl-16 mb-6 ">Best READING SITES</h2>
        <div className="pl-14 text-2xl  ">
        <p className="pl-14"><a href="https://www.w3schools.in/python-data-science/data-analysis" className="hover:text-white hover:bg-gray-700 rounded-lg">1. W3schools</a></p>
    <p className="pl-14"><a href="https://www.javatpoint.com/python-data-analytics" className="hover:text-white hover:bg-gray-700 rounded-lg">2. javaTpoint</a></p>
    <p className="pl-14"><a href="https://www.geeksforgeeks.org/what-is-data-analysis/" className="hover:text-white hover:bg-gray-700 rounded-lg">3. GeeksforGeeks</a></p>
       
        
  
        </div>
       
        
      </div>
      
      <div className="h-screen items-center bg-white mt-4  rounded-3xl mx-auto border-radius-[30px]">
        <h1 id={"Other Information"} className="pt-6 pl-8 font-medium text-[#1e7f17]">Other Information</h1>
        <p className="lg:text-2xl md:text-xl sm:text-lg text-lg pl-14 mt-6">From 2000 to the present day, there has been a consistent demand for Java developers. This demand has resulted in a steady increase in the number of Java developer jobs available worldwide. The graph of this growth would show an upward trend with some fluctuations due to economic and technological factors.</p>
        <img className=' sm:h-96  h-4-6    w-4/6  mx-auto  mt-5' src={img2}  alt="/" />
        
         
       
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

export default Data;