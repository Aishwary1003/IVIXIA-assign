import logo from './logo.svg';
import './App.css';
import { NavLink, useLinkClickHandler } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Social from './components/Social';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import Logo from "./assets/Logo.png";
import globeimg from "./assets/globeimg.png";
import Footer from './components/Footer';
function App() {
             
       const[clicked,setClicked]=useState(false);
       



  return (
<div >
          <nav className='bg-teal-900 flex justify-between py-2 '>
                 <button className='pl-2' onClick={()=>{setClicked(!clicked);}}>
                  {clicked?(<ImCross/>):(<TiThMenuOutline/>)}
                 </button>


                <img  src={Logo} height={104} width={104}/>

                <div className='flex pr-4 gap-2'>
                 <img src={globeimg} height={20} width={28}/>
                 <select className='rounded-lg  pl-2 pr-24 border-none font-bold text-lg'>
                     <option>English </option>
                     <option >Hindi </option>
                     <option >Russian </option>
                     <option >Spanish </option>
                 </select>

                </div>
                
          </nav>



            <div className={`transition-transform duration-1000 ${clicked ? 'translate-y-0' : '-translate-y-full'}`}>

            {clicked &&    
           <div className=' bg-teal-900 flex flex-col items-center justify-center text-white gap-3 text-lg pb-2'>
            <NavLink to="/"><button onClick={()=>{setClicked(!clicked)}} className='hover:bg-teal-800 rounded-xl px-8 py-1 '>Home</button></NavLink>
            <NavLink to="about-us"><button onClick={()=>{setClicked(!clicked)}} className='hover:bg-teal-800 rounded-xl px-8 py-1'>About Us</button></NavLink>
            <NavLink to="social"> <button onClick={()=>{setClicked(!clicked)}} className='hover:bg-teal-800 rounded-xl px-8 py-1'>Social</button></NavLink>
            <NavLink to="contact-us"><button onClick={()=>{setClicked(!clicked)}} className='hover:bg-teal-800 rounded-xl px-8 py-1'>Contact Us</button></NavLink>

          </div>}

            </div>

               
              
                 

               

        
       

            <Routes>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/about-us" element={<About/>}/>
                 <Route path="/social" element={<Social/>}/>
                 <Route path="/contact-us" element={<Contact/>}/>
            </Routes>

            <Footer/>
 </div>
   
  );
}

export default App;
