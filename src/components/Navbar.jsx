import { useState } from 'react';
import home from '../assets/home.svg';
import lightbulb from '../assets/lightbulb.svg';
import person from '../assets/person.svg';
import work from '../assets/work.svg';

const navItems = [
    { id: 'home', icon: home, label: 'Home' },
    { id: 'about', icon: lightbulb, label: 'About' },
    { id: 'projects', icon: work, label: 'Projects' },
    { id: 'contact', icon: person, label: 'Contact' }
];

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('home');

    return (
        <nav className="fixed w-full top-5 z-10" role="navigation">
            <div className="max-w-2xl mx-auto">
                <div className="bg-black rounded-xl shadow-sm shadow-neutral-500 backdrop-blur-lg p-4">
                    <ul className="flex justify-center items-center gap-12">
                        {navItems.map((item) => (
                            <li key={item.id} className="group relative">
                                <a
                                    href={`#${item.id}`}
                                    className="block transition-all duration-300 hover:text-gray-400"
                                    onClick={() => setActiveItem(item.id)}
                                    aria-label={item.label}
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        className="w-6 h-6"
                                    />
                                    <span className="
                                        absolute -bottom-8 left-1/2 -translate-x-1/2
                                        opacity-0 group-hover:opacity-100
                                        transition-all duration-300
                                        bg-black text-white text-sm
                                        px-3 py-1 rounded-full shadow-lg
                                        uppercase whitespace-nowrap
                                    ">
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
