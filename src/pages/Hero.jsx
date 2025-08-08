// Revamped hero inspired by aconite.io — editorial headline, elegant background, clear CTAs

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full min-h-screen flex items-center overflow-hidden pt-16" id="home">
            {/* Background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.08),rgba(0,0,0,0.2))]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
            </div>

            {/* Accent gradient band */}
            <div className="pointer-events-none absolute -inset-x-32 top-24 h-64 md:h-72 bg-gradient-to-r from-purple-500/15 via-transparent to-blue-500/15 blur-3xl"></div>

            {/* Content */}
            <div className="relative container mx-auto px-4 md:px-6 z-10 py-24 md:py-32">
                <div className="max-w-5xl">
                    <p className="fade-up fade-up-1 text-white/60 text-sm md:text-base tracking-widest uppercase mb-4">Portfolio</p>
                    <h1 className="fade-up fade-up-2 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] text-white">
                        <span className="block">Plan.</span>
                        <span className="block">Design.</span>
                        <span className="block">Build.</span>
                        <span className="block">Maintain.</span>
                        </h1>
                    <div className="fade-up fade-up-3 mt-3 h-[2px] w-24 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                    <p className="fade-up fade-up-4 mt-6 md:mt-8 text-gray-300 text-lg md:text-xl max-w-2xl">
                        From concept to code to continuous improvement — I create elegant, performant web experiences that convert.
                    </p>

                    <div className="fade-up fade-up-5 mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm md:text-base font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                        >
                            View Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-7 py-3.5 rounded-xl bg-white/5 text-white text-sm md:text-base border border-white/10 hover:bg-white/10 transition-all"
                        >
                            Contact Me
                        </button>
                    </div>

                    {/* Capability chips */}
                    <div className="fade-up fade-up-5 mt-6 flex flex-wrap gap-2 text-xs md:text-sm text-white/70">
                        {['UI/UX', 'Frontend', 'Branding', 'Animations', 'Performance'].map((cap) => (
                            <span key={cap} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{cap}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
