const ProjectCard = ({ title, description, image, link, technologies }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies?.map((tech) => (
            <div 
              key={tech.name}
              className="flex items-center justify-center bg-gray-700 rounded-md p-1.5"
              title={tech.name}
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
                className="w-5 h-5"
              />
            </div>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}; 