import React from "react";
import { useState } from "react";
import '../Styles/Footer.css'
import 'primeicons/primeicons.css';

function Footer() {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        const mailtoLink = `mailto:laharivus@gmailcom?subject=Message from Portfolio&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };
    return (
        <footer>
            <div className="footer-message">
                <span>Like what you see?</span>
                <input
                    type="text"
                    placeholder="Type your message here"
                    className="footer-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="footer-send-button" onClick={handleSend}>
                    Send
                </button>
            </div>
            <div className="footer-links">

                <span className="follow">Let's Connect!</span>
                <ul>
                    <li>
                        <a href="mailto:laharivus@gmail.com">
                            <i className="pi pi-envelope"></i> laharivus@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/lahari-vuppalapati-119a86222" target="_blank" rel="noopener noreferrer">
                            <i className="pi pi-linkedin"></i> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Lahari-V03" target="_blank" rel="noopener noreferrer">
                            <i className="pi pi-github"></i> GitHub
                        </a>
                    </li>
                </ul>
            </div>
            <span className="thanks-greet">
                Thanks for visiting </span>
            <i className="pi pi-face-smile"></i>

        </footer>
    );
}

export default Footer;
