import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser
                ? (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>)
                : (<Link className='option' to='/sign-in'>Sign In</Link>)
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
}) 

export default connect(mapStateToProps)(Header)
