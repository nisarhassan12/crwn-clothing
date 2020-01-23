import React from 'react'

import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => (
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className="logo" />
        </Link>
        <nav className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
        </nav>
    </div>
)

export default Header