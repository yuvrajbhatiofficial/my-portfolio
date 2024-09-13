import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Blogs from "./components/blogs";
import About from "./components/about";

import { HashRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  document.body.classList.add("customColor");

  return (
    <>
    
    <Router>
      <Routes>
    <Route exact path="/" element={<Hero/>}/>
    {/* <div className="main mx-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis obcaecati id esse.</div> */}
    <Route exact path="/contact" element={ <Contact/>} />
    <Route exact path="/blogs" element={ <Blogs/>} />
    <Route exact path="/about" element={<About/>}/>
    
    </Routes>
  <Navbar/>
</Router>


    <footer className=" rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <go to="https://github.com/yuvrajbhatiofficial" class="hover:underline ">YuvrajBhati™</go>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <go to="#" class="hover:underline me-4 md:me-6">About</go>
        </li>
        <li>
            <go to="#" class="hover:underline me-4 md:me-6">Privacy Policy</go>
        </li>
        <li>
            <go to="#" class="hover:underline me-4 md:me-6">Licensing</go>
        </li>
        <li>
            <go to="#" class="hover:underline">Contact</go>
        </li>
    </ul>
    </div>
</footer>
    </>
    

   );
}

export default App;
