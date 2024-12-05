import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import Nikehome from '../assets/Nikehome.png';
import Nike2 from '../assets/Nike2.png';
import Nike3 from '../assets/Nike3.png'
import Nike4 from '../assets/Nike4.png'

import Iphonehome from '../assets/Iphonehome.png';
import Iphone2 from '../assets/Iphone2.png';
import Iphone3 from '../assets/Iphone3.png'

import Brainwavehome from '../assets/Brainwavehome.png';
import Brainwave2 from '../assets/Brainwave2.png';
import Brainwave3 from '../assets/Brainwave3.png';
import Brainwave4 from '../assets/Brainwave4.png';
import Brainwave5 from '../assets/Brainwave5.png';

import Sirtonamain from '../assets/Sirtonamain.png';
import Sirtona2 from '../assets/Sirtona2.png';
import Sirtona3 from '../assets/Sirtona3.png';
import Sirtona4 from '../assets/Sirtona4.png';

import BiruhT from '../assets/BiruhT.png';
import Biruh2 from '../assets/Biruh2.png';
import Biruh4 from '../assets/Biruh4.png';
import Biruh5 from '../assets/Biruh5.png';
import Biruhmain from '../assets/Biruhmain.png';


const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Nike Landing Page Clone",
            category: "Web Development",
            description: "A modern, fully responsive clone of the official Nike website Landing Page, designed to deliver an immersive online shopping experience.",
            image: Nikehome,
            size: "large",
            client: "Portfolio Project",
            role: "Developer",
            timeline: "1 Weeks",
            technologies: "React.js and TailwindCSS",
            overview: "This project incorporates smooth navigation, product display.",
            // process: "The development process included extensive research on user needs, multiple iterations of the UI design, and implementation of complex data visualization components.",
            gallery: [
                Nikehome,
                Nike2,
                Nike3,
                Nike4
            ],
            liveUrl: "https://binanikeclone.netlify.app/",
            githubUrl: "https://github.com/Biniyam-Belay/NIkeClone"
        },
        {
            title: "Iphone Website Clone",
            category: "Web Development",
            description: "An Iphone 15 website clone, with integrated 3D product display with ThreeJs.",
            image: Iphonehome,
            size: "small",
            client: "Portfolio Project",
            role: "Developer",
            timeline: "2 Weeks",
            technologies: "React, TailwindCSS, ThreeJs, Gsap",
            overview: "An Iphone 15 website clone, with integrated 3D product display with ThreeJs.",
            // process: "Extensive user research, wireframing, and prototyping to create an intuitive and secure banking experience.",
            gallery: [
                Iphonehome,
                Iphone2,
                Iphone3
            ],
            liveUrl: "https://binaiphoneclone.netlify.app/",
            githubUrl: "https://github.com/Biniyam-Belay/IphoneWebsite_Clone"
        },
        {
            title: "Biruh Tutors",
            category: "Branding",
            description: "Complete brand identity design for tech startup providing online learning platform for student.",
            image: BiruhT,
            size: "tall",
            client: "Tech Innovators Ltd",
            role: "Brand Designer",
            timeline: "2 months",
            technologies: "Adobe Suite, Figma",
            overview: "Comprehensive brand identity system including logo, typography, color palette, and brand guidelines.",
            process: "Deep market research, competitor analysis, and multiple design iterations to create a unique and memorable brand identity.",
            gallery: [
                Biruh2,
                Biruhmain,
                Biruh5,
                Biruh4
            ]
        },
        {
            title: "Sirtona",
            category: "Branding",
            description: "Complete brand identity design for tech startup collecting and providing realtime user experience and marketing strategies for companies and customer on different products",
            image: Sirtonamain,
            size: "small",
            client: "Sirtona",
            role: "Graphic Designer",
            timeline: "4 months",
            technologies: "Adobe Photoshop , Adobe Illustrator, Affinity Designer, Affinity Publisher",
            overview: "Complete brand identity design for tech startup collecting and providing realtime user experience and marketing strategies for companies and customer on different products",
            // process: "Implemented complex real-time features, user authentication, and scalable architecture.",
            gallery: [
                // Sirtona2,
                // Sirtona3,
                Sirtona4
            ]
        },
        {
            title: "Brainwave",
            category: "Web Development",
            description: "A modern, fully responsive website, with customize animation and eye catching UI design.",
            image: Brainwavehome,
            size: "wide",
            client: "Portfolio Project",
            role: "Developer",
            timeline: "2 Weeks",
            technologies: "React, TailwindCSS, Gsap",
            overview: "A modern, fully responsive website, with customize animation and eye catching UI design.",
            // process: "Integration of machine learning models, development of interactive dashboards, and implementation of real-time data processing.",
            gallery: [
                Brainwave2,
                Brainwave3,
                Brainwave4,
                Brainwave5
            ],
            liveUrl: "https://binabrainwaveclone.netlify.app/",
            githubUrl: "https://github.com/Biniyam-Belay/brainwave"
        }
    ];

    return (
        <div className="relative min-h-screen w-full py-16 overflow-hidden" id="projects">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1),rgba(0,0,0,0.2))]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(76,29,149,0.05)_0%,rgba(59,130,246,0.05)_100%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 md:px-6 z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-6 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10
                                ${project.size === 'large' || project.size === 'wide' ? 'lg:col-span-2' : ''}
                                ${project.size === 'tall' ? 'row-span-2' : ''}
                                transition-transform duration-300 hover:scale-[1.02] cursor-pointer`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-4 py-1 mb-4 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-xl border border-white/10">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.description}
                                    </p>
                                </div>

                                {/* View Project Button */}
                                <div className="mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <button className="px-6 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
            </div>
        </div>
    );
};

export default Projects;
