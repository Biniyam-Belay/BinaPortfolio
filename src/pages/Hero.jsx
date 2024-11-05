import photo from '../assets/photo.png';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full min-h-[50rem] flex items-center justify-center overflow-hidden" id="home">
            {/* Background Image & Gradient */}
            <div
                className="absolute inset-0 bg-[url('/abstract-bg.jpg')] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom right,
                        var(--tw-gradient-from-color, rgba(0,0,0,0.9)),
                        var(--tw-gradient-to-color, rgba(0,0,0,0.8))),
                        url('/abstract-bg.jpg')`
                }}
            >
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 animate-gradient"></div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 relative lg:left-[5rem] z-10 mt-[5rem] md:mt-[6rem]">
                {/* Left Content Section */}
                <div className="backdrop-blur-xl bg-white/5 dark:bg-black/30 rounded-3xl p-6 md:p-12 border border-gray-200/20 dark:border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-2 md:space-y-3">
                            <h2 className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-medium tracking-wide">Welcome to my portfolio</h2>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Biniyam Belay</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white/90">Graphic Designer | UI/UX Designer</h2>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                            Transforming ideas into elegant digital solutions. Specializing in creating immersive web experiences with modern technologies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-6 md:px-8 py-3 md:py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                            >
                                Explore Work
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-6 md:px-8 py-3 md:py-3.5 rounded-xl backdrop-blur-xl bg-gray-100/10 dark:bg-white/5 text-gray-900 dark:text-white font-medium border border-gray-200/20 dark:border-white/10 hover:bg-gray-100/20 dark:hover:bg-white/10 transition-all duration-300"
                            >
                                Get in Touch
                            </button>
                        </div>

                        {/* Tech Stack Icons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 md:pt-8">
                            <div className="text-gray-500 dark:text-gray-400 text-sm">Tech Stack:</div>
                            <div className="flex gap-3 md:gap-4 flex-wrap">
                                {['react', 'node', 'typescript', 'mongodb'].map((tech) => (
                                    <div key={tech}
                                        className="w-10 md:w-11 h-10 md:h-11 rounded-xl backdrop-blur-xl bg-gray-100/10 dark:bg-white/5 flex items-center justify-center hover:scale-110 hover:bg-gray-100/20 dark:hover:bg-white/10 transition-all duration-300 border border-gray-200/20 dark:border-white/10"
                                    >
                                        <img
                                            src={`/icons/${tech}.svg`}
                                            alt={tech}
                                            className="w-5 md:w-6 h-5 md:h-6"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - 3D or Animated Element */}
                <div className="hidden lg:flex items-center justify-center">
                    <div className="relative w-[300px] md:w-[480px] h-[300px] md:h-[480px]">
                        {/* Background Gradients */}
                        <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

                        {/* Image Container with Mask */}
                        <div className="absolute inset-4 rounded-full overflow-hidden">
                            <img
                                src={photo}
                                alt="photo"
                                className="w-full h-full object-cover object-center scale-[1]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                <div className="absolute top-20 left-20 w-24 h-24 backdrop-blur-xl bg-purple-500/10 rounded-full animate-float"></div>
                <div className="absolute bottom-20 right-40 w-20 h-20 backdrop-blur-xl bg-blue-500/10 rounded-full animate-float-delayed"></div>
                <div className="absolute top-40 right-20 w-16 h-16 backdrop-blur-xl bg-purple-500/10 rounded-full animate-float"></div>
            </div>
        </div>
    )
}

export default Hero
