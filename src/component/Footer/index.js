import React from 'react'
import { FooterWrapper, ContentWrapper, ContentContainer, Copyright, MediaWrapper, MediaLink } from './styled'

export default function index() {
    const _getSocialMedias = () => {
        const iconUrl = 'https://i0.wp.com/rockroadcreative.com/wp-content/uploads/2020/02/white-facebook-icon-png-facebook-logo-facebook-facebook-fortnite-logo-transparent-white-11562907815wcbclgonet.png?ssl=1'
        const accounts = [{ key: 'facebook', icon: '', link: 'www.facebook.com' }, { key: 'youtube', icon: '', link: 'www.youtube.com' }, { key: 'gmail', icon: '', link: 'www.gmail.com' },]

        const items = accounts.map(acc => <MediaLink target="_blank" href={acc.link} key={acc.key} ><img src={iconUrl} alt={acc.key} className='icon' /></MediaLink>)
        return <MediaWrapper>{items}</MediaWrapper>
    }
    const _getContent = () => {
        return <ContentWrapper>
            <ContentContainer width='40vw'>
                <h1>LOGO</h1>
                <h2>KS Brahman Ranch</h2>
            </ContentContainer>
            <ContentContainer>
                <span>Sires</span>
                <span>Cow</span>
            </ContentContainer>
            <ContentContainer>
                <span>Contract us</span>
                <span>Location</span>
            </ContentContainer>
        </ContentWrapper>
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
