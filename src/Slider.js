import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import img1 from './images/skillf.jpg'
import im from './images/emoj.png'

import slide_image_1 from './images/img1.jpg';
import slide_image_2 from './images/img2.jpg';
//import slide_image_3 from './images/img3.png';
import slide_image_4 from './images/img4.png';

import slide_image_5 from './images/img5.jpg';

import slide_image_6 from './images/img6.png';
import slide_image_7 from './images/img7.jpg';
import slide_image_8 from './images/img8.jpg';
import slide_image_9 from './images/img9.png';
//import mye from '../assets/emo.jpg';
//import modal from './pop';

function Slider(props) {
  return (
   
    <div >
    <div className="bg-white ">
      <header className="bg-[#0a0c13] border border-gray-500 rounded-2xl ">
        <div className="container mx-auto py-4 px-5 flex justify-between items-center">
        
          <h1 href="/" className="text-white font-bold text-3xl">Skill Learn </h1>
          <img className=' mt-2  h-16 w-18 mr-auto ml-8 mb-2' src={img1}  alt="/" />
          <nav>
            <ul className="flex  items-end ">
             
              <li>
              <Link to="/login"> <button className='p-6 pr-6  text-[#282a35] bg-[#1bb669] w-[115px] rounded-3xl   border-slate-900 font-medium my-auto mx-3 py-3 ml-20 hover:bg-zinc-100' >Sign-out</button></Link>              

              </li>
              <li>
              <button onClick={props.onClick} className='p-6 pr-6   text-[#282a35] bg-[#1bb669] w-[100px] rounded-3xl border-slate-900 font-medium my-auto mr-8 py-3'>Profile</button>
               </li>
            </ul>
          </nav>
        </div>
      </header>
      
      
      
    </div>

    <div className='bg-white bg-fixed my-20'>  
    
    
    <div className="  container  bg-white w-5/6 ml-auto mr-auto">
    <div className='flex'>
    <div><p className='text-3xl text-[#1e7f17] font-medium'>Get access to different courses and technologies here...</p> </div>
  <div> <img className=' mt-2  h-16 w-18 mr-auto ml-8 mb-2' src={im}  alt="/" /></div>
   </div>
   <br/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'4'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows:true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <Link to="/appdev" ><img  className=' rounded-3xl'src={slide_image_1} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/ai" > <img  className=' rounded-3xl'src={slide_image_2} alt="slide_image" /></Link>
        </SwiperSlide>
       
        <SwiperSlide>
        <Link to="/datascience" > <img className=' rounded-3xl'src={slide_image_4} alt="slide_image" /> </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/dataanalysis" > <img className=' rounded-3xl'src={slide_image_5} alt="slide_image" /> </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/python" > <img className=' rounded-3xl' src={slide_image_6} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/java" ><img className=' rounded-3xl'src={slide_image_7} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/webdev" > <img className=' rounded-3xl'src={slide_image_8} alt="slide_image" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/ml" > <img className=' rounded-3xl' src={slide_image_9} alt="slide_image" /></Link>
        </SwiperSlide>
    
       
       
       
     
        <div className="slider-controler bg-zinc-900">
          <div className="swiper-button-prev slider-arrow ">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </div>


    <footer className="bg-gray-800 py-8 h-[280px] border rounded-xl">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col">
          <img className="h-18 w-16  mr-auto ml-8 mb-2 mt-2 " src={img1} alt="Logo" />
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

export default Slider;
