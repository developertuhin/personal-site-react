import React from 'react';
import './Projects.css';
import apartmentHunt from '../../../images/projects/apartment-hunt.png'
import athenaDesign from '../../../images/projects/athena-design.png'
import project1 from '../../../images/projects/creative-agency.png';
import project2 from '../../../images/projects/doctors-portal.png';
import project3 from '../../../images/projects/volunteer-network.png';
import project4 from '../../../images/projects/travel-guru.png';
import project5 from '../../../images/projects/e-school.png';
import project6 from '../../../images/projects/hot-gadgets.png';

const Projects = () => {
    return (
        <div className="Projects">
            <div className="container py-5">
                <div className="header text-center">
                    <h2>MY LATEST <span>PROJECTS</span></h2>
                    <p>An eye for detail makes my works excellent</p>
                    <div className="wrapper">
                        <div className="divider div-transparent div-dot"></div>
                    </div>
                </div>
                <div className="row">                   
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={athenaDesign} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Athena Design UI</h4>
                                <p className="card-text">A static design company website with responsive layouts for every kind of device. A user can see the company's services and pricing and submit their mail for subscription.</p>
                                <div className="technology mb-4"><span>React</span> <span>Bootstrap</span> <span>HTML</span> <span>CSS</span> <span>Adobe XD</span> <span>GitHub</span></div>
                                <a href="https://github.com/developertuhin/athena-design-responsive-ui" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://athena-design-team39.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project5} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">E-School</h4>
                                <p className="card-text">A static online learning website with responsive layouts for every kind of device. The review section builds with a carousel slider. A user can see the courses and pricing.</p>
                                <div className="technology mb-4"><span>Bootstrap</span> <span>HTML</span> <span>CSS</span> <span>Figma</span> <span>GitHub</span></div>
                                <a href="https://github.com/developertuhin/online-school" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://tayab-pabel.github.io/e-school/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project6} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Hot Gadgets</h5>
                                <p className="card-text">A static e-commerce website with responsive layouts for every kind of device. The header section builds with a carousel slider. A customer can see the products and pricing.</p>
                                <div className="technology mb-4"><span>Bootstrap</span> <span>HTML</span> <span>CSS</span> <span>Figma</span> <span>GitHub</span></div>
                                <a href="https://github.com/developertuhin/hot-gadgets" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://tayab-pabel.github.io/hot-gadgets/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;