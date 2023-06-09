import React from 'react'
import {useState, useEffect} from 'react'

import './Navbar.css'

export default function Navbar() { 

    const [toggleMenu, setToggleMenu] = useState(false);

    const [largeur, setLargeur] = useState(window.innerWidth);

    console.log(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.addEventListener('resize', changeWidth);
        }

    }, [])

  return (

   <nav>
        {(toggleMenu || largeur > 500) && (
        <ul className="liste">
            <li className="items">Acceuil</li>
            <li className="items">Services</li>
            <li className="items">Contact</li>
        </ul>
        )} 
        <button 
        onClick={toggleNav}
        className="btn">BTN</button>

   </nav>

  )
}
