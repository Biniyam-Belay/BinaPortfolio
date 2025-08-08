import { useEffect, useRef, useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Prevent scroll when modal is open + initial focus + open animation
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const raf = requestAnimationFrame(() => setIsVisible(true));
        const focusTimer = setTimeout(() => {
            closeButtonRef.current?.focus();
        }, 0);

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(focusTimer);
            document.body.style.overflow = 'unset';
        };
    }, []);

    // ESC to close + focus trap
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                e.stopPropagation();
                onClose();
            }

            if (e.key === 'Tab' && modalRef.current) {
                const focusableSelectors = [
                    'a[href]',
                    'button',
                    'textarea',
                    'input',
                    'select',
                    '[tabindex]:not([tabindex="-1"])'
                ];
                const focusable = modalRef.current.querySelectorAll(focusableSelectors.join(','));
                if (!focusable.length) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                } else if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown, true);
        return () => document.removeEventListener('keydown', handleKeyDown, true);
    }, [onClose]);

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
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            ref={modalRef}
        >
            {/* Enhanced Backdrop with more blur and lower opacity */}
            <div className={`fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

            {/* Adjusted Close Button position for mobile */}
            <button
                onClick={onClose}
                aria-label="Close dialog"
                ref={closeButtonRef}
                className="fixed top-4 right-4 md:top-6 md:right-6 z-[110] w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
            >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Modal Content - Adjusted padding for mobile */}
            <div className="relative min-h-screen py-4 md:py-12">
                <div
                    className={`relative w-full max-w-6xl mx-auto bg-gradient-to-b from-black/95 to-black/90 rounded-xl md:rounded-3xl backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-500/20 transform transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                >
                    {/* Project Header - Adjusted padding and font sizes */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                            <span className="inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-white/10 text-white backdrop-blur-xl border border-white/10 mb-3 md:mb-4">
                                {project.category}
                            </span>
                            <h2 id="project-title" className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">{project.title}</h2>
                            <p className="text-gray-300 text-sm md:text-xl max-w-3xl leading-relaxed">{project.description}</p>
                        </div>
                    </div>

                    {/* Project Details - Adjusted padding and grid */}
                    <div className="p-6 md:p-12">
                        {/* Project Info Cards - Modified grid for mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-16">
                            {[
                                { label: 'Client', value: project.client, icon: 'fas fa-building' },
                                { label: 'Role', value: project.role, icon: 'fas fa-user-tie' },
                                { label: 'Timeline', value: project.timeline, icon: 'fas fa-calendar' },
                                { label: 'Technologies', value: project.technologies, icon: 'fas fa-code' }
                            ].map((item, index) => (
                                <div key={index} className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                    <i className={`${item.icon} text-purple-500 mb-2 md:mb-3`}></i>
                                    <h3 className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">{item.label}</h3>
                                    <p className="text-white text-sm md:text-base font-medium">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Project Content - Adjusted spacing */}
                        <div className="space-y-8 md:space-y-16">
                            <section>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                                    <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mr-3">
                                        <i className="fas fa-eye text-purple-500 text-sm md:text-base"></i>
                                    </span>
                                    Project Overview
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-lg">{project.overview}</p>
                            </section>

                            <section>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                                    <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3">
                                        <i className="fas fa-tasks text-blue-500 text-sm md:text-base"></i>
                                    </span>
                                    Process & Challenges
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-lg">{project.process}</p>
                            </section>

                            {/* Gallery Section - Adjusted grid for mobile */}
                            <section>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-8 flex items-center">
                                    <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mr-3">
                                        <i className="fas fa-images text-purple-500 text-sm md:text-base"></i>
                                    </span>
                                    Project Gallery
                                </h3>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
                                    {project.gallery?.map((image, index) => (
                                        <div key={index} className="rounded-xl md:rounded-2xl overflow-hidden group">
                                    <img
                                        src={image}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Project Links - Adjusted for mobile */}
                        <div className="mt-8 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-6">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm md:text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
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
                                    className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-white/5 text-white text-sm md:text-base font-medium border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
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
