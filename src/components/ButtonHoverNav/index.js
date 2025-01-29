import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from '../../context/LanguageContext'; // Contexto de idioma
import { useTheme } from '../../context/ThemeContext'; // Contexto de tema
import "./style.css";

function ButtonHoverNav({ text, targetId }) {
    const { language } = useLanguage();
    const { themeColors } = useTheme();
    const [isActive, setIsActive] = useState(false);

    const observer = useRef(null);

    useEffect(() => {
        // Remove o "#" do targetId para obter o ID correto
        const target = document.getElementById(targetId.replace("#", ""));
        if (target) {
            observer.current = new IntersectionObserver(
                ([entry]) => {
                    // Ativa o botão imediatamente se o ID corresponde ao alvo visível
                    setIsActive(entry.isIntersecting && entry.target.id === targetId.replace("#", ""));
                },
                { threshold: 0.6 }
            );

            observer.current.observe(target);
        }

        return () => {
            if (observer.current && target) observer.current.disconnect();
        };
    }, [targetId]);

    return (
        <button
            className={`box  ${isActive ? "active" : ""}`}
            style={{
                "--background-color": themeColors.background,
                "--text-color": themeColors.text,
                "--hover-color": themeColors.tint,
                "--active-border-color": themeColors.tint || "#ff5722",
                color: "var(--text-color)",
                backgroundColor: "var(--background-color)",
            }}
            onClick={() => {
                document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
            }}
        >
            <span className={`span`}>{text}</span>
        </button>
    );
}

export default ButtonHoverNav;
