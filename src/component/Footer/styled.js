import styled from 'styled-components'
import { setColor, setFlex } from '../../globalStyle'
export const FooterWrapper = styled.div`
    width:100vw;
    min-height:50vh;
    height:fit-content;
    background-color:${setColor.black};
    color:${setColor.white};
    padding:5rem;
    ${setFlex('space-around')};
    flex-direction:column;
    flex-wrap:wrap;

`

export const ContentWrapper = styled.div`
 ${setFlex('center', 'space-between')};
 width:100%;
 flex-wrap:wrap;
 height:10vh;

`
export const ContentContainer = styled.div`
 ${setFlex()};
 flex-direction:column;
 width: 30vw;
`
export const MediaWrapper = styled.div`
 ${setFlex()};
 width: 30vw;
 .icon{
    height:1rem;
    width:1rem;
}
`

export const Edge = styled.div`
    width:100%;
    border:1px solid ${setColor.white};
`

export const Copyright = styled.div`
    font-size:1rem;
`
export const MediaLink = styled.button`
    border:1px solid ${setColor.white};
    border-radius:50%;
    margin:1rem;
    width:3rem;
    height:3rem;
    ${setFlex()};
    background-color:transparent;
`