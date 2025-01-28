import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Blogs from "./components/blogs";
import About from "./components/about";
import Preloader from "./components/preloader"; // Import the Preloader
import { SocialIcon } from 'react-social-icons';

import { HashRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2000); // Adjust loading time as needed

      return () => clearTimeout(timer);
  }, []);

  
  document.body.classList.add("customColor");

  return (
    <>
    
    <Router>
                {loading ? (
                    <Preloader /> // Show preloader while loading
                ) : (
                    
                    <>
                        <Routes>
                            <Route exact path="/" element={<Hero />} />
                            <Route exact path="/contact" element={<Contact />} />
                            <Route exact path="/blogs" element={<Blogs />} />
                            <Route exact path="/about" element={<About />} />
                        </Routes>
                        <Navbar />
                    </>
                )}
            </Router>


    <footer className="relative mt-20 overflow-hidden">
      {/* Wave SVG Background */}
      <div className="absolute w-full bottom-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="relative block w-full h-full">
          <path fill="#1f2937" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,149.3C672,160,768,224,864,229.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative bg-gray-800 pt-16 pb-6">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="flex flex-wrap justify-center">
            {/* Left Side - Logo & Text */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
                Let's Connect!
              </h3>
              <p className="text-gray-400 mb-4 max-w-sm mx-auto md:mx-0">
                Have a project in mind? Want to collaborate? Feel free to reach out!
              </p>
              <button 
                onClick={() => window.location.href = 'mailto:yuvrajbhatiofficial@gmail.com'}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                Get In Touch
              </button>
            </div>

            {/* Right Side - Social Links */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <SocialIcon url="https://github.com/yuvrajbhatiofficial" bgColor="#374151" fgColor="white" />
                <SocialIcon url="https://twitter.com/_Yuvraj_Bhati_" bgColor="#374151" fgColor="white" />
                <SocialIcon url="https://www.linkedin.com/in/yuvraj-singh-bhati-57528928a/" bgColor="#374151" fgColor="white" />
                {/* <SocialIcon url="https://www.youtube.com/@yuvraj_bhati" bgColor="#374151" fgColor="white" /> */}
              </div>
              <div className="text-gray-400 text-sm">
                Made with <span className="text-red-500">❤</span> by Yuvraj Singh Bhati
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} YuvrajBhati. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
    

   );
}

export default App;