import photo2 from '../assets/photo2.png';

const About = () => {
    const skills = [
        { name: 'UI/UX Design', percentage: '90%' },
        { name: 'Graphic Design', percentage: '85%' },
        { name: 'Brand Design', percentage: '80%' },
        { name: 'Motion Design', percentage: '75%' },
    ];

    return (
        <div className="relative min-h-screen w-full py-20 overflow-hidden bg-white dark:bg-black" id="about">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-black dark:via-black/95 dark:to-black"></div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 md:px-6 z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="relative w-full max-w-[500px] mx-auto">
                            {/* Image Container with Effects */}
                            <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gray-100/50 dark:bg-white/5 border border-gray-200/20 dark:border-white/10 p-3">
                                <img
                                    src={photo2}
                                    alt="About Me"
                                    className="w-full h-auto rounded-2xl"
                                />
                                {/* Floating Gradient Elements */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                            </div>

                            {/* Experience Box */}
                            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-gray-200/20 dark:border-white/10 p-4 rounded-2xl shadow-lg">
                                <div className="text-center">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">5+</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        {/* About Text */}
                        <div className="backdrop-blur-xl bg-gray-100/50 dark:bg-white/5 border border-gray-200/20 dark:border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                UI/UX & Graphic Designer
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                I'm a passionate designer with expertise in creating user-centric digital experiences.
                                With over 5 years of experience, I specialize in translating complex ideas into
                                intuitive and visually appealing designs that drive engagement and deliver results.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                My approach combines creativity with strategic thinking, ensuring that every design
                                not only looks beautiful but also serves its intended purpose effectively.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="backdrop-blur-xl bg-gray-100/50 dark:bg-white/5 border border-gray-200/20 dark:border-white/10 rounded-3xl p-8">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">My Skills</h3>
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            <span className="text-gray-500 dark:text-gray-400">{skill.percentage}</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-white/5 rounded-full">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
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
                                { number: '150+', label: 'Projects Done' },
                                { number: '80+', label: 'Happy Clients' },
                                { number: '12+', label: 'Awards Won' },
                                { number: '100%', label: 'Satisfaction' },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="backdrop-blur-xl bg-gray-100/50 dark:bg-white/5 border border-gray-200/20 dark:border-white/10 rounded-2xl p-4 text-center"
                                >
                                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]"></div>
            </div>
        </div>
    );
};

export default About;
