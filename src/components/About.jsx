import React from 'react'
import { Link } from 'react-router-dom';

export const About = () => {
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
        <h1>ABOUT</h1>
        </div>
    )
}