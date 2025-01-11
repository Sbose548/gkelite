'use client'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from 'react'

const page = () => {

     useEffect(() => {
        AOS.init({
          once: true,
          duration: 1000, // Adjust as needed
        });
      }, []);
      
    return (
        <div>
            <main className="main">
                <div className="page-title accent-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">About</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <section id="about" className="about section">

                    <div className="container">

                        <div className="row position-relative">

                            <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200"><img src="assets/img/about.jpg" /></div>

                            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                                <h2 className="inner-title">One Stop Solution...</h2>
                                <div className="our-story">
                                    <h3>About Us</h3>
                                    <p>GKeliteinfo is an innovative startup, recognized and endorsed by 25 leading CEOs as the ultimate one-stop solution for all your business needs. Our cutting-edge services are designed to streamline operations, boost growth, and deliver unparalleled value to enterprises looking for efficient, effective solutions.</p>
                                    <ul>
                                        <li><i className="bi bi-check-circle"></i> <span>Comprehensive Business Solutions</span></li>
                                        <li><i className="bi bi-check-circle"></i> <span>Endorsement by Industry Leaders</span></li>
                                        <li><i className="bi bi-check-circle"></i> <span>Focus on Results and Efficiency</span></li>
                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                {/* <section id="skills" className="skills section" style={{"textal: left;margin-left:150px;margin-right:100px"}}> */}
                <section id="skills" className="skills section" style={{ textAlign: 'left', marginLeft: '150px', marginRight: '100px' }}>

                    <div className="container section-title" data-aos="fade-up">
                        <h2>OUR OBJECTIVES</h2>
                        <p>To drive business success through innovative, comprehensive solutions.</p>
                    </div>

                    <div className="our-story" >
                        <p>At GKelite, we proudly position ourselves as the ultimate one-stop powerhouse, endorsed by industry leaders, to accelerate business success! Our objectives are clear: </p>
                        <ul>
                            <li><span>Talent Acquisition Excellence – GK Elite- Info Service help you secure the best talent, driving innovation and growth.</span></li>
                            <li><span>Dynamic Digital Marketing Solutions – GK Elite-Info digital will Boost your brand visibility and skyrocket your online presence with cutting-edge strategies.</span></li>
                            <li><span>B2B & B2C Sales Mastery – Gk Elite-Info Sales Service delivering unparalleled results for both business-to-business and business-to-consumer markets.</span></li>
                        </ul>
                        {/* <h5 style="text-align: left;margin-left:0px;font-weight: bold;">Global Lead Generation</h5> */}
                        <h5 style={{ textAlign: 'left', marginLeft: '0px', fontWeight: 'bold' }}>Global Lead Generation</h5>
                        <p>We understand that generating leads is essential for sustained growth. Our innovative approach allows us to generate high-quality leads for businesses around the world. Whether you're looking to expand into new markets or strengthen your presence in existing ones, our lead generation services are designed to fuel your growth.</p>
                        <h5 style={{ textAlign: 'left', marginLeft: '0px', fontWeight: 'bold' }}>Innovative Lead Generation Strategies</h5>
                        <p></p>
                        <h5 style={{ textAlign: 'left', marginLeft: '0px', fontWeight: 'bold' }}>Multi-Channel Lead Generation</h5>
                        <p>In our pursuit of excellence, we continuously explore various projects that utilize a blend of effective lead generation strategies. By leveraging platforms like #LinkedIn, #EmailMarketing, #SocialMediaMarketing, and #PayPerClick, we ensure a diversified approach that captures potential clients from multiple touchpoints.</p>
                        <h5 style={{ textAlign: 'left', marginLeft: '0px', fontWeight: 'bold' }}>Trial and Error for Optimal Results</h5>
                        <p>Our journey has involved extensive testing and optimization to discover the best lead generation tactics. Through this iterative process, we've honed in on strategies that create a stable flow of new leads daily, providing you with a reliable pipeline to drive your business forward.</p>
                        <h5 style={{ textAlign: 'left', marginLeft: '0px', fontWeight: 'bold' }}>Top-Tier BPO Services</h5>
                        <p></p>
                        <h5 style={{ textAlign: 'left', marginLeft: '0px', fontWeight: 'bold' }}>GK Elite-Info Service Providers</h5>
                        <p>GK Elite-Info delivers seamless and efficient Business Process Outsourcing (BPO) solutions that enhance operational workflows and boost productivity.</p>
                        <p>1. We are a leading BPO service provider specializing in engaging conversations across multiple platforms, helping businesses thrive in today’s competitive landscape.</p>
                        <p>2. We recognize that your customers are the backbone of your business. That’s why we prioritize exceptional customer interactions.</p>
                        <p>3. Our team boasts years of experience working with industry giants, excelling in customer service, solutions, and satisfaction.</p>
                        <p>4. We pride ourselves on achieving a higher first call resolution rate, ensuring that customer issues are addressed promptly.</p>
                        <p>5. Our advanced dashboard monitoring allows for real-time tracking of performance metrics to enhance service delivery.</p>
                        <p>6. We offer digital recordings and playbacks, ensuring quality assurance and continuous improvement in our services.</p>
                        <p>7. At GK Elite-Info, we are committed to uncompromised excellence in every aspect of our BPO services.</p>


                    </div>

                </section>
                <section id="team" className="team section light-background">

                    <div className="container section-title" data-aos="fade-up">
                        <h2>Our Team</h2>
                        <p>Experienced Professionals Dedicated To Innovation</p>
                    </div>

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                <section id="clients" className="clients section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Clients</h2>
                        <p>Diverse clients trust us for tailored growth solutions.</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row g-0 clients-wrap">

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-7.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-xl-3 col-md-4 client-logo">
                                <img src="assets/img/clients/client-8.png" className="img-fluid" alt="" />
                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </div>
    )
}

export default page