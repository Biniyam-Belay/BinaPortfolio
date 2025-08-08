const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full py-12 overflow-hidden bg-black">
            <div className="relative container mx-auto px-4 md:px-6">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-2 space-y-4">
                        <h2 className="text-2xl font-bold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                                BinaPortfolio.
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-sm">
                            Creating meaningful digital experiences through innovative design and thoughtful functionality.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: "github", url: "https://github.com/biniyam-belay" },
                                { name: "linkedin", url: "https://www.linkedin.com/in/biniyam-belay-147673270/" },
                                { name: "twitter", url: "https://x.com/biniy_am" },
                                { name: "instagram", url: "https://www.instagram.com/biniya_am/" },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                                    aria-label={social.name}
                                >
                                    <i className={`fab fa-${social.name}`}></i>
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {["About", "Projects", "Services", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400">
                                <i className="fas fa-envelope mr-2"></i>
                                binibelaygom@gmail.com
                            </li>
                            <li className="text-gray-400">
                                <i className="fas fa-phone mr-2"></i>
                                +251 902 888 906
                            </li>
                            <li className="text-gray-400">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                Addis Ababa, Ethiopia
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Bottom Bar */}
                <div className="pt-8 flex justify-center items-center">
                    <p className="text-gray-400 text-sm text-center">
                        © {currentYear} Developed by Biniyam Belay.
                    </p>
                </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>
            </div>
        </footer>
    );
};

export default Footer;
