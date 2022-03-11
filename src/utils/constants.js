import { createGlobalStyle} from "styled-components"

export const ACTION = {
    START: 'ACTION_START',
    END: 'ACTION_END',
  
    NAV_STATE_CHANGE: 'NAV_STATE_CHANGE',
    THEME_CHANGE: 'THEME_CHANGE',
};

export const PATHNAME = {
    HOME: '/',
    PROJECTS: '/projects',
    ARTICLES: '/articles',
    ABOUT: '/about'
};

export const LINKS = {
    GITHUB: 'https://github.com/robbieplata/',
    LINKEDIN: 'https://www.linkedin.com/in/robert-plata-8a5ab9143/',
    EMAIL: "norbertedguy@gmail.com"
};

const colors = {
    darker: "#292c35",
    dark: "#333943",
    light: "#747882",
    reactBlue: "#61DBFB",
    white: "#fff",
    black: "#000",
    darkgray: "#707070",
    warning: "#b9bbb2",
    googleBlue: "#4285f4",
    buttonActiveBlue: "#1669F2"
};

const variables = {
    transitionDuration: "0.1s"
};

export const THEMES = {
    lightTheme: {
        body: colors.white,
        text: colors.black,
        toggleBorder: '#FFF',
        background: '#000000',
    },
    darkTheme: {
        body: colors.darker,
        text: colors.white,
        toggleBorder: '#6B8096',
        background: '#999',
    }   
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
`