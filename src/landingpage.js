import React, { useState, useEffect } from "react";
import img3 from './images/skillf.jpg'
import img1 from './images/skillf.jpg'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom';
//import img2 from './images/l1.jpg'

import image1 from './images/l2.jpg';
import image2 from './images/l3.jpg';
import image3 from './images/l4.jpg';
import image4 from './images/l5.jpg';
import image5 from './images/l6.jpg';
import image6 from './images/l7.jpg';
import image7 from './images/l8.jpg';
import image8 from './images/l9.jpg';
import image9 from './images/l0.jpg';





const Land = () =>{
       

  const [images, setImages] = useState([]);


  useEffect(() => {
    const imageArray = [
      { id: 1, src: image1, alt: "Image 1", x: 0, y: 0 },
      { id: 2, src: image2, alt: "Image 2", x: 0, y: 0 },
      { id: 3, src: image3, alt: "Image 3", x: 0, y: 0 },
      { id: 4, src: image4, alt: "Image 4", x: 0, y: 0 },
      { id: 5, src: image5, alt: "Image 5", x: 0, y: 0 },
      { id: 6, src: image6, alt: "Image 6", x: 0, y: 0 },
      { id: 7, src: image7, alt: "Image 7", x: 0, y: 0 },
      { id: 8, src: image8, alt: "Image 8", x: 0, y: 0 },
      { id: 9, src: image9, alt: "Image 9", x: 0, y: 0 },
    ];
    setImages(imageArray);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(shuffleImages, 1000);
    return () => clearInterval(intervalId);
  });

  const shuffleImages = () => {
    const shuffledImages = images.map((image) => ({
      ...image,
      x: Math.floor(Math.random() * 3) - 1,
      y: Math.floor(Math.random() * 3) - 1,
    }));
    setImages(shuffledImages);
  };
      
  return (
    <>
    <div className='h-[320px] bg-[#24242e]'>
    <div className=" flex justify-between items-center h-24 bottom-14  mx-auto  text-white " >
      
     
    
        <img className=' mt-4 ml-6 w-14' src={img3}  alt="/" />
       <Link to='login'> <button className='p-6 pr-12  text-[#282a35] bg-white w-[150px] rounded-md font-medium my-auto mx-3 py-3'>Register/Login</button></Link>
    </div>
    <div className='h-48 pt-4 '>
      
    <h1 className="   text-8xl w-full   text-center flex  justify-center  font-bold  text-white"> Skill Learn</h1>
    <p className='m-6 mx-auto text-center md:text-2xl text-xl font-bold text-gray-400'> To Guide students who are Interested to Learn Trending Technologies .</p>
   
    </div>
    </div> 

    <div className='text-white bg-white '>
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <div className="grid grid-cols-3 gap-4">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                  style={{
                    transform: `translate(${image.x * 30}px, ${
                      image.y * 30
                    }px)`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover  rounded-full "
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-96 ">
              
              <div className="mx-auto my-auto mt-96">
           <Link to='login'><button
              className="bg-blue-500 hover:bg-blue-700 text-white  w-44 h-14 font-bold py-2 px-4 rounded-xl"
              
            >
              Get Started
            </button> </Link> </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className="h-48">
    <p className='m-6 mx-auto text-center md:text-xl text-lg font-bold text-black'> To Guide students who are Interested to Learn Trending Technologies .</p>
      </div>
    


        <footer className="bg-[#24242e] py-8 h-[320px] border-radius-[30px]">
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




    </>
    
  );
};

export default Land;