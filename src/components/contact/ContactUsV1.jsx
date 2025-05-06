import ContactForm from '../form/ContactForm';
import illustration14 from "/assets/img/illustration/14.png"
import Animation from '../animation/Animation';

const ContactUsV1 = () => {
    return (
        <>
            <div className="contact-style-one-area overflow-hidden default-padding">
                <div className="contact-shape">
                    <img src={illustration14} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-40">
                            <div className="contact-style-one-info">
                                <h4 className="sub-title">Have Questions?</h4>
                                <h2>Contact Information</h2>
                                <p>
                                    Have questions or need expert IT guidance? Our team is here to help. Reach out and discover how GlobalTek can support your business goals with the right technology.
                                </p>
                                <ul>
                                    <Animation className='animate__animated animate__fadeInUp' delay='100ms'>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Hotline</h5>
                                                <a href="tel:+19543683944">+1 954 368 3944</a>
                                            </div>
                                        </li>
                                    </Animation>

                                    <Animation className='animate__animated animate__fadeInUp' delay='300ms'>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Our Location</h5>
                                                <p>
                                                    3471 North Federal Highway<br />
                                                    Suite 305 – Fort Lauderdale, FL 33306
                                                </p>
                                            </div>
                                        </li>
                                    </Animation>

                                    <Animation className='animate__animated animate__fadeInUp' delay='500ms'>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope-open-text" />
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Official Email</h5>
                                                <a href="mailto:directsales@globaltekinternational.com">directsales@globaltekinternational.com</a>
                                            </div>
                                        </li>
                                    </Animation>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
                            <div className="contact-form-style-one">
                                <h2 className="heading">Send us a Massage</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsV1;