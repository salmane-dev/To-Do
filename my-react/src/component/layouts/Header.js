import React from 'react'
import { Link } from 'react-router-dom'


// functional component
export default function Header() {

   const stylings={
        backgroundColor: '#01273d',
        color: 'white',
        padding:'10px',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:'22px',
        letterSpacing:'3px', 
    }

    return (
        <header style={ stylings }>
            <h1  className="text-2xl"> My Duty  </h1>
            <Link to="/" className="text-xs">  HOME </Link> | <Link to="/About" className="text-xs"> ABOUT </Link>
        </header>
    )
}


