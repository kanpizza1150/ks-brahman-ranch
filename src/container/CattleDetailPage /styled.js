import styled from 'styled-components'
import { setColor, setFlex, setTransition } from '../../globalStyle'



export const Card = styled.div`
    width:30rem;
    height:30rem;
    margin:2rem;
    border-radius:5px;
    ${setTransition()};
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 1rem 0.5rem rgba(0,0,0,0.1);
    }
    img{
        width:100%;
    }
    .name{
        font-size:3rem;
        color:${setColor.primary};
        text-align:center;
    }
`
export const CardWrapper = styled.div`
   ${setFlex()};
   flex-wrap:wrap;
`