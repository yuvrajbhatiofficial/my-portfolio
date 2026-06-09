import React, { useEffect } from "react";
import { caseStudiesData } from "./caseFile";

// High-fidelity CSS/SVG Phone Mockup Frame
const PhoneMockup = ({ children, className = "" }) => {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] sm:max-w-[300px] ${className}`}>
      {/* Soft neon shadow behind the phone */}
      <div className="absolute inset-0 bg-blue-500/10 rounded-[48px] blur-2xl scale-105 pointer-events-none"></div>
      
      {/* Outer Titanium Bezel */}
      <div className="relative mx-auto bg-slate-950 border-[6px] border-slate-800 rounded-[48px] overflow-hidden aspect-[9/18.5] shadow-2xl p-1.5 ring-1 ring-white/10">
        
        {/* Dynamic Island Notch */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-5.5 bg-black rounded-full z-20 flex items-center justify-between px-3 border border-white/5">
          <span className="w-1 h-1 rounded-full bg-blue-500/80 animate-pulse"></span>
          <span className="w-2.5 h-1 rounded-full bg-slate-800"></span>
        </div>

        {/* Screen inner content */}
        <div className="w-full h-full rounded-[38px] overflow-hidden bg-slate-900 relative">
          {/* Status bar mock */}
          <div className="absolute top-0 w-full h-8 px-6 flex justify-between items-center text-[10px] font-mono text-gray-400 font-bold z-10 select-none bg-gradient-to-b from-black/40 to-transparent">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <span className="w-4 h-2 bg-gray-400 rounded-sm inline-block relative">
                <span className="absolute top-0.5 right-0.5 bottom-0.5 left-0.5 bg-slate-900 rounded-sm"></span>
              </span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

const CaseStudies = ({ caseStudy, onBack, onSelectCase }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [caseStudy]);

  if (!caseStudy) return null;

  // Filter other projects to link to at the bottom
  const otherProjects = caseStudiesData.filter((p) => p.id !== caseStudy.id);

  // Fallback to onBack if onSelectCase is not provided directly (to keep component robust)
  const handleSelectProject = (project) => {
    if (onSelectCase) {
      onSelectCase(project);
    } else {
      // In case App/CaseFile hasn't bound the prop, do standard navigation or reload state
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen text-white pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button Navigation */}
        <button 
          onClick={onBack}
          className="mb-12 font-mono text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group cursor-pointer bg-transparent border-0 outline-none"
        >
          <span className="group-hover:-translate-x-1.5 transition-transform duration-300 inline-block">←</span> Back to Case Files
        </button>

        {/* 1. HERO HEADER SECTION */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-16">
          {/* Hero Text */}
          <div className="md:col-span-7">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white font-mono tracking-tighter mb-4 uppercase">
              {caseStudy.title}
            </h1>
            <p className="text-base md:text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold mb-6 tracking-wide">
              {caseStudy.tagline}
            </p>
            <p className="text-gray-300 text-base md:text-lg font-sans leading-relaxed max-w-xl">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* Hero Image Mockup (Browser Frame) */}
          <div className="md:col-span-5">
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl blur-2xl group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative bg-slate-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
                {/* Browser top window bar */}
                <div className="bg-slate-950 border-b border-gray-800 px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <span className="text-[10px] text-gray-500 font-mono ml-4 truncate">{caseStudy.title.toLowerCase().replace(" ", "_")}.js</span>
                </div>
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full object-cover aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* METADATA HORIZONTAL PANEL */}
        <div className="bg-slate-900/60 backdrop-blur-md rounded-xl border border-gray-800/80 p-6 md:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 text-center shadow-lg shadow-blue-500/5 mb-24">
          <div>
            <span className="text-xs text-gray-400 font-mono uppercase block mb-1 tracking-wider">Location</span>
            <span className="text-white font-mono font-bold text-sm md:text-base">{caseStudy.metadata.location}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400 font-mono uppercase block mb-1 tracking-wider">Industry</span>
            <span className="text-white font-mono font-bold text-sm md:text-base">{caseStudy.metadata.industry}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400 font-mono uppercase block mb-1 tracking-wider">Team Size</span>
            <span className="text-white font-mono font-bold text-sm md:text-base">{caseStudy.metadata.team}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400 font-mono uppercase block mb-1 tracking-wider">Duration</span>
            <span className="text-white font-mono font-bold text-sm md:text-base">{caseStudy.metadata.duration}</span>
          </div>
          <div className="col-span-2 md:col-span-1">
            <span className="text-xs text-gray-400 font-mono uppercase block mb-1 tracking-wider">Budget</span>
            <span className="text-white font-mono font-bold text-sm md:text-base">{caseStudy.metadata.budget}</span>
          </div>
        </div>

        {/* NEW SECTION 1: APP FUNCTIONALITY */}
        {caseStudy.functionalities && (
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black font-mono text-white mb-4 tracking-wider uppercase">
                APP FUNCTIONALITY
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {caseStudy.functionalities.map((func, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-5 bg-slate-900/40 border border-gray-800 rounded-xl hover:border-yellow-400/40 hover:bg-slate-900/80 transition-all duration-300 text-center shadow-lg"
                >
                  <span className="text-3xl mb-3">{func.icon}</span>
                  <span className="text-gray-300 font-mono text-[10px] font-bold uppercase tracking-wider leading-tight">
                    {func.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. CHALLENGES SECTION */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-24">
          {/* Left: Phone Screen Mockups (Using Premium PhoneMockup Component) */}
          <div className="md:col-span-5 order-2 md:order-1 flex justify-center gap-4">
            <PhoneMockup className="transform -rotate-6 scale-95 hover:rotate-0 transition-transform duration-500">
              <img src={caseStudy.image} alt="Challenge Screen A" className="w-full h-full object-cover pt-8" />
            </PhoneMockup>
            <PhoneMockup className="transform rotate-6 translate-y-4 scale-95 hover:rotate-0 transition-transform duration-500 hidden sm:block">
              <img src={caseStudy.image} alt="Challenge Screen B" className="w-full h-full object-cover pt-8" />
            </PhoneMockup>
          </div>

          {/* Right: Challenges List */}
          <div className="md:col-span-7 order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-black font-mono text-white mb-8 tracking-wider uppercase">
              CHALLENGES
            </h2>
            <div className="space-y-6">
              {caseStudy.challenges.map((challenge, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="text-lg font-bold font-mono text-yellow-400 bg-yellow-400/10 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border border-yellow-400/20">
                    {idx + 1}
                  </span>
                  <p className="text-gray-300 font-sans text-base md:text-lg leading-relaxed pt-1">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. SOLUTION SECTION */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-24">
          {/* Left: Solution text & links */}
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-6xl font-black font-mono text-white mb-8 tracking-wider uppercase">
              SOLUTION
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-sans leading-relaxed mb-8">
              {caseStudy.solutionText}
            </p>
            {/* Dynamic Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-5 py-2.5 bg-slate-900 border border-gray-800 rounded-full font-mono text-xs text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 cursor-pointer shadow-lg">
                <span>🤖</span> Android App
              </button>
              <button className="px-5 py-2.5 bg-slate-900 border border-gray-800 rounded-full font-mono text-xs text-gray-300 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 cursor-pointer shadow-lg">
                <span>🍎</span> iOS App
              </button>
              <button className="px-6 py-2.5 bg-white text-black font-mono font-bold text-xs rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 cursor-pointer shadow-lg">
                <span>🌐</span> Go to Website
              </button>
            </div>
          </div>

          {/* Right: Phone mockup solution screen */}
          <div className="md:col-span-5 flex justify-center">
            <PhoneMockup>
              <img 
                src={caseStudy.solutionImage} 
                alt="App Solution Screen" 
                className="w-full h-full object-cover pt-8" 
              />
            </PhoneMockup>
          </div>
        </div>

        {/* NEW SECTION 2: HOW WE DID IT */}
        {caseStudy.howWeDidIt && (
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black font-mono text-white mb-4 tracking-wider uppercase">
                HOW WE DID IT
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.howWeDidIt.map((item, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/40 border border-gray-800 rounded-xl p-6 hover:border-yellow-400/40 hover:bg-slate-900/60 transition-all duration-300 flex items-start gap-4 shadow-lg"
                >
                  <span className="text-3xl p-3 bg-yellow-400/10 rounded-lg text-yellow-400 border border-yellow-400/20 flex-shrink-0">
                    {item.iconType}
                  </span>
                  <div>
                    <h3 className="text-white font-mono font-bold text-lg mb-2 uppercase">
                      {item.highlight}
                    </h3>
                    <p className="text-gray-300 font-sans text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEW SECTION 3: CREATION PROCESS */}
        {caseStudy.creationProcess && (
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black font-mono text-white mb-4 tracking-wider uppercase">
                CREATION PROCESS
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
              {caseStudy.creationProcess.map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative bg-slate-900/40 border border-gray-800 p-6 rounded-xl flex flex-col items-center text-center hover:border-blue-500/30 transition-colors shadow-lg"
                >
                  {/* Process Step Badge */}
                  <div className="absolute -top-5 w-10 h-10 rounded-full bg-yellow-400 text-black font-bold font-mono flex items-center justify-center border-4 border-slate-950 shadow-lg text-lg">
                    {item.step}
                  </div>
                  <h4 className="mt-4 text-white font-mono font-bold text-sm tracking-wider mb-2 uppercase">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. OUR INPUT / TECHNOLOGIES WE USED */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black font-mono text-white mb-4 tracking-wider uppercase">
              TECHNOLOGIES WE USED
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudy.technologies.map((tech) => (
              <span 
                key={tech}
                className="bg-slate-900/60 border border-gray-800 hover:border-blue-500/40 text-gray-300 hover:text-white px-5 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-all shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 5. RESULTS SECTION */}
        <div className="bg-slate-900/40 border border-gray-800 rounded-xl p-8 md:p-12 text-center shadow-xl mb-24">
          <h2 className="text-4xl md:text-6xl font-black font-mono text-white mb-6 tracking-wider uppercase">
            RESULTS
          </h2>
          <p className="text-gray-300 text-base md:text-lg font-sans max-w-2xl mx-auto leading-relaxed mb-10">
            {caseStudy.results.text}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-800/80 pt-10">
            {caseStudy.results.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 animate-pulse">
                  {stat.value}
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* NEW SECTION 4: OTHER PROJECTS */}
        {otherProjects.length > 0 && (
          <div className="border-t border-gray-800/80 pt-16">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold font-mono text-white tracking-wider uppercase">
                OTHER PROJECTS
              </h2>
              <button 
                onClick={onBack}
                className="text-blue-400 hover:text-blue-300 text-sm font-mono flex items-center gap-1.5 transition-colors cursor-pointer bg-transparent border-0"
              >
                View all case studies <span className="text-lg">→</span>
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  className="bg-slate-900/40 border border-gray-850 hover:border-blue-500/30 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-700/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-mono text-white mb-2 uppercase">{project.title}</h3>
                    <p className="text-gray-400 text-sm font-sans mb-4 line-clamp-2">{project.subtitle}</p>
                    <span className="text-blue-400 hover:text-blue-300 font-mono text-sm inline-flex items-center gap-1">
                      Explore case study →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;
