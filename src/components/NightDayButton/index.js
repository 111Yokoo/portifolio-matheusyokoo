import React, { useState } from "react";
import { useTheme } from '../../context/ThemeContext';
import { MdOutlineNightsStay } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import "./style.css";

function NightDayButton() {
    const { theme, changeTheme, themeColors } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

    const toggleTheme = () => {
        setIsModalOpen(true); // Abre o modal
        setTimeout(() => {
            const newTheme = theme === "light" ? "dark" : "light";
            changeTheme(newTheme);
            setIsModalOpen(false); // Fecha o modal após a mudança de tema
        }, 2000); // Tempo de exibição do loader
    };

    return (
        <>
            <button
                onClick={toggleTheme}
                style={{
                    backgroundColor: themeColors.background,
                    color: themeColors.text,
                    border: `1px solid ${themeColors.tint}`,
                    borderRadius: "8px",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                }}
            >
                {theme === "light" ? (
                    <WiDaySunny size={24} />
                ) : (
                    <MdOutlineNightsStay size={24} />
                )}
            </button>

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

export default NightDayButton;
