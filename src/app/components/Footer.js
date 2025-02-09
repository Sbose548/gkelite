import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer dark-background">

                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <Link href="https://maps.app.goo.gl/K7L8txP4VR5cpA3MA" className="logo d-flex align-items-center">
                                <span className="sitename">GKELITE</span>
                            </Link>
                            <div className="footer-contact pt-3">
                                <p>6-3-887 3rd Floor Mcp Arcade</p>
                                <p> Opp: Domino's, Raj Bhavan Road</p>
                                <p>Raj Bhavan Road</p>
                                <p>Somajiguda 500082</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>+91 7093256562</span></p>
                                <p><strong>Email:</strong> <span>gkeliteinfo@gmail.com</span></p>
                            </div>
                            <div className="social-links d-flex mt-4">
                                <Link href="#"><i className="bi bi-twitter-x"></i></Link>
                                <Link href="#"><i className="bi bi-facebook"></i></Link>
                                <Link href="#"><i className="bi bi-instagram"></i></Link>
                                <Link href="#"><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About us</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/terms-of-services">Terms of service</Link></li>
                                {/* <li><Link href="#">Privacy policy</Link></li> */}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><Link href="/service-details/ai_services">AI Services</Link></li>
                                <li><Link href="/service-details/dynamic_Digital_marketing_solutions"> Digital Marketing</Link></li>
                                <li><Link href="/service-details/b2b_b2c_sales_mastery">B2B & B2C Sales</Link></li>
                                <li><Link href="/service-details/bpo_services">BPO Service</Link></li>
                                <li><Link href="/service-details/talent_acquisition_excellence">Talent Acquisition</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-12 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                            {/* Replace with Next.js handler or external API */}
                            <form action="your_api_endpoint_here" method="POST" className="php-email-form">
                                <div className="newsletter-form">
                                    <input type="email" name="email" required placeholder="Your email" />
                                    <input type="submit" value="Subscribe" />
                                </div>
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                            </form>
                        </div>
                    </div>

                    <div className="container copyright text-center mt-4">
                        <p>© <span>Copyright</span> <strong className="px-1 sitename">GKelite</strong> <span>All Rights Reserved</span></p>
                        <div className="credits">
                            Designed by <Link href="https://bootstrapmade.com/">GKelite-IT</Link>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    );
}

export default Footer;
