import React from 'react';
import './Blogs.css';
import blog1 from '../../../images/blogs/blog1.jpg';
import blog2 from '../../../images/blogs/blog2.png';
import blog3 from '../../../images/blogs/blog3.png';
import blog4 from '../../../images/blogs/blog4.png';
import blog5 from '../../../images/blogs/blog5.png';
import blog6 from '../../../images/blogs/blog6.jpg';

const Blogs = () => {
    return (
        <div className="Blogs">
            <div className="container py-5">
                <div className="header text-center">
                    <h2>MY LATEST <span>BLOG</span></h2>
                    <p>I share the best ideas in my blog</p>
                    <div className="wrapper">
                        <div className="divider div-transparent div-dot"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={blog2} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Five Things You Should Know Before You Jumping Into ReactJS <span aria-label="" role="img">🔯</span></h4>
                                <p className="card-text">Every front end developer and web developer knows how painful it is to write the same code at multiple places. If they need to add a button at multiple pages they are forced to do... </p>
                                <a href="https://medium.com/@tayab_pabel/five-things-you-should-know-before-you-jumping-into-reactjs-54f1cb3ff565" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={blog1} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Every Programmer Needs An Anti Blue Light Glass <span aria-label="" role="img">👓</span></h4>
                                <p className="card-text">Being a programmer requires a lot of screen attentions. Long hours can unconsciously put your vision at risk. Also, if you are a regular user of computers or smartphones... </p>
                                <a href="https://medium.com/@tayab_pabel/every-programmer-needs-an-anti-blue-light-glass-862b4e0aaef8" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={blog3} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">10 important things about JavaScript <span aria-label="" role="img">👨‍💻</span></h4>
                                <p className="card-text">JavaScript has one type of number. Numbers in JavaScript are always in a 64-bit format. Numbers can be written with or without decimals. Integer values are treated as 32-bit ints... </p>
                                <a href="https://medium.com/@tayab_pabel/every-programmer-needs-an-anti-blue-light-glass-862b4e0aaef8" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={blog4} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">10 essential things must know about JavaScript <span aria-label="" role="img">👨‍💻</span></h4>
                                <p className="card-text">1. Primitive Values: A primitive value is a single simple data value with no additional properties and methods. 2. Objects and Functions Objects - used to group related data and code... </p>
                                <a href="https://tayab-pabel.medium.com/10-essential-things-must-know-about-javascript-c189c5070d94" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={blog5} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">10 things you need to know about react <span aria-label="" role="img">🔯</span></h4>
                                <p className="card-text">1. ReactDOM.render(): Purpose of the ReactDOM.render() is to display the specified HTML code inside the specified HTML element. 2. React.createElement(): It is used to create elements... </p>
                                <a href="https://tayab-pabel.medium.com/10-things-you-need-to-know-about-react-b6ae979ad42b" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={blog6} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">As a junior developer, 10 JavaScript concepts you need to know for interviews <span aria-label="" role="img">👨‍💻</span></h4>
                                <p className="card-text">1. Truthy and Falsy values: Truthy value is a value that is defined true when run into in a boolean context. Everything else is truthy... </p>
                                <a href="https://tayab-pabel.medium.com/as-a-junior-developer-10-javascript-concepts-you-need-to-know-for-interviews-8157356e809f" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;