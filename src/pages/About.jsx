import photo2 from '../assets/photo2.png';

const About = () => {
    const skills = [
        { name: 'UI/UX Design', percentage: '90%' },
        { name: 'Graphic Design', percentage: '85%' },
        { name: 'Brand Design', percentage: '80%' },
        { name: 'Motion Design', percentage: '75%' },
    ];

    return (
        <div className="relative min-h-screen w-full py-20 overflow-hidden bg-black" id="about">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1),rgba(0,0,0,0.2))]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 md:px-6 z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Side - Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative max-w-[500px] mx-auto">
                            {/* Main Image Container */}
                            <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 p-3">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 backdrop-blur-xl"></div>
                                <img
                                    src={photo2}
                                    alt="About Me"
                                    className="relative rounded-xl w-full h-auto"
                                />
                            </div>

                            {/* Experience Box */}
                            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 backdrop-blur-xl bg-white/10 border border-white/10 p-6 rounded-2xl shadow-lg">
                                <div className="text-center">
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">5+</h3>
                                    <p className="text-gray-400 text-sm">Years of Experience</p>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        {/* About Text */}
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Graphic Designer, UI/UX Designer & Frontend Developer
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                I'm a passionate designer and developer with expertise in creating user-centric digital experiences with full functionality.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                My approach combines creativity with strategic thinking, ensuring that every design
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-8">My Skills</h3>
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-gray-400">{skill.percentage}</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                                                style={{ width: skill.percentage }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { number: '15+', label: 'Projects Done' },
                                { number: '8+', label: 'Happy Clients' },
                                { number: '12+', label: 'Awards Won' },
                                { number: '100%', label: 'Satisfaction' },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 text-center group hover:bg-white/10 transition-all duration-300"
                                >
                                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                                        {stat.number}
                                    </h4>
                                    <p className="text-gray-400 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
            </div>
        </div>
    );
};

export default About;
