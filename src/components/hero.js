import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/vimeo";
// import { ImMail4 } from "react-icons/im";
<link rel="stylesheet" href="index.css" />;
function hero() {
  return (
    <>
      <div className="text-slate-600  font-mono shadow-lg shadow-inherit text-center mt-24">
        welcome to my portfolio{" "}
      </div>
      <div className="main mx-4 my-10  text-white ">
        <div className="font-bold font-mono text-4xl">Hi I'am</div>

        <span className=" font-bold my-1 font-sans text-7xl bg-clip-text text-transparent  bg-gradient-to-r from-amber-500 to-pink-600 ">
          Yuvraj Singh Bhati
        </span>

        <div className="font-mono my-2">
          Developer , Tech Enthusiast ,Artist
        </div>
        <div className="font-sans font-medium">
          I'm a full-stack developer passionate about turning ideas into reality
          through code. With experience across multiple frameworks and
          languages, I am here to craft intuitive, efficient, and impactful web
          applications.
        </div>
        <div className=" flex mt-3  space-x-2 flex-row ">
          <button className="border-white border p-2 cursor-pointer font-mono  shadow-2xl hover:shadow-blue-900 font-semibold rounded-full ">
            Resume
          </button>
          <button className="border-white border p-2 cursor-pointer font-mono  shadow-2xl hover:shadow-blue-900 font-semibold rounded-full ">
            Contact Me
          </button>
        </div>

        <div className=" flex space-x-3 justify-start my-2">
          <SocialIcon url="https://x.com/_Yuvraj_Bhati_" />
          <SocialIcon url="https://www.instagram.com/yuvrajbhati.12/" />
          <SocialIcon url="https://github.com/yuvrajbhatiofficial" />
          <SocialIcon url="https://www.youtube.com/@yuvraj_bhati" />
          <SocialIcon url="https://www.linkedin.com/in/yuvraj-singh-bhati-57528928a/" />
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
      <h1 className="font-bold font-mono text-white mb-2 text-5xl">Projects</h1>
      <div className="element p-4  m-2">

      <div className="lotsOfCards space-y-4  grid md:grid-flow-col md:space-x-4 md:space-y-0">
        <div className="card max-w-sm shadow-xl hover:shadow-blue-950 rounded-lg overflow-hidden relative ">
          <div className="h-64 bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url("https://private-user-images.githubusercontent.com/144943200/363513520-f3ed11ef-1ebc-4a9e-8560-002c683bafd3.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY5MTYzMDcsIm5iZiI6MTcyNjkxNjAwNywicGF0aCI6Ii8xNDQ5NDMyMDAvMzYzNTEzNTIwLWYzZWQxMWVmLTFlYmMtNGE5ZS04NTYwLTAwMmM2ODNiYWZkMy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MjFUMTA1MzI3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OTJiNDRkOWM3OWQ4ZDIyMDg2ZDEyZTIxYjk0ODU2MzRiOWI0MTg3YTI2OTAyNzNjNmNlMjAwM2QzMDE3MThlNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0j_C04LGqwetW-WUHBm7KDudSSO2MvKfLy_9wyWsVWU")`,
            
          }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg "></div>

          </div>
          <div className="absolute text-white bottom-0 left-0 p-6 ">
            <h3 className="text-2xl  font-bold">Project Title</h3>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione iure necessitatibus temporibus?</p>
            <button className="bg-blue-500 font-semibold mt-4 px-3 py-2 rounded-sm hover:bg-blue-700 ">View Project</button>
          </div>
        </div>

        <div className="card max-w-sm rounded-lg overflow-hidden relative ">
          <div className="h-64 bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url("https://private-user-images.githubusercontent.com/144943200/363513520-f3ed11ef-1ebc-4a9e-8560-002c683bafd3.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY5MTYzMDcsIm5iZiI6MTcyNjkxNjAwNywicGF0aCI6Ii8xNDQ5NDMyMDAvMzYzNTEzNTIwLWYzZWQxMWVmLTFlYmMtNGE5ZS04NTYwLTAwMmM2ODNiYWZkMy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MjFUMTA1MzI3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OTJiNDRkOWM3OWQ4ZDIyMDg2ZDEyZTIxYjk0ODU2MzRiOWI0MTg3YTI2OTAyNzNjNmNlMjAwM2QzMDE3MThlNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0j_C04LGqwetW-WUHBm7KDudSSO2MvKfLy_9wyWsVWU")`,
            
          }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg "></div>

          </div>
          <div className="absolute text-white bottom-0 left-0 p-6 ">
            <h3 className="text-2xl  font-bold">Project Title</h3>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione iure necessitatibus temporibus?</p>
            <button className="bg-blue-500 font-semibold mt-4 px-3 py-2 rounded-sm hover:bg-blue-700 ">View Project</button>
          </div>

        </div>
        <div className="card max-w-sm  rounded-lg overflow-hidden relative ">
          <div className="h-64 bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url("https://private-user-images.githubusercontent.com/144943200/363513520-f3ed11ef-1ebc-4a9e-8560-002c683bafd3.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY5MTYzMDcsIm5iZiI6MTcyNjkxNjAwNywicGF0aCI6Ii8xNDQ5NDMyMDAvMzYzNTEzNTIwLWYzZWQxMWVmLTFlYmMtNGE5ZS04NTYwLTAwMmM2ODNiYWZkMy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MjFUMTA1MzI3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OTJiNDRkOWM3OWQ4ZDIyMDg2ZDEyZTIxYjk0ODU2MzRiOWI0MTg3YTI2OTAyNzNjNmNlMjAwM2QzMDE3MThlNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0j_C04LGqwetW-WUHBm7KDudSSO2MvKfLy_9wyWsVWU")`,
            
          }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg "></div>

          </div>
          <div className="absolute text-white bottom-0 left-0 p-6 ">
            <h3 className="text-2xl  font-bold">Project Title</h3>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione iure necessitatibus temporibus?</p>
            <button className="bg-blue-500 font-semibold mt-4 px-3 py-2 rounded-sm hover:bg-blue-700 ">View Project</button>
          </div>
        </div>

       


            </div>
        
      </div>

     


      
      {/* <div className="social">
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
      </div>  */}
      
    </>
  );
}



export default hero;




