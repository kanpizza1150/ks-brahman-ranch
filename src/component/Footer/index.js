import React from 'react'
import { FooterWrapper, ContentWrapper, ContentContainer, Copyright, MediaWrapper, MediaLink } from './styled'
import { setColor } from '../../globalStyle'
import { useHistory } from "react-router-dom"
import FacebookIcon from '../../imgs/facebook'
import YoutubeIcon from '../../imgs/youtube'
import PhoneIcon from '../../imgs/phone'
import ClockIcon from '../../imgs/clock'
import MailIcon from '../../imgs/mail'
import PinIcon from '../../imgs/pin'
const Footer = () => {
    const history = useHistory()

    const _getSocialMedias = () => {
        const accounts = [
            { key: 'facebook', icon: <FacebookIcon fill={setColor.white} />, link: 'www.facebook.com' },
            { key: 'youtube', icon: <YoutubeIcon fill={setColor.white} />, link: 'www.youtube.com' },
        ]
        const items = accounts.map(acc => <MediaLink target="_blank" href={acc.link} key={acc.key} >{acc.icon}</MediaLink>)
        return <MediaWrapper>{items}</MediaWrapper>
    }
    const _handleMenuClick = (path) => {
        history.push(path)
    }
    const _getContent = () => {
        const svgColor = {
            fill: setColor.gray, height: '2rem'
        }
        return <ContentWrapper>
            < ContentContainer width='40vw' >
                <h1>LOGO</h1>
                <h2>KS Brahman Ranch</h2>
            </ContentContainer >
            <ContentContainer>
                <button className='sub-menu' onClick={() => _handleMenuClick('/cattle/sires')}>Sires</button>
                <button className='sub-menu' onClick={() => _handleMenuClick('/cattle/cows')}>Cows</button>
            </ContentContainer>
            <ContentContainer>
                <div className='detail__wrapper'>
                    <p>Contract us</p>
                    <span><PhoneIcon {...svgColor} />+66 645454615</span>
                    <span><MailIcon {...svgColor} />kanpizza1150@gmail.com</span>
                    <span><ClockIcon {...svgColor} />8.00 - 20.00</span>
                </div>
                <div className='detail__wrapper'>
                    <p>Location</p>
                    <span>
                        <PinIcon {...svgColor} />
                        39 M.10 Baan Udomsuk, Huai-Krachao District, Kanchanaburi
                    </span>
                </div>
            </ContentContainer>
        </ContentWrapper >
    }
    const _getCopyRight = () => <Copyright>@Copyright. All right reserved.</Copyright>
    return (
        <FooterWrapper>
            {_getContent()}
            <div className='bottom__wrapper'>
                {_getSocialMedias()}
                {_getCopyRight()}
            </div>
        </FooterWrapper>
    )
}
export default Footer