import styled, { css, createGlobalStyle } from 'styled-components'

export const setColor = {
    primary: 'red',
    black: '#000000',
    white: '#ffffff'
}

export const setFlex = (primary = 'center', secondary = 'center') => css`
    display:flex;
    justify-content:${primary};
    align-items:${secondary};
`

export const MainWrapper = styled.div`
     max-height: 100vw;
    overflow: hidden;
`
export const BodyWrapper = styled.div`
   height:50rem;
   ${setFlex()};
`



export const GlobalStyle = createGlobalStyle`
    *{ 
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;}
    html {
        font-size: 62.5%;
    }
    body {
        margin:0;
        padding:0;
        font-size:16px;
    }
    button{
        outline:none;
        cursor:pointer;
        border:none;
    }

`