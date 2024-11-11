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
            className="fixed inset-0 z-50 overflow-y-auto"
            onClick={handleBackdropClick}  // Added click handler
        >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm"></div>

            {/* Close Button - Now fixed */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-[60] w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Modal Content */}
            <div className="relative min-h-screen py-8">
                <div className="relative w-full max-w-6xl mx-auto bg-black/90 rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden">
                    {/* Project Header */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h2>
                            <p className="text-gray-300 text-lg max-w-3xl">{project.description}</p>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8">
                        {/* Project Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {[
                                { label: 'Client', value: project.client },
                                { label: 'Role', value: project.role },
                                { label: 'Timeline', value: project.timeline },
                                { label: 'Technologies', value: project.technologies }
                            ].map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <h3 className="text-gray-400 text-sm">{item.label}</h3>
                                    <p className="text-white font-medium">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Project Content */}
                        <div className="space-y-12">
                            {/* Overview */}
                            <section>
                                <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                                <p className="text-gray-300 leading-relaxed">{project.overview}</p>
                            </section>

                            {/* Process/Challenges */}
                            <section>
                                <h3 className="text-2xl font-bold text-white mb-4">Process & Challenges</h3>
                                <p className="text-gray-300 leading-relaxed">{project.process}</p>
                            </section>

                            {/* Project Screenshots */}
                            <section>
                                <h3 className="text-2xl font-bold text-white mb-6">Project Gallery</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.gallery?.map((image, index) => (
                                        <div key={index} className="rounded-xl overflow-hidden">
                                            <img
                                                src={image}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-auto hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Project Links */}
                        <div className="mt-12 flex gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                                >
                                    View Live
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-xl bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
