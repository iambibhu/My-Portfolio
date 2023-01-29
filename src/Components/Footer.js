import "./FooterStyle.css";

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Odisha, India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +91-8093******</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> bibhuprasad.98@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>I like to create solid and responsive frontend products with great user experiences.</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/iambibhuprasad/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{ color: "fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://github.com/iambibhu" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{ color: "fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://twitter.com/iam_bib_" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} style={{ color: "fff", marginRight: "1rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer