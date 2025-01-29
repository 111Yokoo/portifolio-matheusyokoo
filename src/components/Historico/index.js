import React from "react";
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext'; // Contexto de idioma
import "./style.css";

function Historico({data, titleStyle, lugar, resumo}) {
    const { theme, changeTheme, themeColors } = useTheme();
    const { language, translations } = useLanguage();

    return (
        <div className="identacao">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h3 style={{ color: themeColors.text }}>{data}</h3>
            </div>
            <div>
                <h3 style={{ color: themeColors.text }}>{titleStyle}</h3>
                <p style={{ color: themeColors.text }}>{lugar}</p>
            </div>
            <div>
                <p style={{ color: themeColors.text }}>{resumo}</p>
            </div>
        </div>
    );
}

export default Historico;
