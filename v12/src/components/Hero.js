import React from 'react';
import "./HeroStyles.css";

function Hero() {
  return (<>
    <div className='hero'>
        <img alt='HerpImg' src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'/>

        <div className='hero-text'>
            <h1>Your Internet Journey Begins Here</h1>
            <p>Choose Your Ideal Design Today And Let's Get Started.</p>
            <a href='/'>Development Plan</a>
        </div>      
    </div>
  </>);
}

export default Hero;
