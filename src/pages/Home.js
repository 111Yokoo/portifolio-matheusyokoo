import React from "react";
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext'; // Contexto de idioma
import ImageFoto from '../assets/images/Matheus Perfil 3X4.jpg'
import ButtonDownloadCV from '../components/ButtonDownloadCV'
import SocialMedia from "../components/SocialMedia";
import NightDayButton from "../components/NightDayButton";
import "../css/Home.css";
import MatheusYokoo from "../assets/images/Matheus Yokoo.jpeg"
import LanguageButton from "../components/LanguageButton";
import ButtonHoverNav from "../components/ButtonHoverNav";
import BannerOneWhite from "../assets/images/BannerOneWhite.jpg"
import BannerOneDark from "../assets/images/BannerOneDark.png"
import BannerTwoDark from "../assets/images/BannerTwoDark.png"
import BannerTwoWhite from "../assets/images/BannerTwoWhite.jpg"
import ButtonGitHub from "../components/ButtonGitHub";
import Historico from "../components/Historico";
import Ferramentas from "../components/Ferramentas";
import CardProjeto from "../components/CardProjeto";
import { FaReact, FaJs, FaCss3Alt } from "react-icons/fa"; // Ícones
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"; // Ícone do Node.js
import { SiTailwindcss } from "react-icons/si"; // Ícone do Tailwind CSS
import { RiPhpLine } from "react-icons/ri";
import { PiPlantFill } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import NavBarLateral from "../components/NavBarLateral";

function Home() {
  const { theme, themeColors } = useTheme();
  const { language, translations } = useLanguage();
  const BannerOne = theme === "light" ? BannerOneWhite : BannerOneDark;
  const BannerTwo = theme === "light" ? BannerTwoWhite : BannerTwoDark;
  const Transparencia = theme === "light" ? 'rgba(255, 255, 255, 0.747)' : 'rgba(0, 0, 0, 0.829)';

  return (
    <main className="home">
      <section style={{ backgroundColor: themeColors.background }} className="infoLateral">
        <div className="nomeFoto">
          <h2 style={{ color: themeColors.text }}>Matheus Dozono Yokoo</h2>
          <img src={ImageFoto} className="imageEdit" alt="Matheus Yokoo Foto" />
        </div>
        <div className="formacaoLateralBar">
          <h3 style={{ color: themeColors.text }}>
            {translations[language].education}:
          </h3>
          <p style={{ color: themeColors.text }}>{translations[language].frontendDeveloper}</p>
        </div>
        <div className="linksLateralBar">
          <section>
            <SocialMedia />
          </section>
          <section className="cvDownloadDesktop">
            <ButtonDownloadCV text={translations[language].downloadCv} />
          </section>
        </div>
      </section>
      <section className="conteudo">
        <section style={{ backgroundColor: themeColors.background }} className="navbar">
          <nav className="mobileNone">
            <ul>
              <li><a href="#home" style={{ color: themeColors.text }}><ButtonHoverNav targetId={'home'} text={translations[language].home} /></a></li>
              <li><a href="#sobre" style={{ color: themeColors.text }}><ButtonHoverNav targetId={'sobre'} text={translations[language].aboutMe} /></a></li>
              <li><a href="#projetos" style={{ color: themeColors.text }}><ButtonHoverNav targetId={'projetos'} text={translations[language].projects} /></a></li>
            </ul>
          </nav>
          <div className="buttonsContext mobileNone">
            <div>
              <NightDayButton />
            </div>
            <div>
              <LanguageButton />
            </div>
          </div>
          <div className="mobileNavBar"><NavBarLateral/></div>
        </section>

        <div className="mainConteudo">
          <section
            id="home"
            style={{
              "--background-image": `url(${BannerOne})`, "--transparencia": `${Transparencia}`,
            }}
          >
            <article style={{ padding: '30px', marginTop: '150px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
              <h1 className="titleHome" style={{ color: themeColors.text }}>{translations[language].introduction}</h1>
              <div style={{width: 'fit-content', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <ButtonGitHub />
                <div className="cvDownloadMobile">
                  <ButtonDownloadCV text={translations[language].downloadCv} />
                </div>
              </div>
            </article>
          </section>
          <section id="sobre" style={{ background: themeColors.background }}>
            <section className="imageESobre">
              <article style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 className="titleHome" style={{ color: themeColors.text }}>{translations[language].aboutMe}</h1>
                <p style={{ color: themeColors.text, textAlign: 'justify' }}>{translations[language].aboutMeText}</p>
              </article>
              <article className="imageSombra">
                <div className="sombraImage"></div>
                <img src={MatheusYokoo} className="imageSobre" />
              </article>
            </section>
            <section className="historico">
              <article style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h2 style={{ color: themeColors.text }}>{translations[language].myEducation}</h2>
                <section className="listHistorico">
                  <hr style={{ background: themeColors.text }}/>
                  <Historico data={'2023-2024'} titleStyle={translations[language].tecnicoEmAnaliseEDesenvolvimentoDeSistemas} lugar={'SENAI'} resumo={translations[language].doisAnosDeAprendizadoPratico} />
                  <hr style={{ background: themeColors.text }}/>
                </section>
              </article>
              <article style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h2 style={{ color: themeColors.text }}>{translations[language].myExperience}</h2>
                <section className="listHistorico">
                  <hr style={{ background: themeColors.text }}/>
                  <Historico data={'2023-2024'} titleStyle={translations[language].tecnicoEmAnaliseEDesenvolvimentoDeSistemas} lugar={'SENAI'} resumo={translations[language].doisAnosDeAprendizadoPratico} />
                  <hr style={{ background: themeColors.text }}/>
                </section>
              </article>
            </section>
            <section className="ferramentas">
              <h2 style={{ color: themeColors.text }}>{translations[language].myFavoriteTools}</h2>
              <article className="listFerramentas">
                <Ferramentas/>
              </article>
            </section>
          </section>
          <section id="projetos" style={{
            "--background-image": `url(${BannerTwo})`, "--transparencia": `${Transparencia}`,// Passando a variável CSS
          }}>
            <h1 style={{ color: themeColors.text }} className="titleHome">{translations[language].myProjects}</h1>
            <section className="listProjetos">
              <CardProjeto title={translations[language].appCalculadora} resumo={translations[language].appCalculadoraDescription} iconOne={<FaReact size={24} color="#61DAFB" />} iconTwo={<SiTypescript size={24} color="#3178C6" />} iconTree={<FaCss3Alt size={24} color="#1572B6" />} link={'https://github.com/111Yokoo/app-calculadora-expo'}/>
              <CardProjeto title={translations[language].lojaDeInstrumentosMusicais} resumo={translations[language].lojaDeInstrumentosMusicaisDescription} iconOne={<FaReact size={24} color="#61DAFB" />} iconTwo={<FaNodeJs size={24} color="#339933" />} iconTree={<FaCss3Alt size={24} color="#1572B6" />} link={'https://github.com/111Yokoo/projeto-loja-instrumentosMusicais'}/>
              <CardProjeto title={translations[language].projetoInterclasse} resumo={translations[language].projetoInterclasseDescription} iconOne={<FaReact size={24} color="#61DAFB" />} iconTwo={<FaJs size={24} color="#F7DF1E" />} iconTree={<FaCss3Alt size={24} color="#1572B6" />} link={'https://github.com/111Yokoo/projeto-interclasse'}/>
              <CardProjeto title={translations[language].projetoGoogle} resumo={translations[language].projetoGoogleDescription} iconOne={<FaReact size={24} color="#61DAFB" />} iconTwo={<FaJs size={24} color="#F7DF1E" />} iconTree={<SiTailwindcss size={24} color="#38BDF8" />} link={'https://github.com/111Yokoo/google-project'}/>
              <CardProjeto title={translations[language].projetoMVC} resumo={translations[language].projetoMVCDescription} iconOne={<RiPhpLine  size={24} color="#993399" />} iconTwo={<PiPlantFill size={24} color="#008000" />} iconTree={<FaHtml5 size={24} color="#E44D26" />} link={'https://github.com/111Yokoo/Miniframework-MVC'}/>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Home;
