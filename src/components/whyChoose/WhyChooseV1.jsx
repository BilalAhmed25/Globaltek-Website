import ChooseProgress1Data from '@/assets/jsonData/choose/ChooseProgress1Data.json'
import SingleChooseProgressV1 from '@/components/whyChoose/SingleChooseProgressV1';

const WhyChooseV1 = () => {
    return (
        <>
            <div className="choose-us-style-one-area overflow-hidden default-padding-top bg-gray">
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-5 offset-lg-1">
                                <div className="experience-style-one">
                                    <h2><strong>26</strong> Years of Experience</h2>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="circle-progress">
                                    {ChooseProgress1Data.map(progress =>
                                        <SingleChooseProgressV1 progress={progress} key={progress.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="choose-us-one-thumb">
                        <div className="content">
                            <div className="left-info">
                                <h2 className="title">Building great future Together, Be with us </h2>
                            </div>
                            <div className="process-style-one">
                                <div className="process-style-one-item">
                                    <span>01</span>
                                    <h4>Expertise</h4>
                                    <p>
                                        Backed by deep industry knowledge and engineering excellence, our team delivers dependable, cutting-edge IT systems that solve complex business challenges efficiently.
                                    </p>
                                </div>
                                <div className="process-style-one-item">
                                    <span>02</span>
                                    <h4>Industries Served</h4>
                                    <p>
                                        Our expertise spans multiple sectors, including finance, healthcare, logistics, energy, and manufacturing, allowing us to craft targeted solutions for every industry.
                                    </p>
                                </div>
                                <div className="process-style-one-item">
                                    <span>03</span>
                                    <h4>Support</h4>
                                    <p>
                                        With a dedicated team and flexible fulfillment options, we ensure fast, responsive service that keeps your operations running smoothly, no matter the scale or complexity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;