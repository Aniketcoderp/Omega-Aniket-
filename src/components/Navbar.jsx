import React, { useState } from "react";
import background from "../Image/background.png";
import "../components/Figma.css";
import logo from "../Image/Isolation_Mode.png";
import prifile_pic from "../Image/Frame_427322189.png";
import search from "../Image/Vector.png";
import message from "../Image/message-question.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <div className="Comp1">
            <div className="navbar">
                <img src={background} alt="" className="bg" />
            </div>
            <div className="toggle-btn" onClick={toggleMenu}>
                ☰ 
            </div>
            <nav className={`nav_section ${isMenuOpen ? "active" : ""}`}>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <a href="">Explore</a>
                    <a href="">FAQ's</a>
                    <a href="">Pricing</a>
                </div>
                <div>
                    <img src={search} alt="Search" />
                    <img src={prifile_pic} alt="Profile" />
                </div>
            </nav>

            <div className="pixel_box">
                <p>Pixel Bloom: AI website agency</p>
                <p>Habit Tracker App Figma iOS UI Kit</p>
            </div>

            <div className="nav_bottons">
                <button>
                    <img src={message} alt="Feedback" /> <p>Give feedback</p>
                </button>
                <button>Add to cart $20</button>
            </div>
        </div>
    );
};

export default Navbar;
