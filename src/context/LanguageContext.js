import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Definindo as traduções para diferentes idiomas
const translations = {
  en: {
    home: 'Home',
    aboutMe: 'About Me',
    projects: 'Projects',
    frontendDeveloper: 'Frontend Developer',
    education: 'Education',
    downloadCv: 'Download CV',
    english: 'English',
    portuguese: 'Portuguese',
    hoverMe: "hover me",
    checkItOnGitHub: "check it on github",
    introduction: "Hello, I'm Matheus Yokoo – Front-end Developer and Design Enthusiast",
    myEducation: 'My Education',
    myExperience: 'My Experience',
    myFavoriteTools: 'My Favorite Tools',
    myProjects: 'My Projects',
    projectDescription: 'Project Description',
    tecnicoEmAnaliseEDesenvolvimentoDeSistemas: "Technical in Analysis and System Development",
    doisAnosDeAprendizadoPratico: "Two years of practical learning simulating a real development environment",
    appCalculadora: "Calculator App",
    appCalculadoraDescription: "Expo calculator app with various functions, including currency conversion, measurements, interest calculation, and more.",
    lojaDeInstrumentosMusicais: "Musical Instruments Store",
    lojaDeInstrumentosMusicaisDescription: "Final project of the Analysis and System Development course using React and an API created with Node.",
    projetoInterclasse: "Interclass Project",
    projetoInterclasseDescription: "React project of a website for a sports event at a school.",
    projetoGoogle: "Google Project",
    projetoGoogleDescription: "Project inspired by the Google page with functional search and implementation of Tailwind.",
    aboutMeText: "Hello! I'm Matheus Yokoo, Front-end developer. Systems Analysis and Development Technician, I have accumulated two years of practical learning simulating a real development environment. I have experience with React Native and PHP, and I am passionate about creating intuitive and functional interfaces. Additionally, I have developed projects such as a multifunctional calculator, a musical instrument store and a website for sporting events. I always seek to improve my skills and explore new technologies to deliver innovative solutions."
  },
  'pt-br': {
    home: 'Início',
    aboutMe: 'Sobre mim',
    projects: 'Projetos',
    frontendDeveloper: 'Desenvolvedor Front-end',
    education: 'Formação',
    downloadCv: 'Download CV',
    english: 'Inglês',
    portuguese: 'Português',
    hoverMe: "passe o mouse",
    checkItOnGitHub: "confira no GitHub",
    introduction: "Olá, Sou Matheus Yokoo – Desenvolvedor Front-end e Entusiasta de Design",
    myEducation: 'Minha Educação',
    myExperience: 'Minha Experiência',
    myFavoriteTools: 'Minhas Ferramentas Favoritas',
    myProjects: 'Meus Projetos',
    tecnicoEmAnaliseEDesenvolvimentoDeSistemas: "Técnico em Análise e Desenvolvimento de Sistemas",
    doisAnosDeAprendizadoPratico: "Dois anos de aprendizado prático simulando um ambiente real de desenvolvimento",
    appCalculadora: "App Calculadora",
    appCalculadoraDescription: "Aplicativo expo de calculadora com funções diversas, incluindo conversão de moedas, medidas, cálculo de juros e mais.",
    lojaDeInstrumentosMusicais: "Loja de Instrumentos Musicais",
    lojaDeInstrumentosMusicaisDescription: "Projeto Final do curso de Análise e Desenvolvimento de Sistemas utilizando react e implementação de api criada com node.",
    projetoInterclasse: "Projeto Interclasse",
    projetoInterclasseDescription: "Projeto em react de um site para evento de esportes em uma escola.",
    projetoGoogle: "Projeto Google",
    projetoGoogleDescription: "Projeto inspirado na página do google com pesquisa funcional e implementação do tailwind.",
    aboutMeText: "Olá! Sou Matheus Yokoo, desenvolvedor Front-end. Técnico em Análise e Desenvolvimento de Sistemas, acumulo dois anos de aprendizado prático simulando um ambiente real de desenvolvimento. Tenho experiência com React Native e PHP, e sou apaixonado por criar interfaces intuitivas e funcionais. Além disso, já desenvolvi projetos como uma calculadora multifuncional, uma loja de instrumentos musicais e um site para eventos esportivos. Sempre busco aprimorar minhas habilidades e explorar novas tecnologias para entregar soluções inovadoras."
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      } else {
        setLanguage('pt-br');
      }
      setIsLoading(false);
    };

    loadLanguage();
  }, []);

  const changeLanguage = async (newLanguage) => {
    setLanguage(newLanguage);
    await AsyncStorage.setItem('language', newLanguage);
  };

  if (isLoading) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language: language || 'en', changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
