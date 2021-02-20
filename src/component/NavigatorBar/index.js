import React from 'react'
import { NavWrapper } from './styled'
import { NavLink } from 'react-router-dom'
const NavigatorBar = () => {
    return (
        <NavWrapper>
            <NavLink className='menu' activeClassName='menu active' to="/home">Home</NavLink>
            <NavLink className='menu' activeClassName='menu active' to="/cattle/sires">Sires</NavLink>
            <NavLink className='menu' activeClassName='menu active' to="/cattle/cows">Cows</NavLink>
        </NavWrapper>
    )
}
export default NavigatorBar