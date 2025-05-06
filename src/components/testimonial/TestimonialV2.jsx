import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import team1 from "/assets/img/team/v1.jpg"
import team2 from "/assets/img/team/v2.jpg"
import quote from "/assets/img/quote.png"
import blankProfile from "/assets/img/blank-profile-picture-png.webp"

const TestimonialV2 = ({ sectionClass }) => {

    const sliderSettings = {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        },
    }

    return (
        <>
            <div className={`testimonial-style-two-area default-padding bg-cover ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="testimonial-two-info">
                                <div className="icon">
                                    <img src={quote} alt="Image Not Found" />
                                </div>
                                <h2>Over 50K clients and 5,000 projects across the globe.</h2>
                                <div className="review-card">
                                    <h6>Excellent 18,560+ Reviews</h6>
                                    <div className="d-flex">
                                        <div className="icon">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <span>4.8/5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 pl-60 pl-md-15 pl-xs-15">
                            <Swiper {...sliderSettings}
                                className="testimonial-style-two-carousel swiper"
                                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                            >
                                <div className="swiper-wrapper">
                                    {/* Single item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <p style={{ fontSize: '18px' }}>
                                                    GlobalTek transformed our outdated systems with seamless upgrades and reliable support. Their team truly understands how to align tech with business goals.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src={blankProfile} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4>Matthew J. Wyman</h4>
                                                        <span>Senior Consultant</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Single item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <p style={{ fontSize: '18px' }}>
                                                    We’ve partnered with many IT providers, but GlobalTek stands out for their proactive approach and industry-specific knowledge. A real game changer.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src={blankProfile} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4>Anthom Bu Spar</h4>
                                                        <span>Marketing Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Single item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <p style={{ fontSize: '18px' }}>
                                                    The solutions GlobalTek delivered helped streamline our daily operations. Their team is responsive, skilled, and always ahead of the curve.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src={blankProfile} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4>Matthew J. Wyman</h4>
                                                        <span>Senior Consultant</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Single item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-two">
                                            <div className="item">
                                                <div className="text-info">
                                                    <p style={{ fontSize: '18px' }}>
                                                    From planning to execution, GlobalTek was with us every step. Their custom IT strategy boosted our efficiency and cut downtime significantly.
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="thumb">
                                                        <img src={blankProfile} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4>Anthom Bu Spar</h4>
                                                        <span>Marketing Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Single item */}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV2;