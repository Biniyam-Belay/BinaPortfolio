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
            { name: 'Indesign', icon: '/icons/design/indesign.svg' }
        ]
    };

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
                <div className="max-w-7xl mx-auto mb-0">
                    {/* Bio Section with Integrated Photo */}
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            {/* Photo Section - Now Smaller and Integrated */}
                            <div className="relative group w-full md:w-1/3 max-w-[280px]">
                                <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 p-2 transition-transform duration-500 group-hover:scale-[1.02]">
                                    <div className="aspect-[3/4] rounded-xl overflow-hidden">
                                        <img
                                            src={photo2}
                                            alt="About Me"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Experience Box */}
                                <div className="absolute -bottom-4 -right-4 backdrop-blur-xl bg-white/10 border border-white/10 p-4 rounded-2xl shadow-lg transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-1">2+</h3>
                                        <p className="text-gray-400 text-xs">Years of Experience</p>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-colors duration-500"></div>
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
                            </div>

                            {/* Bio Content */}
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-white mb-6">
                                    Digital Craftsman
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    I specialize in creating immersive digital experiences that combine aesthetic beauty with functional excellence. With a passion for both design and development, I bridge the gap between creativity and technology.
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-8">
                                    My goal is to push the boundaries of digital design while ensuring intuitive user experiences that leave a lasting impression.
                                </p>

                                {/* Tech Stack Section */}
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Development Tools */}
                                    <div className="flex-1">
                                        <span className="text-gray-400 text-sm block mb-4">Development</span>
                                        <div className="flex flex-wrap gap-4">
                                            {techStack.development.map((tech) => (
                                                <div
                                                    key={tech.name}
                                                    className="group relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                                                >
                                                    <img
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                    <span className="absolute -bottom-6 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Design Tools */}
                                    <div className="flex-1">
                                        <span className="text-gray-400 text-sm block mb-4">Design</span>
                                        <div className="flex flex-wrap gap-4">
                                            {techStack.design.map((tech) => (
                                                <div
                                                    key={tech.name}
                                                    className="group relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                                                >
                                                    <img
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                    <span className="absolute -bottom-6 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                    {/* Expertise Grid - Hidden on mobile */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
        </div>
    );
};

export default About;
