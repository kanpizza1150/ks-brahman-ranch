import React from 'react'
import { NavWrapper } from './styled'
import { Link } from 'react-router-dom'
const NavigatorBar = () => {
    return (
        <NavWrapper>
            <Link className='menu' to="/">Home</Link>
            <Link className='menu' to="/sires">Sires</Link>
            <Link className='menu' to="/cows">Cows</Link>
            <Link className='menu' to="/about-us">About us</Link>
        </NavWrapper>
    )
}
export default NavigatorBar