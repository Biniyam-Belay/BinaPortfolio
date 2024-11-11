import { useState } from 'react';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            title: "Brand Identity Design",
            category: "Branding",
            description: "Complete brand identity design for modern tech startup",
            image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1000&auto=format&fit=crop",
            size: "large",
        },
        {
            title: "Mobile App UI",
            category: "UI/UX Design",
            description: "User interface design for fitness tracking application",
            image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1000&auto=format&fit=crop",
            size: "small",
        },
        {
            title: "E-commerce Website",
            category: "Web Design",
            description: "Full e-commerce platform design with user experience focus",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
            size: "tall",
        },
        {
            title: "Motion Graphics",
            category: "Animation",
            description: "Animated promotional content for social media",
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop",
            size: "small",
        },
        {
            title: "Product Design",
            category: "UI/UX Design",
            description: "SaaS platform interface design and user experience",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
            size: "wide",
        },
        // {
        //     title: "Social Media Campaign",
        //     category: "Marketing",
        //     description: "Comprehensive social media campaign design",
        //     image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
        //     size: "small",
        // }
    ];

    return (
        <div className="relative min-h-screen w-full py-20 overflow-hidden" id="projects">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95"></div>

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
                                transition-transform duration-300 hover:scale-[1.02]`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
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

                            {/* Hover Gradient Border */}
                            {hoveredIndex === index && (
                                <div className="absolute inset-0 border-2 border-gradient-to-r from-purple-500 to-blue-500 rounded-3xl pointer-events-none"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                        View All Projects
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
            </div>
        </div>
    );
};

export default Projects;
