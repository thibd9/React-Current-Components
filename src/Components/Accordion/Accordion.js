import React from 'react'
import { useState, useRef, useEffect } from 'react'

import './Accordion.css'

import chevron from './chevron.svg'

export default function Accordion() {

    const [toggle, setToggle] = useState(false);

    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    }

    const refHeight = useRef();

    useEffect(() => {

        setHeightEl(`${refHeight.current.scrollHeight}px`)

    })

  return (

    <div className='accordion'>

        <div 
        onClick={toggleState}
        className="accord-visible">

                <h2>Lorem ipsum dolor sit amet.</h2>

                <img src={chevron} alt="chevron down" />

        </div>

        <div 
        ref={refHeight}
        className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
        style={{height : toggle ? `${heightEl}` : "0px" }}
        >
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit incidunt laudantium dolorem tempore explicabo dolore laboriosam, nostrum repudiandae facere voluptatem nobis fugit cumque, veritatis rem hic inventore. Animi, incidunt atque.
            </p>

        </div>

    </div>
  )
}
