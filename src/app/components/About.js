'use client'

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import React from 'react';

const About = () => {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000, // Adjust as needed
        });
    }, []);

    return (
        <div>
            <main className="main">
                {/* Page Title */}
                <div className="page-title accent-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">About</h1>
                    </div>
                </div>

                {/* About Section */}
                <section id="about" className="about section">
                    <div className="container">
                        <div className="row position-relative">
                            <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200">
                                <img src="assets/img/about.jpg" alt="About Us" className="img-fluid"/>
                            </div>
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

                {/* Objectives Section */}
                <section id="skills" className="skills section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>OUR OBJECTIVES</h2>
                        <p>To drive business success through innovative, comprehensive solutions.</p>
                    </div>
                    <div className="our-story container">
                        <p>At GKelite, we proudly position ourselves as the ultimate one-stop powerhouse, endorsed by industry leaders, to accelerate business success! Our objectives are clear:</p>
                        <h6 className="fw-bold">Talent Acquisition Excellence</h6>
                        <p>We help you secure the best talent, driving innovation and growth.</p>
                        <ul>
                            <li>We are the preferred recruiting partner for Fortune 500 companies.</li>
                            <li>We specialize in matching skills with business needs.</li>
                            <li>Our platform provides industry-specific job opportunities.</li>
                            <li>We deliver quality service with high selection ratios.</li>
                        </ul>
                        <p>Join us to experience recruitment success that drives your business forward!</p>

                        <h6 className="fw-bold">Dynamic Digital Marketing Solutions</h6>
                        <p>Boost your brand visibility with cutting-edge strategies.</p>
                        <ul>
                            <li>Endorsed by 25 visionary CEOs, empowering brands in digital marketing.</li>
                            <li>Innovative team with experience from top digital marketing firms.</li>
                            <li>Proven strategies for boosting visibility and driving traffic.</li>
                        </ul>

                        <p>Join us at GKeliteinfo, where brands don’t just compete—they dominate!</p>
                    </div>
                </section>

                {/* Team Section */}
                <section id="team" className="team section light-background">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Our Team</h2>
                        <p>Experienced Professionals Dedicated To Innovation</p>
                    </div>

                    {/* Aligning team members towards the right */}
                    <div className="container" style={{ display: "flex", justifyContent: "flex-end", marginRight: "50px" }}>
                        <div className="row gy-4">
                            {/* Team Member 1 */}
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="/assets/img/team/team-4.png" className="img-fluid" alt="Lalit Adithya" />
                                        <div className="social">
                                            <Link href=""><i className="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Lalit Adithya</h4>
                                        <span>Manager</span>
                                    </div>
                                </div>
                            </div>

                            {/* Team Member 2 */}
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="/assets/img/team/team-2.png" className="img-fluid" alt="Narra Shiva Prasad" />
                                        <div className="social">
                                            <Link href=""><i className="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Narra Shiva Prasad</h4>
                                        <span>CEO (Founder)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Team Member 3 */}
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="/assets/img/team/team-1.png" className="img-fluid" alt="Shikar Baduria" />
                                        <div className="social">
                                            <Link href=""><i className="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Shikar Baduria</h4>
                                        <span>Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default About;
