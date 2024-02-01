import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    
    return (
        <>

            <header className='header'>
                <h2><span>Google</span> Keep Note</h2>
                <ul>
                    <li><Link to={'/archive'}>Archive</Link></li>
                    <li><Link to={'/delete'}>Trash</Link></li>
                </ul>
            </header>


        </>
    )
}

export default Header