import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaNodeJs } from "react-icons/fa"; // Ícones das tecnologias
import { SiMysql } from "react-icons/si"; // Ícone do MySQL
import "./style.css";

function Ferramentas() {
    const { theme, changeTheme, themeColors } = useTheme();

    return (
        <div className="cardFerramenta" style={{"--background-color": themeColors.backgroundHover}}>
            <p style={{ borderColor: themeColors.tint }}><FaHtml5 color="#E34F26" className="iconFerramenta"/> <span style={{ color: themeColors.text }}>HTML</span></p>
            <p style={{ borderColor: themeColors.tint }}><FaCss3Alt color="#1572B6" className="iconFerramenta"/> <span style={{ color: themeColors.text }}>CSS</span></p>
            <p style={{ borderColor: themeColors.tint }}><FaJs color="#F7DF1E" className="iconFerramenta"/> <span style={{ color: themeColors.text }}>JavaScript</span></p>
            <p style={{ borderColor: themeColors.tint }}><FaReact color="#61DAFB" className="iconFerramenta"/> <span style={{ color: themeColors.text }}>React</span></p>
            <p style={{ borderColor: themeColors.tint }}><SiMysql color="#00758F" className="iconFerramenta"/> <span style={{ color: themeColors.text }}>MySQL</span></p>
            <p style={{ borderColor: themeColors.tint }}><FaPhp color="#777BB4" className="iconFerramenta"/> <span style={{ color: themeColors.text }}>PHP</span></p>
            <p style={{ borderColor: themeColors.tint }}><FaNodeJs color="#339933" className="iconFerramenta"/> <span style={{ color: themeColors.text }}>Node.js</span></p>
        </div>
    );
}

export default Ferramentas;
