import React from 'react'
import { SocialIcon } from 'react-social-icons'
<link rel="stylesheet" href="index.css" />

export default function contact() {
  return (
    <div className='flex justify-center'>
    <div className='container  my-24'>
    <div className=''>
      <h1 className='text-white mx-4 font-mono text-3xl'>Contact Me</h1>
    </div>
    
    <div className='contactForm mx-4 flex flex-col pt-12 items-center space-y-4 my-5 '>

      <div className='mb-3'>
        <input className='form w-80 h-10 bg rounded-lg p-2  shadow-md' type="text" id='isclient' placeholder='  enter your Name' />
      </div>

      <div className="mb-3">
        <input  className='form w-80 h-10 rounded-lg p-2  shadow-md' type="email" placeholder='  enter your Email ID' />
      </div>

      <div className="mb-3">
        <textarea  className='form w-80 h-36 rounded-lg p-2  shadow-md' type="text" placeholder='  your Message' />
      </div>

      <div class="mb-3" id ="form-check">
        <input type="checkbox" className="form-check-input" id="isClient"/>
          <label class="form-check-label" className='text-white mx-2' for="isClient">I want you to work on a project with me</label>
                    </div>

      <div className="mb-3 btn">
        <button className='bg-blue-500   px-4 py-2 rounded-lg shadow-lg font-semibold text-white hover:shadow-blue-800'>Submit</button>
      </div>
      <div className="social">
        <div className=" mx-4 ">
          <h1 className='text-white font-bold text-2xl text-center'>Contact me via</h1>
        <div className=' flex space-x-3 justify-center'>
        <SocialIcon bgColor='black' fgColor='white' network="email" url="mailto:yuvrajbhatiofficial@gmail.com" />
        <SocialIcon bgColor='' fgColor='white' url="https://x.com/_Yuvraj_Bhati_" />
        <SocialIcon bgColor='black' fgColor='white' url="https://www.instagram.com/yuvrajbhati.12/" />
        <SocialIcon bgColor='black' fgColor='white' url="https://github.com/yuvrajbhatiofficial" />
        <SocialIcon bgColor='black' fgColor='white' url="https://www.youtube.com/@yuvraj_bhati" />
        </div>
        </div>
      </div>
    </div>


    </div>
    
    </div>
    
  )
}
