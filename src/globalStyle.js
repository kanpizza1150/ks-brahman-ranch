import styled, { css, createGlobalStyle } from 'styled-components'

export const setColor = {
    primary: 'red',
    black: '#000000',
    white: '#ffffff'
}
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileM})`,
    mobileM: `(max-width: ${size.mobileL})`,
    mobileL: `(max-width: ${size.tablet})`,
    tablet: `(max-width: ${size.laptop})`,
    laptop: `(max-width: ${size.laptopL})`,
    laptopL: `(max-width: ${size.desktop})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
}

export const setFlex = (primary = 'center', secondary = 'center') => css`
    display:flex;
    justify-content:${primary};
    align-items:${secondary};
`

export const MainWrapper = styled.div`
    ${setFlex('space-between', '')}
    flex-direction: column;
    min-height: 100vh;
`

export const BodyWrapper = styled.div`
   ${setFlex()};
   height:100%;
`



export const GlobalStyle = createGlobalStyle`
    *{ 
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
        text-decoration: none;
        list-style: none;
    }
    html {
        font-size: 62.5%;
    }
    body {
        margin:0;
        padding:0;
        font-size:16px;
        box-sizing: border-box;
    }
    button{
        outline:none;
        cursor:pointer;
        border:none;
    }
`