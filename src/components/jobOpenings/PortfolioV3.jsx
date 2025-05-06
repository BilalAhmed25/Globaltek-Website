import jonOpeningsData from "@/assets/jsonData/jobOpenings/jonOpeningsData.json"
import SingleServicesV3 from "../services/SingleServicesV3";

const PortfolioV3 = () => {
    return (
        <>
            <div className="portfolio-style-three-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Featured jobs</h4>
                                <h2 className="title">Check featured openings.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {jonOpeningsData?.length !== 0 ? <h5 className="text-center text-muted">Currently we do not have any job openings.</h5> :
                            <>
                                {jonOpeningsData.map(job =>
                                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={job.id}>
                                        <SingleServicesV3 type="job" service={job} key={job.id} />
                                    </div>
                                )}
                            </>
                        }
                    </div >
                </div >
            </div >
        </>
    );
};

export default PortfolioV3;