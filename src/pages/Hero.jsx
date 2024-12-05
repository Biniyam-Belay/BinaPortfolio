import photo from '../assets/photo.png';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" id="home">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1),rgba(0,0,0,0.2))]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(76,29,149,0.05)_0%,rgba(59,130,246,0.05)_100%)]"></div>
            </div>

            {/* Left Side - Floating Code Editor */}
            <div
                className="absolute left-10 top-[30%] -translate-y-1/2 w-[300px] hidden xl:block"
                style={{
                    transform: `translate3d(${scrollY * 0.1}px, calc(-50% + ${scrollY * 0.2}px), 0px)`,
                    animation: 'float 6s ease-in-out infinite'
                }}
            >
                <div className="relative backdrop-blur-xl bg-black/30 rounded-2xl border border-white/10 p-6 transform hover:translate-x-2 transition-transform duration-500 hover:shadow-xl hover:shadow-purple-500/10">
                    {/* Code Editor Header */}
                    <div className="flex items-center mb-4">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-gray-400 ml-3">App.jsx</div>
                    </div>

                    {/* Code Content */}
                    <div className="space-y-2 font-mono text-sm">
                        <div className="text-blue-400">import <span className="text-white">React</span> from <span className="text-orange-300">'react'</span>;</div>
                        <div className="text-blue-400">import <span className="text-white">{'{ motion }'}</span> from <span className="text-orange-300">'framer-motion'</span>;</div>
                        <div className="text-white"></div>
                        <div>
                            <span className="text-purple-400">const</span>{' '}
                            <span className="text-green-400">HeroSection</span>{' '}
                            <span className="text-white">= () {'>'}</span>{' '}
                            <span className="text-white">{'{'}</span>
                        </div>
                        <div className="pl-4">
                            <span className="text-purple-400">return</span>{' '}
                            <span className="text-white">(</span>
                        </div>
                        <div className="pl-8 text-blue-300">{'<motion.div'}</div>
                        <div className="pl-12 text-purple-300">animate<span className="text-white">=</span><span className="text-orange-300">{'{'}</span></div>
                        <div className="pl-16 text-white">scale: <span className="text-yellow-300">1.1</span></div>
                        <div className="pl-12 text-orange-300">{'}'}</div>
                        <div className="pl-8 text-blue-300">{'>'}</div>
                        <div className="pl-4 text-white">);</div>
                        <div className="text-white">{'}'}</div>
                    </div>

                    {/* Animated Cursor */}
                    <div className="w-2 h-5 bg-white/70 absolute bottom-8 left-14 animate-pulse"></div>
                </div>
            </div>

            {/* Right Side - Design UI Mock */}
            <div
                className="absolute right-10 top-[30%] -translate-y-1/2 w-[300px] hidden xl:block"
                style={{
                    transform: `translate3d(${scrollY * -0.1}px, calc(-50% + ${scrollY * 0.15}px), 0px)`,
                    animation: 'float 6s ease-in-out infinite reverse'
                }}
            >
                <div className="relative backdrop-blur-xl bg-black/30 rounded-2xl border border-white/10 p-6 transform hover:-translate-x-2 transition-transform duration-500 hover:shadow-xl hover:shadow-blue-500/10">
                    {/* Design Tool Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="text-sm text-gray-400">design.fig</div>
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-sm bg-purple-500/50"></div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-sm bg-blue-500/50"></div>
                            </div>
                        </div>
                    </div>

                    {/* Design Elements */}
                    <div className="space-y-4">
                        <div className="h-24 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/5 p-4">
                            <div className="w-1/2 h-3 bg-white/20 rounded-full mb-3"></div>
                            <div className="w-3/4 h-3 bg-white/10 rounded-full mb-3"></div>
                            <div className="w-2/3 h-3 bg-white/5 rounded-full"></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                <div className="w-5 h-5 rounded-sm bg-purple-500/30"></div>
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                <div className="w-5 h-5 rounded-sm bg-blue-500/30"></div>
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                <div className="w-5 h-5 rounded-sm bg-green-500/30"></div>
                            </div>
                        </div>
                        <div className="h-20 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/5 p-4">
                            <div className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-lg bg-white/10"></div>
                                <div className="flex-1">
                                    <div className="w-3/4 h-2 bg-white/20 rounded-full mb-2"></div>
                                    <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animated Design Cursor */}
                    <div className="w-4 h-4 border-2 border-purple-500/50 rounded-full absolute bottom-8 right-8 animate-ping"></div>
                </div>
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
                            className="pointer-events-none relative rounded-full w-full h-full object-cover border-2 border-white/10"
                        />
                    </div>

                    {/* Main Text */}
                    <div className="space-y-4 max-w-3xl">
                        <h2 className="text-purple-500 text-lg md:text-xl font-medium tracking-wide">
                            Welcome to my creative space
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Solutions</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Frontend Developer and Web Designer creating visually stunning, responsive, and user-friendly websites
                        that turn your ideas into seamless digital experiences.
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
