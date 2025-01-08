import React from 'react';
import allsaint from './2024-03-25.jpg'
import tagore from './tagore-international-school-kuchaman-nagaur-cbse-schools-1z74vcn.jpg'
import newScience from './new-science-degree-college-ameerpet-hyderabad-degree-colleges-qwy7ouhxxa.jpg'
export default function About() {
  return (
    <div className="min-h-screen bg-dark text-white pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 2xl:px-0 2xl:max-w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-[2000px] mx-auto">
          {/* Left side - Image Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg" 
                alt="Coding" 
                className="rounded-lg shadow-lg hover:shadow-blue-500/50"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 mt-8">
              <img 
                src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" 
                alt="Development" 
                className="rounded-lg shadow-lg hover:shadow-blue-500/50"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg" 
                alt="Mobile Development" 
                className="rounded-lg shadow-lg hover:shadow-blue-500/50"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 mt-8">
              <img 
                src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" 
                alt="Web Design" 
                className="rounded-lg shadow-lg hover:shadow-blue-500/50"
              />
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="w-full md:w-1/2 max-w-2xl">
            <h1 className="text-4xl font-bold mb-6 font-mono bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg mb-6 font-mono">
            Hey there! 👋 I'm a passionate Software Developer who loves turning ideas into reality through code. My journey in tech has been driven by curiosity and a constant desire to learn and create.
            </p>
            <p className="text-lg mb-6 font-mono">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blogs.
            </p>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-20 max-w-[2000px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-mono text-center">What I Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Interest Cards */}
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 font-mono">Innovation</h3>
              <p className="font-mono">
                Passionate about exploring cutting-edge technologies and pushing the boundaries of what's possible.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2 font-mono">Creative Coding</h3>
              <p className="font-mono">
                Combining technical skills with creativity to build beautiful and functional applications.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2 font-mono">Problem Solving</h3>
              <p className="font-mono">
                Finding elegant solutions to complex problems through logical thinking and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* What I'm Good At Section */}
        <div className="mt-20 max-w-[2000px] mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-mono text-center">What I'm Good At</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
            {/* Hardware Engineering */}
            <div className="col-span-2 row-span-2 relative group transform hover:scale-105 transition-all duration-300 aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src="https://www.ko2.co.uk/wp-content/uploads/2022/05/Hardware-Motherboard-Edit.jpg.webp" 
                alt="Hardware Engineering" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white font-mono">Hardware Engineering</h3>
              </div>
            </div>

            {/* Gaming */}
            <div className="row-span-2 relative group transform hover:scale-105 transition-all duration-300 aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" 
                alt="Gaming" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white font-mono">Gaming</h3>
              </div>
            </div>

            {/* Basketball */}
            <div className="relative group transform hover:scale-105 transition-all duration-300 aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src="https://cdn.nba.com/manage/2025/01/tatum.jpg" 
                alt="Basketball" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white font-mono">Basketball</h3>
              </div>
            </div>

            {/* Chess */}
            <div className="relative group transform hover:scale-105 transition-all duration-300 aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-slate-700 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src="https://assetsio.gnwcdn.com/chess-playing-hand.jpeg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" 
                alt="Chess" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white font-mono">Chess Master</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20 mb-20 max-w-[2000px] mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-mono text-center">Education Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* College Education */}
            <div className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={newScience}
                  alt="College"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-blue-400 font-mono text-sm">2022 - 2025</span>
                <h3 className="text-xl font-bold mb-2 font-mono">Bachelor in Computer Applications</h3>
                <p className="text-gray-300 font-mono mb-2">Computer Science & Engineering</p>
                <p className="text-gray-400 font-mono">New Science College ,Osmania University</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {/* <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono">
                    CGPA: 8.5
                  </span> */}
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono">
                    Computer Science
                  </span>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={tagore} 
                  alt="High School"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-purple-400 font-mono text-sm">2020 - 2022</span>
                <h3 className="text-xl font-bold mb-2 font-mono">Higher Secondary Education</h3>
                <p className="text-gray-300 font-mono mb-2">Science Stream</p>
                <p className="text-gray-400 font-mono">Tagore International School</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {/* <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono">
                    Percentage: 95%
                  </span> */}
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono">
                    PCB
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary School */}
            <div className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-green-500/25 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={allsaint}
                  alt="Secondary School"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-green-400 font-mono text-sm">2009 - 2020</span>
                <h3 className="text-xl font-bold mb-2 font-mono">Secondary Education</h3>
                <p className="text-gray-300 font-mono mb-2">CBSE</p>
                <p className="text-gray-400 font-mono">All Saints Sr. Sec. School</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {/* <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono">
                    Percentage: 92%
                  </span> */}
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono">
                    Class X
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
