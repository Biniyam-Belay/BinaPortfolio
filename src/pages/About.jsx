import photo2 from '../assets/photo2.png';

const About = () => {
    const expertise = [
        {
            title: "UI/UX Design",
            icon: "🎨",
            description: "Creating intuitive and engaging user experiences",
            gradient: "from-pink-500 to-purple-500"
        },
        {
            title: "Web Development",
            icon: "💻",
            description: "Building responsive and dynamic web applications",
            gradient: "from-purple-500 to-blue-500"
        },
        {
            title: "Graphic Design",
            icon: "✨",
            description: "Crafting visually appealing brand identities",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Motion Design",
            icon: "🎬",
            description: "Bringing designs to life with smooth animations",
            gradient: "from-cyan-500 to-purple-500"
        }
    ];

    const stats = [
        { number: '2+', label: 'Years Experience' },
        { number: '80+', label: 'Happy Clients' },
        { number: '12+', label: 'Awards Won' },
        { number: '100%', label: 'Satisfaction' }
    ];

    return (
        <div className="relative min-h-screen w-full py-20 overflow-hidden" id="about">
            {/* Background matching Hero section */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1),rgba(0,0,0,0.2))]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(76,29,149,0.05)_0%,rgba(59,130,246,0.05)_100%)]"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
            </div>

            <div className="relative container mx-auto px-4 md:px-6 z-10">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
                    {/* Left Side - Image with Experience Box */}
                    <div className="relative group">
                        {/* Main Image Container */}
                        <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 p-3 transition-transform duration-500 group-hover:scale-[1.02]">
                            <img
                                src={photo2}
                                alt="About Me"
                                className="rounded-2xl w-full h-auto"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Experience Box */}
                        <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 backdrop-blur-xl bg-white/10 border border-white/10 p-6 rounded-2xl shadow-lg transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">2+</h3>
                                <p className="text-gray-400 text-sm">Years of Experience</p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-500"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>

                        {/* Animated Border */}
                        <div className="absolute inset-0 rounded-3xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        {/* Bio Section */}
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-500">
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Digital Craftsman
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                I specialize in creating immersive digital experiences that combine aesthetic beauty with functional excellence. With a passion for both design and development, I bridge the gap between creativity and technology.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                My goal is to push the boundaries of digital design while ensuring intuitive user experiences that leave a lasting impression.
                            </p>
                        </div>

                        {/* Expertise Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {expertise.map((item, index) => (
                                <div
                                    key={index}
                                    className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]"
                        >
                            <h4 className="text-3xl md:text-4xl font-bold mb-2">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                                    {stat.number}
                                </span>
                            </h4>
                            <p className="text-gray-400 text-sm">{stat.label}</p>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Elements matching Hero */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
            </div>
        </div>
    );
};

export default About;
