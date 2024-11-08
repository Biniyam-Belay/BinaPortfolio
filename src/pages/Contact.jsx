const Contact = () => {
    return (
        <div className="relative min-h-screen w-full py-20 overflow-hidden" id="contact">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95"></div>

            {/* Content Container */}
            <div className="relative container mx-auto px-4 md:px-6 z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Contact Grid */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-6">
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                            <p className="text-gray-300 mb-8">
                                Have a project in mind? Let's discuss how we can work together to create something amazing.
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                {[
                                    { icon: "📧", title: "Email", value: "binibelaygom@gmail.com" },
                                    { icon: "📱", title: "Phone", value: "+251 902 888 906" },
                                    { icon: "📍", title: "Location", value: "Addis Ababa, Ethiopia" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="text-gray-400 text-sm">{item.title}</h4>
                                            <p className="text-white font-medium">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 mt-8">
                                {["github", "linkedin", "twitter", "instagram"].map((social) => (
                                    <a
                                        key={social}
                                        href={`#${social}`}
                                        className="w-12 h-12 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                                    >
                                        <i className={`fab fa-${social} text-xl`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div>
                                <label className="text-gray-300 text-sm mb-2 block">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-8 py-4 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
            </div>
        </div>
    );
};

export default Contact;
