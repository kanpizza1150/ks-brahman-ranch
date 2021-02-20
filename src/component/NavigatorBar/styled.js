import styled from 'styled-components'
import { setFlex } from '../../globalStyle'
export const NavWrapper = styled.div`
    width:100vw;
    height:3rem;
    ${setFlex('space-between')};
    background-color:black;
    color:white;
    flex-wrap:wrap;
    .menu{
        cursor:pointer;
        margin:auto;
    }
`