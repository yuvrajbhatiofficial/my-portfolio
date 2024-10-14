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
          <a
            target="/"
            href="https://drive.google.com/file/d/1Z9NH7hnk9_e2DOq5IshLQu81Jd0cEYSo/view?usp=sharing"
          >
            <button className="border-white border p-2 cursor-pointer font-mono  shadow-2xl hover:shadow-blue-500 hover:bg-white hover:text-black font-semibold rounded-full ">
              My Resume
            </button>
          </a>
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

{/*tech stack area dont open p element  */}
<div className="main m-3 flex flex-wrap">
        <h3 className="font-bold font-mono text-white mb-2 text-5xl">My Tech Stack</h3>
           <p className="flex size-max space-x-5 flex-wrap">
          {" "}
          <a
            href="https://developer.android.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
              alt="android"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
              alt="arduino"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.cprogramming.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
              alt="c"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.w3schools.com/cpp/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
              alt="cplusplus"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.w3schools.com/cs/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
              alt="csharp"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.djangoproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://cdn.worldvectorlogo.com/logos/django.svg"
              alt="django"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
              alt="docker"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="figma"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.adobe.com/in/products/illustrator.html"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"
              alt="illustrator"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.java.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
              alt="java"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="linux"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
              alt="nextjs"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.photoshop.com/en"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
              alt="photoshop"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.php.net" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
              alt="php"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://reactnative.dev/img/header_logo.svg"
              alt="reactnative"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://redux.js.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
              alt="sass"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.selenium.dev" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg"
              alt="selenium"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.sketch.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg"
              alt="sketch"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://developer.apple.com/swift/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg"
              alt="swift"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://unity.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
              alt="unity"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          </p>
        </div>

      {/* this is my project area */}
      <div className="element p-4  m-2">
      <h1 className="font-bold font-mono text-white mb-2 text-5xl">Projects</h1>
        <div className="lotsOfCards space-y-4  grid md:grid-flow-col md:space-x-4 md:space-y-0">
          <div className="card max-w-sm shadow-xl hover:shadow-blue-950 rounded-lg overflow-hidden relative ">
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url("https://private-user-images.githubusercontent.com/144943200/363513520-f3ed11ef-1ebc-4a9e-8560-002c683bafd3.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY5MTYzMDcsIm5iZiI6MTcyNjkxNjAwNywicGF0aCI6Ii8xNDQ5NDMyMDAvMzYzNTEzNTIwLWYzZWQxMWVmLTFlYmMtNGE5ZS04NTYwLTAwMmM2ODNiYWZkMy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MjFUMTA1MzI3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OTJiNDRkOWM3OWQ4ZDIyMDg2ZDEyZTIxYjk0ODU2MzRiOWI0MTg3YTI2OTAyNzNjNmNlMjAwM2QzMDE3MThlNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0j_C04LGqwetW-WUHBm7KDudSSO2MvKfLy_9wyWsVWU")`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg "></div>
            </div>
            <div className="absolute text-white bottom-0 left-0 p-6 ">
              <h3 className="text-2xl  font-bold">Project Title</h3>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique ratione iure necessitatibus temporibus?
              </p>
              <button className="bg-blue-500 font-semibold mt-4 px-3 py-2 rounded-sm hover:bg-blue-700 ">
                View Project
              </button>
            </div>
          </div>

          <div className="card max-w-sm rounded-lg overflow-hidden relative ">
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url("https://private-user-images.githubusercontent.com/144943200/363513520-f3ed11ef-1ebc-4a9e-8560-002c683bafd3.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY5MTYzMDcsIm5iZiI6MTcyNjkxNjAwNywicGF0aCI6Ii8xNDQ5NDMyMDAvMzYzNTEzNTIwLWYzZWQxMWVmLTFlYmMtNGE5ZS04NTYwLTAwMmM2ODNiYWZkMy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MjFUMTA1MzI3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OTJiNDRkOWM3OWQ4ZDIyMDg2ZDEyZTIxYjk0ODU2MzRiOWI0MTg3YTI2OTAyNzNjNmNlMjAwM2QzMDE3MThlNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0j_C04LGqwetW-WUHBm7KDudSSO2MvKfLy_9wyWsVWU")`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg "></div>
            </div>
            <div className="absolute text-white bottom-0 left-0 p-6 ">
              <h3 className="text-2xl  font-bold">Project Title</h3>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique ratione iure necessitatibus temporibus?
              </p>
              <button className="bg-blue-500 font-semibold mt-4 px-3 py-2 rounded-sm hover:bg-blue-700 ">
                View Project
              </button>
            </div>
          </div>
          <div className="card max-w-sm  rounded-lg overflow-hidden relative ">
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url("https://private-user-images.githubusercontent.com/144943200/363513520-f3ed11ef-1ebc-4a9e-8560-002c683bafd3.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY5MTYzMDcsIm5iZiI6MTcyNjkxNjAwNywicGF0aCI6Ii8xNDQ5NDMyMDAvMzYzNTEzNTIwLWYzZWQxMWVmLTFlYmMtNGE5ZS04NTYwLTAwMmM2ODNiYWZkMy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MjFUMTA1MzI3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OTJiNDRkOWM3OWQ4ZDIyMDg2ZDEyZTIxYjk0ODU2MzRiOWI0MTg3YTI2OTAyNzNjNmNlMjAwM2QzMDE3MThlNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0j_C04LGqwetW-WUHBm7KDudSSO2MvKfLy_9wyWsVWU")`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg "></div>
            </div>
            <div className="absolute text-white bottom-0 left-0 p-6 ">
              <h3 className="text-2xl  font-bold">Project Title</h3>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique ratione iure necessitatibus temporibus?
              </p>
              <button className="bg-blue-500 font-semibold mt-4 px-3 py-2 rounded-sm hover:bg-blue-700 ">
                View Project
              </button>
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
