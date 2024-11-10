import { useState, useEffect } from 'react';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return {
                        id: item.id,
                        visible: rect.top <= 200 && rect.bottom >= 200
                    };
                }
                return null;
            }).filter(Boolean);

            const visibleSection = sections.find(section => section.visible);
            if (visibleSection) {
                setActiveItem(visibleSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveItem(id);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed w-full top-4 md:top-6 z-50" role="navigation">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="backdrop-blur-xl bg-black/30 rounded-2xl border border-white/10 shadow-lg">
                    <div className="flex justify-between items-center p-4 md:p-5">
                        {/* Logo */}
                        <div className="font-bold text-xl md:text-2xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                                Portfolio.
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="hidden lg:flex items-center gap-8 md:gap-10">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative px-4 py-2 text-[15px] font-medium transition-all duration-300
                                            ${activeItem === item.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {item.label}
                                        {activeItem === item.id && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Resume Button */}
                        <button className="hidden lg:block px-6 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                            Resume
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-white p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden border-t border-white/10">
                            <ul className="flex flex-col py-4">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className={`block w-full text-left px-6 py-3 text-[15px] font-medium transition-all duration-300
                                                ${activeItem === item.id ? 'text-white' : 'text-gray-400'}`}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                                <li className="px-4 pt-4">
                                    <button className="w-full px-6 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                                        Resume
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
