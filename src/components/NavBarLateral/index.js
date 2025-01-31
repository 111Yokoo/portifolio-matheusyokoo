import React, { useState, useEffect } from "react";
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import NightDayButton from '../NightDayButton';
import LanguageButton from '../LanguageButton';
import "./style.css";

function NavBarLateral() {
    const { themeColors } = useTheme();
    const { language, translations } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Atualiza a seção ativa com base no scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "sobre", "projetos"];
            let currentSection = "";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Botão do menu hamburguer */}
            <div className="parteCima">
                <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon style={{ color: themeColors.text, fontSize: '32px' }} icon={isOpen ? faTimes : faBars} />
                </button>
                <h2 style={{ color: themeColors.text, textAlign: 'center' }}>Matheus Dozono Yokoo</h2>
            </div>

            {/* Navbar lateral vinda da esquerda */}
            <nav style={{backgroundColor: themeColors.background, '--tint': themeColors.backgroundHoverNav}} className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul className="navMobile">
                    <li>
                        <a href="#home" 
                           className={activeSection === "home" ? "active" : ""} 
                           style={{ color: themeColors.text }}>
                            {translations[language].home}
                        </a>
                    </li>
                    <li>
                        <a href="#sobre" 
                           className={activeSection === "sobre" ? "active" : ""} 
                           style={{ color: themeColors.text }}>
                            {translations[language].aboutMe}
                        </a>
                    </li>
                    <li>
                        <a href="#projetos" 
                           className={activeSection === "projetos" ? "active" : ""} 
                           style={{ color: themeColors.text }}>
                            {translations[language].projects}
                        </a>
                    </li>
                </ul>
                <div className="buttonsContextMobile">
                    <NightDayButton />
                    <LanguageButton />
                </div>
            </nav>

            {/* Overlay para fechar o menu ao clicar fora */}
            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        </>
    );
}

export default NavBarLateral;
