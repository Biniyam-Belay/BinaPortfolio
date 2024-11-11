import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
    // Prevent scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Handle backdrop click
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-[100] overflow-y-auto"
            onClick={handleBackdropClick}
        >
            {/* Enhanced Backdrop with more blur and lower opacity */}
            <div className="fixed inset-0 bg-black/75 backdrop-blur-sm"></div>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-[110] w-14 h-14 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Modal Content - Added elevation effect */}
            <div className="relative min-h-screen py-12">
                <div className="relative w-full max-w-6xl mx-auto bg-gradient-to-b from-black/95 to-black/90 rounded-3xl backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/20 transform transition-all duration-300 hover:shadow-purple-500/30 hover:-translate-y-1">
                    {/* Project Header with enhanced gradient */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-12">
                            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-xl border border-white/10 mb-4">
                                {project.category}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
                            <p className="text-gray-300 text-xl max-w-3xl leading-relaxed">{project.description}</p>
                        </div>
                    </div>

                    {/* Project Details with enhanced styling */}
                    <div className="p-12">
                        {/* Project Info Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            {[
                                { label: 'Client', value: project.client, icon: 'fas fa-building' },
                                { label: 'Role', value: project.role, icon: 'fas fa-user-tie' },
                                { label: 'Timeline', value: project.timeline, icon: 'fas fa-calendar' },
                                { label: 'Technologies', value: project.technologies, icon: 'fas fa-code' }
                            ].map((item, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                    <i className={`${item.icon} text-purple-500 mb-3`}></i>
                                    <h3 className="text-gray-400 text-sm mb-2">{item.label}</h3>
                                    <p className="text-white font-medium">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Project Content with enhanced sections */}
                        <div className="space-y-16">
                            <section>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mr-3">
                                        <i className="fas fa-eye text-purple-500"></i>
                                    </span>
                                    Project Overview
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">{project.overview}</p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3">
                                        <i className="fas fa-tasks text-blue-500"></i>
                                    </span>
                                    Process & Challenges
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">{project.process}</p>
                            </section>

                            {/* Enhanced Gallery Section */}
                            <section>
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                    <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mr-3">
                                        <i className="fas fa-images text-purple-500"></i>
                                    </span>
                                    Project Gallery
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {project.gallery?.map((image, index) => (
                                        <div key={index} className="rounded-2xl overflow-hidden group">
                                            <img
                                                src={image}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Enhanced Project Links */}
                        <div className="mt-16 flex gap-6">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center"
                                >
                                    <i className="fas fa-external-link-alt mr-2"></i>
                                    View Live Site
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 rounded-xl bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center"
                                >
                                    <i className="fab fa-github mr-2"></i>
                                    View Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements for depth */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.1)_0%,transparent_25%)]"></div>
            </div>
        </div>
    );
};

export default ProjectModal;
