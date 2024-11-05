import { useState } from 'react';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('home');

    return (
        <nav className="fixed w-full top-6 z-50" role="navigation">
            <div className="max-w-6xl mx-auto px-6">
                <div className="backdrop-blur-xl bg-black/30 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                    <div className="flex justify-between items-center p-5">
                        {/* Logo */}
                        <div className="text-white font-bold text-2xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                                Portfolio.
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <ul className="flex items-center gap-10">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setActiveItem(item.id)}
                                        className={`relative px-4 py-2 text-[15px] font-medium transition-all duration-300
                                            ${activeItem === item.id
                                                ? 'text-white'
                                                : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        {item.label}
                                        {activeItem === item.id && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <button className="px-6 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
