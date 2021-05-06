import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>My Coding Experiences</h1> 
            <p>What I've learned so, all in one site </p>    
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                       Take ME TO ABOUT ME
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                       WATCH MY INTRO <i className='far fa-play-circle' />
                </Button>
            </div>      
        </div>
    )
}

export default HeroSection;


