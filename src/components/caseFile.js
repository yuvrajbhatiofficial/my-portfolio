import React, { useState, useEffect } from "react";
import CaseStudies from "./casestudies";

export const caseStudiesData = [
  {
    id: 1,
    title: "Freelancer Kit",
    tagline: "THE #1 CONTRACT & INVOICING SUITE FOR SOLO CREATORS",
    subtitle: "A professional document generator and SaaS platform for freelancers",
    category: "SaaS / Full Stack",
    date: "April 2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    metadata: {
      location: "India / Remote",
      industry: "FINTECH & SAAS",
      team: "1 Developer",
      duration: "3 Months",
      budget: "$15K"
    },
    challenges: [
      "Implement high-fidelity template creation with secure client PDF generation.",
      "Design real-time invoice status tracking and payment webhooks.",
      "Integrate complex subscription billing and payout verification.",
      "Provide seamless client signing workflows without requiring credentials."
    ],
    solutionText: "Freelancer Kit provides a complete, modern workspace for independent professionals. It handles proposal drafting, client signature collection, and automatic invoice reminders. Serving over 500+ active freelancers, it connects invoices with instant payment channels and stores everything securely.",
    solutionImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    inputSkills: [
      "UI/UX Design",
      "Hybrid Development",
      "Back-end Development",
      "Database Schema Design",
      "Payment Gateway Integration",
      "Cloud DevOps"
    ],
    functionalities: [
      { name: "PROPOSAL GENERATION", icon: "📝" },
      { name: "INVOICING ENGINE", icon: "🧾" },
      { name: "CONTRACT SIGNING", icon: "✍️" },
      { name: "CLIENT MANAGEMENT", icon: "👥" },
      { name: "PAYMENT PROCESSING", icon: "💳" },
      { name: "REMINDER AUTOMATION", icon: "🔔" }
    ],
    howWeDidIt: [
      { highlight: "FULL RESPONSIBILITY", description: "for architectural design, front-end rendering, database integrity, and subscription flows.", iconType: "🛡️" },
      { highlight: "3 MONTHS TO LAUNCH", description: "completed MVP development from scratch to production on schedule.", iconType: "📅" },
      { highlight: "RESEARCH & CHOICE", description: "selected Supabase and PostgreSQL to ensure low-latency secure document signing.", iconType: "🔍" },
      { highlight: "CUTTING EDGE STACK", description: "combined React, Node.js, and Supabase for real-time document workflows.", iconType: "⚡" }
    ],
    creationProcess: [
      { step: "1", title: "PRODUCT VISION", description: "Analyzed administrative pain points of freelancers to shape an all-in-one invoicing workspace." },
      { step: "2", title: "CONSULTING", description: "Researched PDF renderers and payment gateways to select the most cost-effective APIs." },
      { step: "3", title: "ARCHITECTURE DESIGN", description: "Designed relational tables in PostgreSQL for robust document integrity and audit trails." },
      { step: "4", title: "PRODUCT DESIGN", description: "Shaped clean, minimalistic layouts prioritizing speed and ease-of-use for solo creators." },
      { step: "5", title: "DEVELOPMENT", description: "Deployed frontend to Vercel and backend services to Render, supporting instant scaling." }
    ],
    results: {
      text: "We're proud of launching a robust, stable system that scales seamlessly. The product has quickly gained traction, saving hours of manual billing work for our beta group.",
      stats: [
        { value: "500+", label: "ACTIVE FREELANCERS" },
        { value: "4 Hrs", label: "SAVED WEEKLY PER USER" },
        { value: "2K+", label: "INVOICES GENERATED" }
      ]
    },
    technologies: ["React", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "PawAlert",
    tagline: "CENTRALIZING STRAY ANIMAL SAFETY ALERTS FOR SHELTERS",
    subtitle: "A MERN stack application connecting animal lovers and local rescue shelters",
    category: "Social Good / MERN",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    metadata: {
      location: "Hyderabad / Local",
      industry: "ANIMAL WELFARE",
      team: "2 Developers",
      duration: "2 Months",
      budget: "Open Source"
    },
    challenges: [
      "Aggregate scattered reports from disparate social channels into one platform.",
      "Implement high-accuracy geo-tagging and real-time shelter dispatch notifications.",
      "Support photo uploads on low-bandwidth connections in emergency zones.",
      "Build a robust shelter dashboard to coordinate rescue assignments."
    ],
    solutionText: "We developed a centralized, MERN-stack application featuring geo-tagged report creation. Users can upload a photo of a stray in distress, assign a location, and categorize the urgency. Local shelters are automatically notified based on geographical proximity.",
    solutionImage: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
    inputSkills: [
      "UI/UX Design",
      "Mobile First Web Dev",
      "Geospatial API Routing",
      "Database Optimization",
      "Push Notifications System"
    ],
    functionalities: [
      { name: "MAP GEO-TAGGING", icon: "📍" },
      { name: "PHOTO UPLOADS", icon: "📸" },
      { name: "SHELTER NOTIFICATIONS", icon: "🔔" },
      { name: "INCIDENT MANAGEMENT", icon: "🛡️" },
      { name: "COMMUNITY DIALOGUE", icon: "💬" },
      { name: "SHELTER DIRECTORY", icon: "📋" }
    ],
    howWeDidIt: [
      { highlight: "REAL-TIME ALERTS", description: "implemented socket-driven notifications to alert shelters within a 10km radius.", iconType: "📢" },
      { highlight: "2 MONTHS DEV", description: "built and refined MERN stack components during active user tests.", iconType: "📅" },
      { highlight: "DATA AGGREGATION", description: "consolidated scattered social reports into a single structured database.", iconType: "🗄️" },
      { highlight: "OFFLINE FALLBACKS", description: "designed query caching for reporting animals on weak cellular signals.", iconType: "💾" }
    ],
    creationProcess: [
      { step: "1", title: "PRODUCT VISION", description: "Interviewed local rescue organizations to document active shelter dispatch pain points." },
      { step: "2", title: "CONSULTING", description: "Sourced Leaflet map libraries and configured geo-queries in MongoDB." },
      { step: "3", title: "ARCHITECTURE DESIGN", description: "Designed database relations linking geolocation coordinates to active user listings." },
      { step: "4", title: "PRODUCT DESIGN", description: "Designed high-contrast alerts page optimizing submission speed on mobile devices." },
      { step: "5", title: "DEVELOPMENT", description: "Wired up socket triggers linking reporters, geo-coords, and dispatch teams." }
    ],
    results: {
      text: "PawAlert has streamlined shelter dispatch workflows, reducing response times from days to under 4 hours on average. Local rescue rates increased by 35% in participating pilot regions.",
      stats: [
        { value: "3.5 Hrs", label: "AVG RESPONSE TIME" },
        { value: "35%+", label: "INCREASE IN RESCUES" },
        { value: "1.2K", label: "REPORTS FILED" }
      ]
    },
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Local DNS Server",
    tagline: "LIGHTWEIGHT DNS DELEGATOR & HIGH SPEED CACHING",
    subtitle: "A lightweight, performant DNS forwarding and caching server built from scratch",
    category: "Systems / Network",
    date: "September 2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    metadata: {
      location: "Local / Development",
      industry: "NETWORK PROTOCOLS",
      team: "1 Developer",
      duration: "1 Month",
      budget: "R&D"
    },
    challenges: [
      "Parse and serialize raw binary DNS packet headers and resource records.",
      "Establish reliable, ultra-fast UDP communication on Port 53.",
      "Implement secure caching logic to avoid infinite resolution loops.",
      "Provide clean forwarding to root nameservers with custom query logs."
    ],
    solutionText: "Built entirely in Node.js using the native `dgram` library to establish UDP communication on port 53. The incoming DNS payloads are parsed and serialized via `dns-packet`, allowing the server to inspect requests, query a local database/caching layer, and delegate queries to upstream servers like Cloudflare (1.1.1.1) when necessary.",
    solutionImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    inputSkills: [
      "Network Socket Programming",
      "Binary Serialization",
      "Caching Strategies",
      "CLI Daemon Development",
      "Performance Auditing"
    ],
    functionalities: [
      { name: "UDP LISTENERS", icon: "⚡" },
      { name: "QUERY PARSING", icon: "⚙️" },
      { name: "UPSTREAM FORWARD", icon: "➡️" },
      { name: "RECORD CACHING", icon: "💾" },
      { name: "LOGGING ENGINE", icon: "🖥️" },
      { name: "FILTERING RULES", icon: "🛡️" }
    ],
    howWeDidIt: [
      { highlight: "PROTOCOL COMPLIANT", description: "fully parsed binary DNS packets complying with RFC-1035 standards.", iconType: "🛡️" },
      { highlight: "1 MONTH DEV", description: "implemented socket servers and CLI tooling within four weeks.", iconType: "📅" },
      { highlight: "ULTRA LOW LATENCY", description: "achieved cache query resolution in under 15 milliseconds.", iconType: "⚡" },
      { highlight: "LIGHTWEIGHT DEPLOY", description: "requires zero dependencies except Node.js runtime environment.", iconType: "🗄️" }
    ],
    creationProcess: [
      { step: "1", title: "PRODUCT VISION", description: "Reviewed raw DNS packet specs, byte sizes, and question formats." },
      { step: "2", title: "CONSULTING", description: "Sourced parsing modules and benchmarked raw UDP libraries." },
      { step: "3", title: "ARCHITECTURE DESIGN", description: "Created UDP sockets listening on Port 53 using Node dgram interface." },
      { step: "4", title: "PRODUCT DESIGN", description: "Built memory caching with TTL expiration checks to avoid query loops." },
      { step: "5", title: "DEVELOPMENT", description: "Added console logger showing domain queries, resolution time, and cache hits." }
    ],
    results: {
      text: "The server successfully resolved DNS queries in under 15ms for cached records, providing a lightweight, low-overhead alternative to Pi-hole or BIND for local development routing.",
      stats: [
        { value: "<15ms", label: "CACHE RESOLUTION" },
        { value: "0.01s", label: "STARTUP TIME" },
        { value: "100%", label: "CLI LOG CLARITY" }
      ]
    },
    technologies: ["Node.js", "dgram", "dns-packet", "JavaScript"]
  },
  {
    id: 4,
    title: "ChessOn",
    tagline: "INDIA'S FIRST COMPLETELY FREE CHESS TRAINING PLATFORM",
    subtitle: "A Next.js web application offering free chess training, puzzles, tournament information, and gear shopping, built to empower aspiring chess players.",
    category: "Web App / Next.js",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
    metadata: {
      location: "Remote / Cloud",
      industry: "EDUCATION / SPORTS & GAMING",
      team: "1 Developer",
      duration: "1 Month",
      budget: "Freelance"
    },
    challenges: [
      "Provide significant value and pro-level training without traditional monetization, requiring no logins or payments.",
      "Implement complex chess game logic, move validation, and progression for interactive chess puzzles.",
      "Optimize client-side performance, state management, and rendering speed for dynamic chessboard gameplay.",
      "Build scalable content delivery for over 1,000+ puzzles without relying on a complex database setup."
    ],
    solutionText: "We developed ChessOn with a 'no logins, no payments, no barriers' philosophy. By integrating chess.js for rule enforcement/validation and react-chessboard for a premium interactive UI, users can play puzzles seamlessly. Progress is saved locally via localStorage. To support scaling and rapid content loading, puzzle data is stored as a static JSON file fetched server-side in Next.js, and the platform is deployed to Vercel with integrated analytics.",
    solutionImage: "https://images.unsplash.com/photo-1586165368502-1badb97a6461?auto=format&fit=crop&w=800&q=80",
    inputSkills: [
      "Front-end Architecture",
      "Game Engine Integration",
      "Client State Management",
      "Static Data Delivery",
      "Responsive UI Design"
    ],
    functionalities: [
      { name: "INTERACTIVE PUZZLES", icon: "🧩" },
      { name: "TOURNAMENT REGISTRATION", icon: "🏆" },
      { name: "CHESS GEAR SHOP", icon: "🛒" },
      { name: "VIDEO TRAINING", icon: "🎥" },
      { name: "ABOUT & COMMUNITY", icon: "🤝" },
      { name: "PROGRESS SAVING", icon: "💾" }
    ],
    howWeDidIt: [
      { highlight: "EMPOWERING FREE ACCESS", description: "Successfully designed a completely free chess learning ecosystem without sign-up or pay barriers.", iconType: "🔓" },
      { highlight: "CHESS ENGINE INTEGRATION", description: "Integrated chess.js with react-chessboard for accurate rules validation and automatic opponent moves.", iconType: "♟️" },
      { highlight: "PERFORMANCE OPTIMIZATION", description: "Leveraged Next.js Server-Side Rendering and static JSON fetching to achieve rapid load times.", iconType: "⚡" },
      { highlight: "LOCAL PROGRESS SAVING", description: "Built localStorage integration to persist user puzzle solving state across browser sessions.", iconType: "💾" }
    ],
    creationProcess: [
      { step: "1", title: "PRODUCT VISION", description: "Defined the mission to create a completely free, login-free chess training hub for Indian players." },
      { step: "2", title: "SYSTEM DESIGN", description: "Planned Next.js architecture with local static data files to simplify initial database complexity." },
      { step: "3", title: "DEVELOPMENT", description: "Wired up react-chessboard, configured move sequences, computer responses, and localStorage mechanisms." },
      { step: "4", title: "TESTING & QUALITY", description: "Verified correctness of chess rules validation, move timings, responsive layout, and edge cases." },
      { step: "5", title: "DEPLOYMENT", description: "Deployed to Vercel for high-performance global CDN delivery with integrated analytics monitoring." }
    ],
    results: {
      text: "ChessOn launched successfully as a performant, static-based Next.js web application. It offers high-quality training resources with zero financial burden, proving that professional-level chess education can be universally accessible.",
      stats: [
        { value: "1,000+", label: "INTERACTIVE PUZZLES" },
        { value: "₹0", label: "MONTHLY TRAINING COST" },
        { value: "Sub-1s", label: "AVG PAGE LOAD TIME" }
      ]
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "chess.js", "react-chessboard", "Node.js", "Vercel"]
  }
];

const CaseFile = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCase]);

  if (selectedCase) {
    return (
      <CaseStudies 
        caseStudy={selectedCase} 
        onBack={() => setSelectedCase(null)} 
        onSelectCase={setSelectedCase}
      />
    );
  }

  return (
    <>
      <section className="bg-dark pb-10 pt-20 flex justify-center lg:pb-20 lg:pt-[120px] min-h-screen">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[600px] text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold font-mono text-white sm:text-4xl md:text-[40px]">
                  Case Files
                </h2>
                <p className="text-base text-body-color font-mono text-gray-300">
                  Deep dives into my engineering process, architectural choices, and the problems I solve.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudiesData.map((caseStudy) => (
              <CaseCard
                key={caseStudy.id}
                title={caseStudy.title}
                subtitle={caseStudy.subtitle}
                category={caseStudy.category}
                date={caseStudy.date}
                image={caseStudy.image}
                technologies={caseStudy.technologies}
                onClick={() => setSelectedCase(caseStudy)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseFile;

const CaseCard = ({ image, date, title, subtitle, category, technologies, onClick }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col justify-between"
      onClick={onClick}
    >
      <div>
        <div className="relative overflow-hidden h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-2 left-2">
            <span className="bg-blue-700 font-mono px-3 py-1 rounded text-xs font-semibold text-white">
              {category}
            </span>
          </div>
        </div>
        <div className="p-5">
          {date && (
            <span className="text-blue-400 font-mono text-xs block mb-2">
              {date}
            </span>
          )}
          <h3 className="text-xl font-bold text-white mb-2 font-mono">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 font-sans">
            {subtitle}
          </p>
        </div>
      </div>
      
      <div className="p-5 pt-0">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-gray-700/50 text-gray-300 px-2 py-0.5 rounded text-xs font-mono border border-gray-600/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <button 
          className="text-blue-400 hover:text-blue-300 font-mono text-sm inline-flex items-center gap-1 transition-colors duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Read Case Study →
        </button>
      </div>
    </div>
  );
};
