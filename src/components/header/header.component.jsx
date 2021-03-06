import React from 'react'

import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className="logo" />
        </Link>
        <nav className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <button className="option" onClick={() => auth.signOut()}>SIGN OUT</button>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }
        </nav>
    </div>
)

export default Header