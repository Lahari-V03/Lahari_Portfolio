import React, { useState } from "react";
import '../Styles/Intro.css';

function Intro() {
    return (
        <>
        <div className="image-container">
            <img src="/pic.JPG" alt="Picture / Logo" />
        </div >
            <div className='intro-container'>
                <span className='greeting-head'>Hi! My name is Lahari Vuppalapati </span>
                <span className='greeting-text'>M.S in Computer Science</span>
                <span className='greeting-text'>University of Maryland, Baltimore County</span>
                <h4 className="intro-text">I love <span className="highlight">technology, solving problems, and continuous learning!</span></h4>
            </div>
        </>
    );
};

export default Intro;