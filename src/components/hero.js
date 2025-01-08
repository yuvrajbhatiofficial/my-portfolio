import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/vimeo";
import Imageone from "./369315286-21fd0159-eeb0-497f-9baf-a8d066f4e86c.jpg"
import Facebook from "./facebook.jpeg"
import Gallery from "./gallery.jpg"
import paw from "./Fostering-Stray-Animals.jpg"
import time from "./jack-gilmore-joe-thompson-mit-whirlwind-00_0.png"

function Hero() {
  return (
    <>
      <div className="text-slate-600 font-mono shadow-lg shadow-inherit text-center mt-24">
        welcome to my portfolio{" "}
      </div>
      <div className="main mx-4 my-10  text-white ">
        <div className="font-bold font-mono text-4xl">Hi I'am</div>

        <span className="  hover:cursor-custom font-bold my-1 font-sans text-7xl bg-clip-text text-transparent  bg-gradient-to-r from-amber-500 to-pink-600 ">
          Yuvraj Singh Bhati
        </span>

        <div className="font-mono my-2 ">
          Developer , Tech Enthusiast ,Artist
        </div>
        <div className="font-sans font-medium">
          I'm a indie developer passionate about turning ideas into reality
          through code. With experience across multiple frameworks and
          languages, I am here to craft intuitive, efficient, and impactful web
          applications.
        </div>
        <div className=" flex mt-3  space-x-2 flex-row ">
          <a
            target="/"
            href="https://drive.google.com/file/d/1Z9NH7hnk9_e2DOq5IshLQu81Jd0cEYSo/view?usp=sharing"
          >
            <button className="border-white border  hover:scale-105 transition-transform duration-300 ease-in-out p-2 cursor-pointer  font-mono  shadow-2xl hover:shadow-blue-500 hover:bg-white hover:text-black font-semibold rounded-full ">
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
  
     

      {/* Tech stack area */}
      <div className="main m-3 flex flex-wrap">
        <h3 className="font-bold font-mono text-white mb-2 text-5xl hover:translate-x-4 transition-transform duration-300 ease-in-out w-full">
          My Tech Stack
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 w-full">
          {[
            { name: "Vim", icon: "vim" },
            { name: "C", icon: "c" },
            { name: "C++", icon: "cplusplus" },
            { name: "C#", icon: "csharp" },
            { name: "CSS3", icon: "css3" },
            
            { name: "Docker", icon: "docker" },
            { name: "Express", icon: "express" },
            { name: "Figma", icon: "figma" },
            { name: "Firebase", icon: "firebase" },
            { name: "Git", icon: "git" },
            { name: "HTML5", icon: "html5" },
            
            { name: "Java", icon: "java" },
            { name: "JavaScript", icon: "javascript" },
            { name: "Linux", icon: "linux" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "MySQL", icon: "mysql" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Node.js", icon: "nodejs" },
            { name: "PHP", icon: "php" },
            { name: "Python", icon: "python" },
            { name: "React", icon: "react" },
            { name: "Sass", icon: "sass" },
            { name: "Tailwind", icon: "tailwindcss" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Android", icon: "android" },
            { name: "Arduino", icon: "arduino" },
            { name: "Bootstrap", icon: "bootstrap" },
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
          <ProjectCard
            title="PawAlert"
            description="web-app for safety of stray animals usin MERN Stack"
            image={paw}
            link="https://github.com/yuvrajbhatiofficial/Paw-Alert"
          />
          <ProjectCard
            title="Time Capsule"
            description="send messages to future or save somthing to your future ones "
            image={time}
            link="https://github.com/yuvrajbhatiofficial/time-capsule"
          />
          <ProjectCard
            title="TextUtils"
            description="A React app for text customization with dark mode and alert functionalities."
            image={Imageone}
            link="https://textutilityapp.tiiny.site"
          />
          <ProjectCard
            title="Facebook Login Page Clone"
            description="A responsive clone of the Facebook login page using Tailwind CSS."
            image={Facebook}
            link="https://github.com/yuvrajbhatiofficial/Facebook-Login-Page-Clone"
          />
          <ProjectCard
            title="Eco Alert"
            description="A mobile application project for MLH Hackathon 2024 (Frost Hacks)."
            image={Gallery}
            link="https://github.com/yuvrajbhatiofficial/EcoAlert"
          />
        </div>
      </div>
    </>
  );
}

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default Hero;

