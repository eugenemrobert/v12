import './NavbarStyles.css';
import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";

class Navbar extends Component{
    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>V12</h1>

                <ul className='nav-menu'>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href="/"><i class={item.icon}></i>{item.title}</a>
                            </li>
                            )
                        })}
                        <button>Sign Up</button>                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;

