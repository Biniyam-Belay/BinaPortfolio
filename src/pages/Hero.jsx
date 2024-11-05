const Hero = () => {
    return (
        <div className="relative w-full h-[45rem] flex items-center justify-center overflow-hidden">
            {/* Background Image & Gradient */}
            <div
                className="absolute inset-0 bg-[url('/abstract-bg.jpg')] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(0,0,0,0.8)),
                    url('/abstract-bg.jpg')`
                }}
            >
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 animate-gradient"></div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-6 grid grid-cols-2 gap-12 relative z-10">
                {/* Left Content Section */}
                <div className="backdrop-blur-xl bg-black/30 rounded-3xl p-12 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-gray-300 text-xl font-medium tracking-wide">Welcome to my portfolio</h2>
                            <h1 className="text-6xl font-bold text-white leading-tight">
                                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">John Doe</span>
                            </h1>
                            <h2 className="text-3xl font-bold text-white/90">Full Stack Developer</h2>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Transforming ideas into elegant digital solutions. Specializing in
                            creating immersive web experiences with modern technologies.
                        </p>

                        <div className="flex gap-5">
                            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                                Explore Work
                            </button>
                            <button className="px-8 py-3.5 rounded-xl backdrop-blur-xl bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-all duration-300">
                                Get in Touch
                            </button>
                        </div>

                        {/* Tech Stack Icons */}
                        <div className="flex gap-6 pt-8">
                            <div className="text-gray-400 text-sm">Tech Stack:</div>
                            <div className="flex gap-4">
                                {['react', 'node', 'typescript', 'mongodb'].map((tech) => (
                                    <div key={tech}
                                        className="w-11 h-11 rounded-xl backdrop-blur-xl bg-white/5 flex items-center justify-center hover:scale-110 hover:bg-white/10 transition-all duration-300 border border-white/10">
                                        <img
                                            src={`/icons/${tech}.svg`}
                                            alt={tech}
                                            className="w-6 h-6"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - 3D or Animated Element */}
                <div className="flex items-center justify-center">
                    <div className="relative w-[480px] h-[480px]">
                        <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
                        <img
                            src="/your-profile-image.png"
                            alt="Profile"
                            className="absolute inset-4 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-20 w-24 h-24 backdrop-blur-xl bg-purple-500/10 rounded-full animate-float"></div>
                <div className="absolute bottom-20 right-40 w-20 h-20 backdrop-blur-xl bg-blue-500/10 rounded-full animate-float-delayed"></div>
                <div className="absolute top-40 right-20 w-16 h-16 backdrop-blur-xl bg-purple-500/10 rounded-full animate-float"></div>
            </div>
        </div>
    )
}

export default Hero
