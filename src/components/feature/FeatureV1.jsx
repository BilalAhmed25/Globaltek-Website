import CountUp from 'react-countup';

const FeatureV1 = () => {
    return (
        <>
            <div className="feature-style-one-area">
                <div className="container container-stage">
                    <div className="feature-style-one-items">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5">
                                <div className="feature-style-one-info">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={2025} enableScrollSpy={true} /></div>
                                            <div className="operator">.</div>
                                        </div>
                                    </div>
                                    <h3>Our vision & moto.</h3>
                                    <p>
                                        To be a trusted global IT partner known for innovation, reliability, and delivering transformative solutions that drive long-term success across diverse industries.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7 feature-style-one-content text-light">
                                <div className="feature-style-one-cards">
                                    <div className="path" />

                                    {/* Single item */}
                                    <div className="feature-style-one-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/1.png" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
                                            <h4>Approach</h4>
                                            <p>
                                                We take a hands-on, research-driven approach to IT, embedding ourselves in your daily operations to solve real-world challenges with precision.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Single item */}
                                    <div className="feature-style-one-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/2.png" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
                                            <h4>Mission</h4>
                                            <p>
                                                To deliver custom IT solutions that address unique business needs, helping clients stay ahead of industry trends with powerful, future-ready systems and support.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Single item */}
                                    <div className="feature-style-one-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/3.png" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
                                            <h4>Goal</h4>
                                            <p>
                                                Our goal is to align the right technologies with business growth, ensuring systems scale smoothly. We design, upgrade, & adapt IT infrastructures that support youto expand & evolve.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1;