import FooterNewsLetter from '../form/FooterNewsLetter';
import { Link } from 'react-router-dom';

const FooterV1 = () => {
    return (
        <>
            <footer className="bg-dark overflow-hidden text-light">
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-30 pr-md-15 pr-xs-15">
                                <div className="f-item address">
                                    <ul className="contact-address">
                                        <li>
                                            <p>Want to connect?</p>
                                            <h4><a href="mailto:directsales@globaltekinformatica.com">directsales@globaltekinformatica.com</a></h4>
                                        </li>
                                        <li>
                                            <p>Call us anytime</p>
                                            <h4><a href="tel:+19543683944">tel:+1 954 368 3944</a></h4>
                                        </li>
                                        <li>
                                            <p>Headquarters</p>
                                            <h4>Fort Lauderdale, Florida, USA</h4>
                                        </li>
                                        <li>
                                            <p>Regional Offices</p>
                                            <h4>Mexico City, Mexico | Bogotá, Colombia | Lima, Peru</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <ul>
                                        <li>
                                            <Link to="/about-us">Company Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">Help Center</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">Career</Link>
                                        </li>
                                        <li>
                                            <Link to="/pricing">Plans &; Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog-single-with-sidebar/1">News &; Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Services</h4>
                                    <ul>
                                        <li>
                                            <Link to="/services-details/1">Cybersecurity &amp; Compliance</Link>
                                        </li>
                                        <li>
                                            <Link to="/services-details/1">IT Infrastructure &amp; Cloud Solutions</Link>
                                        </li>
                                        <li>
                                            <Link to="/services-details/1">Managed IT Services &amp; 24/7 Support</Link>
                                        </li>
                                        <li>
                                            <Link to="/services-details/1">IoT &amp; Smart Solutions</Link>
                                        </li>
                                        <li>
                                            <Link to="/services-details/1">IT Procurement &amp; Hardware/Software Solutions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <div className="f-item newsletter">
                                    <p>
                                        Join our subscribers list to get the latest <br /> news and special offers.
                                    </p>
                                    <FooterNewsLetter />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="https://themeforest.net/user/validthemes" target='_blank'>validthemes</a></p>
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

export default FooterV1;