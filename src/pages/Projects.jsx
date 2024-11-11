import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "E-commerce Dashboard",
            category: "Web Development",
            description: "Modern e-commerce analytics dashboard with real-time data visualization",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            size: "large",
            client: "E-commerce Solutions Inc.",
            role: "Lead Developer",
            timeline: "4 months",
            technologies: "React.js, Node.js, MongoDB",
            overview: "A comprehensive dashboard that helps e-commerce businesses track sales, inventory, and customer behavior in real-time.",
            process: "The development process included extensive research on user needs, multiple iterations of the UI design, and implementation of complex data visualization components.",
            gallery: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2944&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2938&auto=format&fit=crop"
            ],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example"
        },
        {
            title: "Mobile Banking App",
            category: "UI/UX Design",
            description: "User-centric mobile banking application design",
            image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2940&auto=format&fit=crop",
            size: "small",
            client: "FinTech Startup",
            role: "UI/UX Designer",
            timeline: "3 months",
            technologies: "Figma, Protopie",
            overview: "A modern mobile banking application focused on providing seamless financial management experience.",
            process: "Extensive user research, wireframing, and prototyping to create an intuitive and secure banking experience.",
            gallery: [
                "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2940&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2940&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556740714-a8395b3bf30e?q=80&w=2940&auto=format&fit=crop"
            ]
        },
        {
            title: "Brand Identity System",
            category: "Branding",
            description: "Complete brand identity design for tech startup",
            image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2942&auto=format&fit=crop",
            size: "tall",
            client: "Tech Innovators Ltd",
            role: "Brand Designer",
            timeline: "2 months",
            technologies: "Adobe Suite, Figma",
            overview: "Comprehensive brand identity system including logo, typography, color palette, and brand guidelines.",
            process: "Deep market research, competitor analysis, and multiple design iterations to create a unique and memorable brand identity.",
            gallery: [
                "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2942&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2942&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1634942537414-3bef9f0c3cc0?q=80&w=2942&auto=format&fit=crop"
            ]
        },
        {
            title: "Social Media Platform",
            category: "Web Development",
            description: "Full-stack social media platform with real-time features",
            image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2940&auto=format&fit=crop",
            size: "small",
            client: "Social Connect Inc",
            role: "Full Stack Developer",
            timeline: "6 months",
            technologies: "React, Node.js, Socket.io",
            overview: "A modern social media platform with real-time messaging, post sharing, and user interactions.",
            process: "Implemented complex real-time features, user authentication, and scalable architecture.",
            gallery: [
                "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2940&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2940&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1611162616305-c69b3037c7bb?q=80&w=2940&auto=format&fit=crop"
            ]
        },
        {
            title: "AI-Powered Analytics",
            category: "Web Development",
            description: "Advanced analytics platform with AI capabilities",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
            size: "wide",
            client: "Data Analytics Corp",
            role: "Lead Developer",
            timeline: "5 months",
            technologies: "Python, TensorFlow, React",
            overview: "An AI-powered analytics platform that provides predictive insights and data visualization.",
            process: "Integration of machine learning models, development of interactive dashboards, and implementation of real-time data processing.",
            gallery: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
            ]
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
