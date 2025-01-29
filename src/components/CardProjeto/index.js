import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext"; // Contexto de idioma
import "./style.css";

function CardProjeto({ title, resumo, iconOne, iconTwo, iconTree, link }) {
    const { themeColors } = useTheme();

    const handleRedirect = () => {
        if (link) {
            window.open(link, "_blank"); // Abre o link em uma nova aba
        }
    };

    return (
        <div className="cardProjeto" onClick={handleRedirect} style={{ cursor: "pointer" }}>
            <div className="gradient"></div>
            <p className="title" style={{ color: themeColors.text }}>{title}</p>
            <p className="label" style={{ color: themeColors.text }}>
                {resumo}
            </p>
            <div className="ico">
                <div className="iconProject">{iconOne}</div>
                <div className="iconProject">{iconTwo}</div>
                <div className="iconProject">{iconTree}</div>
            </div>
        </div>
    );
}

export default CardProjeto;
