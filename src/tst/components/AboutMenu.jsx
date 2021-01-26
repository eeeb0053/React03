import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'


const selectedStyle = {
    backgroundColor: 'white', color: 'slategray'
}

export default function MainMenu({match}){
    return (<nav>
            <NavLink to={"/about"} style={match.isExact && selectedStyle}><FaHome/>[회사]</NavLink>
            <NavLink to={"/about/history"} activeStyle={selectedStyle}>[연혁]</NavLink>
            <NavLink to={"/about/location"} activeStyle={selectedStyle}>[위치]</NavLink>
            <NavLink to={"/about/service"} activeStyle={selectedStyle}>[서비스]</NavLink>
        </nav>)
}