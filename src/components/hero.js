import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/vimeo";
import paw from "./Fostering-Stray-Animals.jpg"
import time from "./jack-gilmore-joe-thompson-mit-whirlwind-00_0.png"
import gif from "./137184767-79a13ec7-1bb3-4341-a6da-3a149c9c159a.gif"
import todoimage from "./Screenshot 2025-01-12 at 5.35.11 AM.png"


function Hero() {
  return (
    <>
      <div className="text-slate-600 animate-bounce font-mono shadow-lg shadow-inherit text-center mt-24">
        ↓{" "}
      </div>
      <div className="main mx-4 my-10 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side content */}
          <div className="w-full md:w-3/5">
            <div className="font-bold font-mono text-4xl">Hi I'am</div>

            <span className="hover:cursor-custom font-bold my-1 font-sans text-7xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-600">
              Yuvraj Singh Bhati
            </span>

            <div className="font-mono my-2">
              Developer, Tech Enthusiast, Artist
            </div>
            <div className="font-sans flex justify-start font-medium">
            <p>As an indie developer, I specialize in building intuitive and efficient software solutions. With a versatile skill set spanning multiple frameworks and languages, I'm dedicated to transforming ideas into seamless digital experiences that leave a lasting impact.</p>

            
            </div>
            <div className="flex mt-3 space-x-2 flex-row">
              <a
                target="/"
                href="https://drive.google.com/file/d/1Z9NH7hnk9_e2DOq5IshLQu81Jd0cEYSo/view?usp=sharing"
              >
                <button className="border-white border hover:scale-105 transition-transform duration-300 ease-in-out p-2 cursor-pointer font-mono shadow-2xl hover:shadow-blue-500 hover:bg-white hover:text-black font-semibold rounded-full">
                  My Resume
                </button>
              </a>
            </div>

            <div className="flex space-x-3 justify-start my-2">
              <SocialIcon url="https://x.com/_Yuvraj_Bhati_" />
              <SocialIcon url="https://www.linkedin.com/in/yuvraj-singh-bhati-57528928a/" />
              <SocialIcon url="https://github.com/yuvrajbhatiofficial" />
              <SocialIcon url="https://www.instagram.com/yuvrajbhati.12/" />
              {/* <SocialIcon url="https://www.youtube.com/@yuvraj_bhati" /> */}
            </div>
          </div>

          {/* Right side gif */}
          <div className="w-full md:w-2/5 flex justify-center">
            <img 
              src={gif} 
              alt="Coding Animation"
              className="w-full max-w-md rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            />
          </div>
        </div>
      </div>
  
     

      {/* Tech stack area */}
      <div className="main m-3 flex flex-wrap">
        <h3 className="font-bold font-mono text-white mb-2 text-5xl hover:translate-x-4 transition-transform duration-300 ease-in-out w-full">
          My Tech Stack
        </h3>

        {/* Programming Languages */}
        <h4 className="w-full text-2xl font-mono text-gray-300 mt-6 mb-4">Programming Languages</h4>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 w-full">
          {[
            // { name: "C", icon: "c" },
            { name: "C++", icon: "cplusplus" },
            { name: "C#", icon: "csharp" },
            // { name: "Java", icon: "java" },
            { name: "JavaScript", icon: "javascript" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Python", icon: "python" },
            // { name: "PHP", icon: "php" },
            { name: "HTML5", icon: "html5" },
            { name: "CSS3", icon: "css3" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
                className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs text-center font-mono text-gray-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Frameworks & Libraries */}
        <h4 className="w-full text-2xl font-mono text-gray-300 mt-8 mb-4">Frameworks & Libraries</h4>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 w-full">
          {[
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Node.js", icon: "nodejs" },
            { name: "Express", icon: "express" },
            { name: "Bootstrap", icon: "bootstrap" },
            { name: "Tailwind", icon: "tailwindcss" },
            // { name: "Sass", icon: "sass" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
                className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs text-center font-mono text-gray-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Development Tools */}
        <h4 className="w-full text-2xl font-mono text-gray-300 mt-8 mb-4">Development Tools</h4>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 w-full">
          {[
            { name: "Git", icon: "git" },
            { name: "Docker", icon: "docker" },
            { name: "Firebase", icon: "firebase" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "MySQL", icon: "mysql" },
            
            { name: "Figma", icon: "figma" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
                className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs text-center font-mono text-gray-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Platforms & Technologies */}
        <h4 className="w-full text-2xl font-mono text-gray-300 mt-8 mb-4">Platforms & Technologies</h4>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 w-full">
          {[
            { name: "Vim", icon: "vim" },
            { name: "Git Hub", icon: "github" },
            { name: "Neo Vim", icon: "neovim" },
            { name: "Postman", icon: "postman" },
            // { name: "Linux", icon: "linux" },
            // { name: "Android", icon: "android" },
            // { name: "Arduino", icon: "arduino" },
           
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
                className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xs text-center font-mono text-gray-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects area */}
      <div className="element p-4 m-2">
        <h1 className="font-bold font-mono text-white mb-6 text-5xl hover:translate-x-4 transition-transform duration-300 ease-in-out">
          Projects
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* PawAlert Project */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
            <img src={paw} alt="PawAlert" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">PawAlert</h3>
              <p className="text-gray-400 mb-4">web-app for safety of stray animals using MERN Stack</p>
              
              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { name: "MongoDB", icon: "mongodb" },
                  { name: "Express", icon: "express" },
                  { name: "React", icon: "react" },
                  { name: "Node.js", icon: "nodejs" }
                ].map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex items-center justify-center bg-gray-700 rounded-md p-1.5"
                    title={tech.name}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-5 h-5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/yuvrajbhatiofficial/Paw-Alert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Time Capsule Project */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
            <img src={time} alt="Time Capsule" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">Time Capsule</h3>
              <p className="text-gray-400 mb-4">send messages to future or save somthing to your future ones</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { name: "React", icon: "cplusplus" },
                  // { name: "Node.js", icon: "nodejs" },
                  { name: "json", icon: "json" }
                ].map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex items-center justify-center bg-gray-700 rounded-md p-1.5"
                    title={tech.name}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-5 h-5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/yuvrajbhatiofficial/time-capsule"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* DNS Server Project */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
            <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/03/what-is-dns.png" alt="DNS Server" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">DNS Server</h3>
              <p className="text-gray-400 mb-4">Local DNS server created with dns-packet and dgram</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { name: "Node.js", icon: "nodejs" },
                  { name: "JavaScript", icon: "javascript" },
                  
                ].map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex items-center justify-center bg-gray-700 rounded-md p-1.5"
                    title={tech.name}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-5 h-5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/yuvrajbhatiofficial/DNS-server"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* To-do App Project */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
            <img src={todoimage} alt="To-do App" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">To-do App</h3>
              <p className="text-gray-400 mb-4">to-do Web app use event listeners</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { name: "HTML5", icon: "html5" },
                  { name: "CSS3", icon: "css3" },
                  { name: "JavaScript", icon: "javascript" }
                ].map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex items-center justify-center bg-gray-700 rounded-md p-1.5"
                    title={tech.name}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-5 h-5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/yuvrajbhatiofficial/To-Do-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

