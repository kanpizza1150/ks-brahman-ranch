import styled from 'styled-components'
import { setFlex } from '../../globalStyle'
export const NavWrapper = styled.div`
    height:5rem;
    ${setFlex('space-between')};
    background-color:black;
    color:white;
    flex-wrap:wrap;
    .menu{
        cursor:pointer;
        margin:auto;
    }
`