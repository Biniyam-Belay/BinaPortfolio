import { projects } from '../lib/projects';
import { Link } from 'react-router-dom';


const Projects = () => {
    // Featured case-study bands inspired by reference

    return (
        <div className="relative min-h-screen w-full pt-24 pb-16 overflow-hidden" id="projects">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.08),rgba(0,0,0,0.2))]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(76,29,149,0.04)_0%,rgba(59,130,246,0.04)_100%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10">
                {/* Section Title */}
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Works</span>
                        </h2>
                        <p className="text-gray-400 mt-3 md:mt-4 max-w-2xl mx-auto">An editorial showcase — minimal, immersive, and elegant.</p>
                    </div>
                </div>

                {/* Featured Case Studies (alternating image/text) */}
                <div className="container mx-auto px-4 md:px-6">
                    <div className="space-y-16 md:space-y-24">
                        {projects.slice(0, 2).map((project, index) => {
                            const isEven = index % 2 === 0;
                            const imageOrder = isEven ? 'md:order-1' : 'md:order-2';
                            const contentOrder = isEven ? 'md:order-2' : 'md:order-1';
                            return (
                                <article key={index} className="relative">
                                    <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
                                        {/* Image side */}
                                        <div className={`relative md:col-span-7 ${imageOrder}`}>
                                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover aspect-[16/10] md:aspect-[16/9] transition-transform duration-700 ease-out hover:scale-105"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                            </div>
                                        </div>

                                        {/* Content side */}
                                        <div className={`md:col-span-5 ${contentOrder}`}>
                                            <div className="text-white/20 text-4xl md:text-6xl font-semibold mb-3 md:mb-4">{String(index + 1).padStart(3, '0')}</div>
                                            <h3 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-3">{project.title}</h3>
                                            <p className="text-gray-300 mb-5 md:mb-6 max-w-md">{project.description}</p>

                                            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                                                <div>
                                                    <div className="text-xs text-white/60 uppercase tracking-wider mb-1">Industry</div>
                                                    <div className="text-white/90 text-sm">{project.category}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-white/60 uppercase tracking-wider mb-1">Duration</div>
                                                    <div className="text-white/90 text-sm">{project.timeline}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-white/60 uppercase tracking-wider mb-1">Role</div>
                                                    <div className="text-white/90 text-sm">{project.role}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-white/60 uppercase tracking-wider mb-1">Stack</div>
                                                    <div className="text-white/90 text-sm">{project.technologies}</div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-3">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                                                    >
                                                        View Live
                                                    </a>
                                                )}
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-5 py-2.5 rounded-xl bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all"
                                                    >
                                                        Source Code
                                                    </a>
                                                )}
                                                <Link
                                                    to="/projects"
                                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent text-white/80 text-sm hover:text-white transition-colors"
                                                >
                                                    See more projects
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}

                        <div className="pt-4 text-center">
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                            >
                                See all projects
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Removed separate bottom details; details are inside each card */}
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
            </div>
        </div>
    );
};

export default Projects;
