import React, { Link } from 'react'
import '../../App.css';
import Contact from './Contact';

function About() {
    return(
        <>
            <div className='studently'>
                <h1>Hello there:</h1>
                <h2>Krishna Neupaney here</h2>
                <br />
                <h3>I'm a developer learning on progress and student at General Assembly. I love solving problems with code and building applications in JavaScript. When I'm not coding or learning, you can find me on long run or on my bed taking naps. Thanks for visiting!</h3>
                
            </div>
            <br />
            <h2>Connect With me: </h2>
            <p align="left">
            <a href="https://github.com/krishnaneupaney" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="krishnaneupaney" height="30" width="40" /></a>
<a href="https://codepen.io/krishna" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg" alt="esin87" height="30" width="40" /></a>
<a href="https://dev.to/krishnaneupaney" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" alt="krishnaneupaney" height="30" width="40" /></a>
<a href="https://linkedin.com/in/krishnaneupaney" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="krishnaneupaney" height="30" width="40" /></a>
<a href="https://codesandbox.com/krishnaneupaney" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg" alt="krishnaneupaney" height="30" width="40" /></a>
<a href="https://instagram.com/krishnaneupaney" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="krishnaneupaney" height="30" width="40" /></a>
</p>
<br />
<a href='/contact'>Contact Me</a>
        </>
    )
}


export default About;