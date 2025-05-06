import FooterNewsLetter from '../form/FooterNewsLetter';
import SocialShare from '../utilities/SocialShare';
import logo from "/assets/img/logo.webp"
import { Link } from 'react-router-dom';

const FooterV2 = () => {
    return (
        <>
            <footer className="bg-gray overflow-hidden">
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-30 pr-md-15 pr-xs-15">
                                <div className="f-item address">
                                    <img src={logo} alt="Image Not Found" />
                                    <p>
                                        Delivering custom IT solutions that address business needs, helping clients stay ahead of industry.
                                    </p>
                                    <ul className="footer-social">
                                        <SocialShare />
                                    </ul>
                                    <ul className="contact-address">
                                        <li>
                                            <p>Our Location</p>
                                            <h5 className='text-muted'>3471 North Federal Highway Suite 305 – Fort Lauderdale, FL 33306</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/careers">Careers</Link>
                                        </li>
                                        <li>
                                            <Link to="/partners">Partners</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Services</h4>
                                    <ul>
                                        <li>
                                            <Link to="/hardware-services">Harware Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/software-services">Software Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/cloud-services">Cloud Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/globally-managed-services">Globally Managed Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <div className="f-item newsletter">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <p>
                                        Join our subscribers list to get the latest <br /> news and special offers.
                                    </p>
                                    <FooterNewsLetter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Footer Bottom */}
                <div className="footer-bottom bg-dark text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="/" target='_blank'>Globaltek International</a>.</p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul className="link-list">
                                    <li>
                                        <Link to="#" >Terms</Link>
                                    </li>
                                    <li>
                                        <Link to="#" >Privacy</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV2;