import styled from 'styled-components'
import { setFlex, setColor, setTransition } from '../../globalStyle'
export const NavWrapper = styled.div`
    height:5rem;
    ${setFlex('space-between')};
    background-color:${setColor.black};
    color:${setColor.white};
    flex-wrap:wrap;
  
    .menu{
        cursor:pointer;
        margin:auto;
        color:white;
        ${setTransition()};
        &:hover{
            color:${setColor.primary};
            transform:scale(1.05);
        }
        &.active{
            color:${setColor.primary};
        }
    }
`