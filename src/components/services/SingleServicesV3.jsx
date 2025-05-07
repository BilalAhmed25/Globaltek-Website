import { Link } from "react-router-dom";

const SingleServicesV3 = ({ service, path }) => {
    const { id, image, title, description, tags } = service
    return (
        <div className="services-style-three-item">
            <div className="item-title">
                <img src={`/assets/img/icon/${image}`} alt="Image Not Found" />
                <h4><Link to={`/${path}`}>{title}</Link></h4>
                <p>{description}</p>
                <div className="d-flex mt-30">
                    <Link to={`/${path}`}><i className="fas fa-long-arrow-right" /></Link>
                    <div className="service-tags">
                        {tags.map((tag, index) => (
                            <Link key={index} to="#">{tag}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServicesV3;
