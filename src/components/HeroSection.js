import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Welcome To My Portfolio</h1> 
            <p>Check out my work here and</p>  
            <p>feel free to contact me with job offers.</p> 
            <p>Most of the time, I accept it</p> 
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                       But Who Am I?
                </Button>
                {/* <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                       WATCH MY INTRO <i className='far fa-play-circle' />
                </Button> */}
            </div>      
        </div>
    )
}

export default HeroSection;


