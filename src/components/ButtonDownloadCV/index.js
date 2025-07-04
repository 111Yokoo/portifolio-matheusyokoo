import React, { useState } from "react";
import { useTheme } from '../../context/ThemeContext';
import "./style.css";

function ButtonDownloadCV({ text }) {
    const { themeColors } = useTheme();
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = () => {
        setIsLoading(true); // Exibir o modal de carregamento
        const link = document.createElement("a");
        link.href = "/Currículo-Matheus-Yokoo.pdf"; // Caminho para o arquivo
        link.download = "Currículo-Matheus-Yokoo.pdf"; // Nome sugerido para o arquivo baixado
        link.click();
        
        // Fechar o modal após o "download" (simulação, o download ocorre rapidamente)
        setTimeout(() => setIsLoading(false), 2000); // Simulando um tempo de "carregamento"
    };

    return (
        <>
            {isLoading && (
                <div className="modal-overlay">
                    <div className="terminal-loader">
                        <div className="terminal-header">
                            <div className="terminal-title">Status</div>
                            <div className="terminal-controls">
                                <div className="control close"></div>
                                <div className="control minimize"></div>
                                <div className="control maximize"></div>
                            </div>
                        </div>
                        <div className="text">Loading...</div>
                    </div>
                </div>
            )}

            <button 
                className="button"
                style={{
                    "--background-color": themeColors.background,
                    "--text-color": themeColors.text,
                    "--hover-color": themeColors.tint,
                }}
                onClick={handleDownload}
            >
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">{text}</span>
                </span>
            </button>
        </>
    );
}

export default ButtonDownloadCV;
