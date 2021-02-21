import styled from 'styled-components'
import { setColor, setFlex, setTransition } from '../../globalStyle'



export const Card = styled.div`
    width:30rem;
    height:30rem;
    margin:2rem;
    border-radius:5px;
    ${setTransition()};
    &:hover{
        /* box-shadow: 1rem 1rem 1rem ${setColor.gray}; */
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