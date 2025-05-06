import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import about1 from "/assets/img/about/1.jpg"
import icon4 from "/assets/img/icon/4.png"
import { Link } from 'react-router-dom';

const AboutV1 = ({ sectionClass }) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={`about-style-one-area default-padding-top ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="about-style-one-items">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="thumb-style-one">
                                    <img src={about1} alt="Image Not Found" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <div className="content">
                                        <h2 className="title">We do great things for great clients.</h2>
                                        <p>
                                            Join us, and you’ll get the chance to work on some exciting projects with leading clients. We work with every big brand you can think of, including 300 of the Fortune 500.
                                            Whether it’s protecting the rhino, connecting the G20 Summit, or revolutionizing cycling, we help our clients achieve their ambitions.
                                            And with us, you can achieve yours.
                                        </p>
                                    </div>
                                    <ul className="card-list">
                                        <li>
                                            <img src={icon4} alt="Image Not Found" />
                                            <h5>Award Winning Company</h5>
                                        </li>
                                        <li>
                                            <h2>3.8x</h2>
                                            <h5>Economical growth </h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '100px' }}>
                            <div className="col-xl-5 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <div className="content">
                                        <h2 className="title">Changing the world with technology.</h2>
                                        <p>
                                            As a leading global technology company we’re at the forefront of how IT and communications are revolutionizing the way we live, work, and play. If you love a technical challenge, relish solving complex problems in cloud, big data, or cybersecurity, and thrive in a high-performance environment, we can offer you an exhilarating and rewarding career.
                                        </p>
                                        <div className="button mt-40">
                                            <Link className="btn btn-md circle btn-gradient animation" to="/contact-us">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <div className="thumb-style-one">
                                    <img src={about1} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="row" style={{ marginTop: '100px' }}>
                            <div className="col-lg-6">
                                <div className="thumb-style-one">
                                    <img src={about1} alt="Image Not Found" />
                                </div>
                            </div>
                            <div className="col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <div className="content">
                                        <h2 className="title">We’re passionate people.</h2>
                                        <h5 style={{ marginBottom: '10px' }}>We’re a global top employer.</h5>
                                        <ul>
                                            <li>
                                                There’s a lot of technology companies out there, but what sets us apart is our people.
                                            </li>
                                            <li>
                                                We get excited. We aim for excellence in everything we do.
                                            </li>
                                            <li>
                                                We’re professional and easy to work with. It’s a high-energy, can-do culture.
                                            </li>
                                            <li>
                                                For a big company, we’re refreshingly entrepreneurial.
                                            </li>
                                            <li>
                                                We care – about each other, our work, our clients, and the world.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
        </>
    );
};

export default AboutV1;