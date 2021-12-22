import React from 'react';
import './Profile.css';
// import profileImage from '../../../../images/tuhin.png';
import profileImage from '../../../../images/tuhin.png';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="Profile container py-5">
            <div className="row d-flex justify-content-center align-items-center my-md-5 my-0">
                <div className="col-lg-7 pl-lg-5 pl-2 order-1 order-lg-0 py-4 py-md-5 text-left text-center text-md-left animate__animated animate__fadeInLeft">
                    <p className="hello">Hello! I am</p>
                    <h1 className="name"> Tuhin Khan</h1>
                    <h3 className="designation mt-2">Web Developer</h3>
                    <div className="social-links my-2">
                        <a href="https://github.com/developertuhin" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        {/* <a href="https://www.linkedin.com/in/tayabpabel" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a> */}

                        {/* <a href="https://medium.com/@tayab_pabel" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium-m"></i></a> */}

                        <a href="https://www.facebook.com/alextuhin.khan.9" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>

                        <a href="https://twitter.com/TuhinKh66451794" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>

                        <a href="https://www.instagram.com/tuhinweb/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                    <p className="description mt-3 mt-md-4 mb-4">I am a passionate Web Developer. I love to code modern and responsive layouts for web application. My core skill is based on JavaScript and I love to do most things using JavaScript.</p>
                    <a className="btn mr-1" href="https://developertuhin.github.io/resume-tuhin/Resume%20of%20Tuhin.pdf" target="_blank" rel="noopener noreferrer" download>Get Resume</a>
                    <Link to="/about" className="btn ml-1">About Me</Link>
                </div>
                <div className="col-lg-5 d-flex justify-content-center animate__animated animate__fadeInRight">
                    <img className="img-fluid profile-image" src={profileImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Profile;