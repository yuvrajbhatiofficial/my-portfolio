import React from 'react'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/vimeo'
// import { ImMail4 } from "react-icons/im";
<link rel="stylesheet" href="index.css" />
function hero() {
  return (
    <>
    <div className='text-slate-600  font-mono shadow-lg shadow-inherit text-center mt-24'>welcome to my portfolio </div>
    <div className='main mx-4 my-10  text-white '>
      
        <div className='font-bold font-mono text-4xl'>Hi I'am</div>
        

      
        
        <span className=' font-bold my-1 font-sans text-7xl bg-clip-text text-transparent  bg-gradient-to-r from-amber-500 to-pink-600 '>Yuvraj Singh Bhati</span>
        
        <div className='font-mono my-2'>Developer , Tech Enthusiast ,Artist</div>
        <div className='font-sans font-medium'>I'm a full-stack developer passionate about turning ideas into reality through code. With experience across multiple frameworks and languages, I am here to craft intuitive, efficient, and impactful web applications.</div>
        <div className=" flex mt-3  space-x-2 flex-row ">
          <button className='border-white border p-2 cursor-pointer font-mono  shadow-2xl hover:shadow-blue-900 font-semibold rounded-full '>Resume</button>
          <button className='border-white border p-2 cursor-pointer font-mono  shadow-2xl hover:shadow-blue-900 font-semibold rounded-full '>Contact Me</button>
          
        </div>
       
        <div className=' flex space-x-3 justify-start my-2'>
        <SocialIcon  url="https://x.com/_Yuvraj_Bhati_" />
        <SocialIcon  url="https://www.instagram.com/yuvrajbhati.12/" />
        <SocialIcon  url="https://github.com/yuvrajbhatiofficial" />
        <SocialIcon  url="https://www.youtube.com/@yuvraj_bhati" />
        <SocialIcon  url="https://www.linkedin.com/in/yuvraj-singh-bhati-57528928a/" />
        </div>
      
      </div>

      {/* this is skills and tech stack section   */}
      {/* <div className='element mx-4'>
        <h1 className='font-bold font-mono text-white text-5xl'>Skills & Tech Stack</h1>
        <div className="skill text-center   space-y-2">
          <div className="skillBox">
          
          </div>
          <div className="skillBox">
          
          </div>
          <div className="skillBox"> 
            
          </div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
          <div className="skillBox"></div>
        </div>
      </div> */}

      {/* this is my project area */}
      <div className="element">
        <h1 className='font-bold font-mono text-white text-5xl'>Projects</h1>
        <div className="projectArea flex flex-col  items-center ">
          <div className="projectCard">
            <h1 className='text-white font-mono text-2xl font-bold ml-2'>TextUtils app</h1>
          </div>
          <div className="projectCard">
          <h1 className='text-white font-mono text-2xl font-bold ml-2'>EcoAlert</h1>
          </div>
          <div className="projectCard">
          <h1 className='text-white font-mono text-2xl font-bold ml-2'>Facebook Clone (login page)</h1>
          </div>
        </div>
      </div>









      {/* <div className="intro">
        <div className="element mx-4">
          <h1 className='text-white font-bold text-3xl text-center'>What I do</h1>
          <p className='text-white font-mono mx-3 font-semibold text-xl'>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
         <div>
          <ul className='text-white font-mono p-4 '>
            <li className='space-x-2 flex flex-col'><span >⚡️ Research Engineer, active in Open Source communities. </span></li>
            <li className='space-x-2 flex flex-col'><span >⚡️ Working experience with Python, C/C++, PHP, PostgreSQL, Debian.    </span></li>
            <li className='space-x-2 flex flex-col'><span >⚡️ Working experience with Python, C/C++, PHP, PostgreSQL, Debian.   </span></li>
          </ul>
          </div>
        </div>
      </div>


      
      <div className="social">
        <div className=" mx-4 ">
          <h1 className='text-white font-bold text-3xl text-center'>Social</h1>
        <div className=' flex space-x-3 justify-center'>
        <SocialIcon bgColor='' fgColor='white' url="https://x.com/_Yuvraj_Bhati_" />
        <SocialIcon bgColor='black' fgColor='white' url="https://www.instagram.com/yuvrajbhati.12/" />
        <SocialIcon bgColor='black' fgColor='white' url="https://github.com/yuvrajbhatiofficial" />
        <SocialIcon bgColor='black' fgColor='white' url="https://www.youtube.com/@yuvraj_bhati" />
        <SocialIcon bgColor='black' fgColor='white' network="email" url="mailto:yuvrajbhatiofficial@gmail.com" />

        
        

        </div>
        </div>
      </div> */}

    </>
    
  )
}

export default hero
