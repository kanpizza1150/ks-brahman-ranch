import styled from 'styled-components'
import { setColor, setFlex, device, setTransition } from '../../globalStyle'
export const FooterWrapper = styled.div`
    background-color:${setColor.black};
    color:${setColor.white};
    padding:5rem;
    ${setFlex('space-around')};
    flex-direction:column;
    flex-wrap:wrap;
    min-height:35vh;
    height:100%;
    .bottom__wrapper{
        ${setFlex()};
        flex-direction:column;
        border-top:1px solid ${setColor.white};
        width:100%;
        padding-top:3rem;
    }
    @media ${device.mobileL} { 
        height: 50rem;
        padding:3rem;
    }


`

export const ContentWrapper = styled.div`
 ${setFlex('center', 'space-between')};
 width:100%;
 flex-wrap:wrap;
 height:10rem;
 @media ${device.mobileL} { 
    flex-wrap:nowrap;
    flex-direction:column;
    height: auto;
}

`
export const ContentContainer = styled.div`
 ${setFlex()};
 flex-direction:column;
 width: ${props => props.width || `20vw`};
 .title{
    align-self:flex-start;
 }
 .sub-menu{
     width:100%;
     margin:0.5rem;
     border:1px solid ${setColor.transparent};
    ${setTransition()};
     &:hover{
        border:1px solid ${setColor.primary};
        color: ${setColor.primary};
     }
 }
 .detail__wrapper{
     width:100%;
     margin-bottom:1rem;
    ${setFlex('flex-start', 'flex-start')};
    flex-direction:column;
     span{
        font-size:1.4rem;
        color:${setColor.gray};
    ${setFlex()};
        padding-left:2rem;
     }
     p{
         color:${setColor.primary};
     }
     svg{
         padding-right:1rem;
     }
 }
 h1{
    color:${setColor.primary};
 }
 @media ${device.mobileL} { 
    width:100%;
    margin-bottom:2rem;
}


`
export const MediaWrapper = styled.div`
 ${setFlex()};
 width: 30vw;
 .icon{
    height:1rem;
    width:1rem;
}

@media ${device.mobileL} { 
    width:100%;
}
`


export const Copyright = styled.div`
    font-size:1rem;
    margin-top:1rem;
`
export const MediaLink = styled.a`
    border:1px solid ${setColor.white};
    border-radius:50%;
    margin:1rem;
    width:3rem;
    height:3rem;
    ${setFlex()};
    background-color:transparent;
`