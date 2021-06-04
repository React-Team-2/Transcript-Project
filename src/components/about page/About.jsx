import React from 'react';
import Overview from './Project Overview/Overview'
import Team from './Teams/Team'
import Contact from './Contact Us/Contact'
import Navbar from './navbar/Navbar';

const About = () => {
    return (
        <div className="container">
            <Navbar />
            <Overview />
            <Team />
            <Contact /> 
        </div>
        )
}

export default About;