import React from 'react'
import { Link } from 'react-router-dom';

export const Contact = () => {
    return(
        <div>
            <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
            <h1>CONTACT</h1>
        </div>
    )
}