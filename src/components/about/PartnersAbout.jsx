import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import about1 from "/assets/img/partner.png"
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
                                    <img src={about1} alt="Image Not Found" draggable="false" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <div className="content">
                                        <h2 className="title">Our Trusted Partnerships</h2>
                                        <p>
                                            At GlobalTek, we believe strong partnerships drive smarter solutions. By collaborating with leading technology vendors and industry specialists, we deliver top-tier services and innovative IT solutions that create real value for our clients. Together, we grow, innovate, and lead.
                                        </p>
                                    </div>
                                    <ul className="card-list">
                                        <li>
                                            <img src={icon4} alt="Image Not Found" draggable="false" />
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