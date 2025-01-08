import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SocialIcon } from 'react-social-icons';
// import './index.css';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    emailjs.sendForm('service_7reejjq', 'template_lgrfhsr', form.current, 'RdqRvlUm8_Vlr3-TD')
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        setSuccess(true);
        form.current.reset(); // Reset the form after successful submission
      }, (error) => {
        console.error('Email sending failed:', error.text);
        setError('Failed to send email. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='flex justify-center min-h-[calc(100vh-120px)]'>
      <form ref={form} onSubmit={sendEmail} className='w-full max-w-md'>
        <div className='container my-24'>
          <h1 className='text-white mx-4 font-mono text-3xl'>Contact Me</h1>

          {success && <div className="text-green-500">Email sent successfully!</div>}
          {error && <div className="text-red-500">{error}</div>}

          <div className='contactForm mx-4 flex flex-col pt-12 items-center space-y-4 my-5'>
            <div className='mb-3'>
              <input 
                className='form w-full h-10 bg rounded-lg p-5 shadow-md' 
                type="text" 
                name='user_name' 
                placeholder='Enter your Name' 
                required 
              />
            </div>

            <div className="mb-3">
              <input 
                className='form w-full h-10 rounded-lg p-5 shadow-md' 
                type="email" 
                name='user_email' 
                placeholder='Enter your Email ID' 
                required 
              />
            </div>

            <div className="mb-3">
              <textarea 
                className='form w-full h-36 rounded-lg p-5 shadow-md' 
                name='message' 
                placeholder='Your Message' 
                required 
              />
            </div>

            <div className="mb-3">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="isClient" 
                name="isClient" 
              />
              <label 
                className='form-check-label text-white mx-2' 
                htmlFor="isClient"
              >
                I want you to work on a project with me
              </label>
            </div>

            <div className="mb-3">
              <button 
                type='submit' 
                disabled={loading} 
                className={`bg-blue-500 px-4 py-2 rounded-lg shadow-lg font-semibold text-white hover:shadow-blue-800 cursor-pointer ${loading ? 'opacity-50' : ''}`}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>

            <div className="social">
              <h1 className='text-white font-bold text-2xl text-center'>Contact me via</h1>
              <div className='flex space-x-3 justify-center'>
                <SocialIcon bgColor='black' fgColor='white' network="email" url="mailto:yuvrajbhatiofficial@gmail.com" />
                <SocialIcon bgColor='' fgColor='white' url="https://x.com/_Yuvraj_Bhati_" />
                <SocialIcon bgColor='black' fgColor='white' url="https://www.instagram.com/yuvrajbhati.12/" />
                <SocialIcon bgColor='black' fgColor='white' url="https://github.com/yuvrajbhatiofficial" />
                <SocialIcon bgColor='black' fgColor='white' url="https://www.youtube.com/@yuvraj_bhati" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
