import React, { useState, useEffect } from 'react';
import hamburgerIcon from '../assets/hamburger.svg';
import cancelIcon from '../assets/cancel.svg';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu on link click
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Show/hide navbar based on scroll direction
    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsNavVisible(false); // Scrolling down
        } else {
            setIsNavVisible(true); // Scrolling up
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`bg-background text-text2 justify-between lg:max-w-[60vw] px-2 lg:px-0 w-full py-4 lg:pt-8 lg:pb-4 flex font-text2 shadow-md sticky top-0 z-50 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="name lg:text-[1.5rem] text-[1rem] items-center">Krishna Singh</div>

            {/* Hamburger menu for small screens */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <img 
                        src={isMenuOpen ? cancelIcon : hamburgerIcon} 
                        alt="Menu" 
                        className="w-6 h-6" 
                    />
                </button>
            </div>

            {/* Mobile menu items */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-background shadow-lg">
                    <ul className="text-text2 flex flex-col items-center space-y-4 py-4 lg:text-[1.25rem] sm:text-[1rem]">
                        <li><a href="#home" className="hover:text-primary1" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#skills" className="hover:text-primary1" onClick={handleLinkClick}>Skills</a></li>
                        <li><a href="#projects" className="hover:text-primary1" onClick={handleLinkClick}>Projects</a></li>
                    </ul>
                </div>
            )}

            {/* Desktop menu items */}
            <div className="hidden lg:block">
                <ul className="text-text2 flex space-x-8 lg:text-[1.25rem] sm:text-[1rem]">
                    <li><a href="#home" className="hover:text-primary1">Home</a></li>
                    <li><a href="#skills" className="hover:text-primary1">Skills</a></li>
                    <li><a href="#projects" className="hover:text-primary1">Projects</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
