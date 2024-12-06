import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Header.css';
import Contact from './Contact';

function Header({ scrollToAbout, scrollToProjects, scrollToIntro }) {
    const [showContact, setShowContact] = useState(false);
    const contactRef = useRef(null);

    const setIsOpen = () => {
        setShowContact(!showContact);
    };
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contactRef.current && !contactRef.current.contains(event.target)) {
                setShowContact(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="header-container">
                <div>
                    <span className="name">Lahari Vuppalapati</span>
                </div>
                <nav>
                    <ul>
                        <li onClick={scrollToIntro}>Home</li>
                        <li onClick={scrollToAbout}>About</li>
                        <li onClick={scrollToProjects}>Projects</li>
                        <li onClick={setIsOpen} className="contact">Contact</li>
                    </ul>
                </nav>
            </div>

            {showContact && (
                <div ref={contactRef}>
                    <Contact setIsOpen={setIsOpen} />
                </div>
            )}
        </header>
    );
}

export default Header;
