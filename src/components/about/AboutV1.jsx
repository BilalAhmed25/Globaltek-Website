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
                                    <Link onClick={() => setOpen(true)} to="#" className="popup-youtube video-play-button">
                                        <i className="fas fa-play" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <div className="content">
                                        <h2 className="title">Who are we</h2>
                                        <p>
                                            At Globaltek Informática LLC, we help businesses stay ahead of the digital
                                            curve with tailored IT solutions that enhance efficiency, security, and scalability.
                                            Our custom IT services help businesses streamline operations, reduce costs, and
                                            stay ahead of technological advancements.
                                            Whether you need cutting-edge cybersecurity, IoT integration, managed IT
                                            services, cloud infrastructure, or 24/7 IT support, our experts ensure seamless
                                            implementation and optimized performance to keep your business running smoothly.
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
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
        </>
    );
};

export default AboutV1;