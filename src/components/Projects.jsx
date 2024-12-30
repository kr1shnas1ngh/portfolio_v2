import React from 'react';

// SVG imports
import CheckoutIcon from "../assets/checkout.svg";
import GitHubIcon from "../assets/github.svg";
import AlexaImage from "../assets/alexa_developers_srm.jpg";

const ReactIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const TailwindIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg";

function Projects() {
    const projects = [
        {
            title: "Alexa Developers SRM",
            imgSrc: AlexaImage, // Use the imported image
            description: "Homepage for Alexa Developers SRM",
            techStack: ["React", "Tailwind"],
            date: "17-Oct-2024",
            link: "https://alexa-developers-srm.netlify.app/",
            github: "https://github.com/your-repo", // Update with actual GitHub link
        },
        // Add more projects as needed
    ];

    const techIcons = {
        React: ReactIcon,
        Tailwind: TailwindIcon,
        // Add more technologies and their icons as needed
    };

    return (
        <div className="lg:min-w-[60vw] w-full py-5 lg:py-[6rem] px-3 flex flex-col items-center">
            <div className="text-heading font-text2 text-primary1 mb-4 lg:text-start text-center">Projects</div>
            <div className="flex flex-col gap-6 border-t border-text2 pt-4 w-full">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col md:flex-row border hover:border-primary1 border-transparent rounded-lg shadow-md p-4"
                    >
                        <div className="relative flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-lg">
                            <img 
                                src={project.imgSrc} 
                                alt={project.title} 
                                className="w-full h-40 object-cover transition-opacity duration-300" 
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col justify-between w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
                            <div>
                                <h3 className="font-semibold text-xl text-text1">{project.title}</h3>
                                <p className="mt-2 text-sm text-text2">{project.description}</p>
                                <div className="mt-3 flex space-x-3">
                                    {project.techStack.map((tech) => (
                                        <img 
                                            key={tech} 
                                            src={techIcons[tech]} 
                                            alt={tech} 
                                            className="w-6 h-6"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 flex justify-between items-center text-sm text-text2">
                                <span>{project.date}</span>
                                <div className="flex items-center space-x-4">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center hover:text-primary1"
                                    >
                                        <img 
                                            src={GitHubIcon}
                                            alt="GitHub"
                                            className="w-6 h-6 mr-1"
                                        />
                                        <span className="text-gray-600">GitHub</span>
                                    </a>
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center text-primary1 hover:underline"
                                    >
                                        <img 
                                            src={CheckoutIcon}
                                            alt="Check out"
                                            className="w-6 h-6 mr-1"
                                        />
                                        <span>Check out</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
