// Definição de cores e temas do app
const tintColorLight = '#274360';
const backgroundTextLight = '#4CC3E0';
const tintColorDark = '#add8e6';
const backgroundTextDark = '#274360';
const hover = '#ff4655'

export const Colors = {
  light: {
    text: '#000',
    textInverse: '#fff',
    background: '#f3f3f3',
    tint: tintColorLight,
    activeBackground: tintColorLight, // Fundo do item ativo no menu
    activeText: '#FFFFFF', // Texto do item ativo
    hover: hover, 
    borderColor: '#151718',
    backgroundHover: '#fff',
  },
  dark: {
    text: '#ECEDEE',
    textInverse: '#000',
    background: '#151718',
    tint: tintColorDark,
    activeBackground: tintColorLight, // Fundo do item ativo no menu
    activeText: '#FFFFFF', // Texto do item ativo
    hover: hover, 
    borderColor: '#f3f3f3',
    backgroundHover: '#191919',
  },
};
