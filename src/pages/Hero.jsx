import photo from '../assets/photo.png';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const techStack = {
        development: [
            { name: 'React', icon: '/icons/dev/react.svg' },
            { name: 'Node.js', icon: '/icons/dev/node.svg' },
            { name: 'TypeScript', icon: '/icons/dev/typescript.svg' },
            { name: 'MongoDB', icon: '/icons/dev/mongodb.svg' }
        ],
        design: [
            { name: 'Figma', icon: '/icons/design/figma.svg' },
            { name: 'Photoshop', icon: '/icons/design/photoshop.svg' },
            { name: 'Illustrator', icon: '/icons/design/illustrator.svg' },
            { name: 'After Effects', icon: '/icons/design/aftereffects.svg' }
        ]
    };

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" id="home">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1),rgba(0,0,0,0.2))]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(76,29,149,0.05)_0%,rgba(59,130,246,0.05)_100%)]"></div>
            </div>

            {/* Main Content */}
            <div className="container mt-[10rem] mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-12">
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse blur-xl opacity-50"></div>
                        <img
                            src={photo}
                            alt="Profile"
                            className="relative rounded-full w-full h-full object-cover border-2 border-white/10"
                        />
                    </div>

                    {/* Main Text */}
                    <div className="space-y-4 max-w-3xl">
                        <h2 className="text-purple-500 text-lg md:text-xl font-medium tracking-wide">
                            Welcome to my creative space
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Experiences</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Graphic Designer, UI/UX Designer & Developer crafting innovative digital solutions
                            that combine aesthetic beauty with functional excellence.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl transform hover:scale-105"
                        >
                            Let's Connect
                        </button>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-12 pt-12 border-t border-white/10">
                        <span className="text-gray-500 text-sm mb-8 block text-center">Technologies I work with</span>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                            {/* Development Tools */}
                            <div className="flex flex-col items-center">
                                <span className="text-gray-400 text-sm mb-4">Development</span>
                                <div className="flex flex-wrap justify-center gap-6">
                                    {techStack.development.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="group relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                                        >
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <span className="absolute -bottom-8 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                            {/* Design Tools */}
                            <div className="flex flex-col items-center">
                                <span className="text-gray-400 text-sm mb-4">Design</span>
                                <div className="flex flex-wrap justify-center gap-6">
                                    {techStack.design.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="group relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                                        >
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <span className="absolute -bottom-8 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
            </div>
        </div>
    );
};

export default Hero;
