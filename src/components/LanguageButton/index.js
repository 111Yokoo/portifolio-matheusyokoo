import React, { useState } from "react";
import { useLanguage } from '../../context/LanguageContext'; // Contexto de idioma
import { useTheme } from '../../context/ThemeContext'; // Contexto de tema
import "./style.css";

function LanguageButton() {
    const { language, changeLanguage, translations } = useLanguage(); // Contexto de idioma
    const { themeColors } = useTheme(); // Contexto de tema
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

    const handleLanguageChange = (newLanguage) => {
        setIsModalOpen(true); // Abre o modal
        setTimeout(() => {
            changeLanguage(newLanguage); // Altera o idioma
            setIsModalOpen(false); // Fecha o modal após a mudança
        }, 2000); // Tempo de exibição do loader
    };

    const selectStyles = {
        backgroundColor: themeColors.background,
        color: themeColors.text,
        border: `1px solid ${themeColors.tint}`,
        borderRadius: "8px",
        padding: "10px",
        paddingRight: "35px",
        appearance: "none",
        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${encodeURIComponent(
            themeColors.text
        )}'><path d='M7 10l5 5 5-5z'/></svg>")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
        backgroundSize: "12px",
        cursor: "pointer",
    };

    return (
        <>
            <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                style={selectStyles}
            >
                <option value="en">{translations[language].english}</option>
                <option value="pt-br">{translations[language].portuguese}</option>
            </select>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <circle r="32" cy="40" cx="40" id="test"></circle>
                            </svg>
                        </div>

                        <div className="loader triangle">
                            <svg viewBox="0 0 86 80">
                                <polygon points="43 8 79 72 7 72"></polygon>
                            </svg>
                        </div>

                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <rect height="64" width="64" y="8" x="8"></rect>
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default LanguageButton;
