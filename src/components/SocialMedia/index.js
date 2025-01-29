import React from "react";
import { useTheme } from '../../context/ThemeContext';
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Usando React Icons
import "./style.css";

function SocialMedia() {
    const { theme, changeTheme, themeColors } = useTheme();

    return (
        <div className="card">
            <a href="https://www.instagram.com/japa.yokoo/" target="_blank" className="socialContainer containerOne">
                <FaInstagram className="socialIcon" />
            </a>

            <a href="https://x.com/MatheusYok98610" target="_blank" className="socialContainer containerTwo">
                <FaTwitter className="socialIcon" />
            </a>

            <a href="https://www.linkedin.com/in/matheus-dozono-yokoo-800519297/" target="_blank" className="socialContainer containerThree">
                <FaLinkedin className="socialIcon" />
            </a>

            <a href=" https://wa.me/55169914340516" target="_blank" className="socialContainer containerFour">
                <FaWhatsapp className="socialIcon" />
            </a>

            <a href="mailto:matheus.yokoo@gmail.com" target="_blank" className="socialContainer containerFive">
                <FaEnvelope className="socialIcon" /> {/* Ícone de e-mail */}
            </a>
        </div>
    );
}

export default SocialMedia;
