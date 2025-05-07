import { useState } from 'react';
import about1 from "/assets/img/banner-globaltek.jpg"
import icon4 from "/assets/img/icon/4.png"
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

const ServicesDetailsContent = ({ serviceInfo }) => {
    if (!serviceInfo) return null;

    const details = [
        {
            key: 'hardware',
            title: 'Hardware Services',
            image: '/assets/img/banner/hardware.jpg',
            details: `  Lack of monitoring can compromise important data and hamper your company’s productivity. With that in mind, the Network Operation Center (NOC) tracks your environment in real time, 24 hours a day.
                        This allows us to visualize the situation of each device and service, such as servers, routers, gateways, firewall, switch and UPS, among others. With the tools offered by Globaltek, it is possible to prevent occurrences quickly and efficiently, as well as to detect and correct possible problems in the software or hardware devices.
                        Monitoring the environment can be proactive when, through capacity management, we analyze trends and propose solutions – or reactive – when identifying alarm in IT assets. The service is also responsible for resolving incidents in Data Center and infrastructure environments.`
        },
        {
            key: 'software',
            title: 'Software Services',
            image: '/assets/img/banner/software.avif',
            details: (
                <>
                    <p>Keep your business productive with proactive IT consulting that helps you grow in efficiently and effectively. Get the most out of your IT budget while getting rid of IT downtime when you make sure your IT delivers what you want and need.</p>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Software Asset Management Services
                            </h5>
                            <p>
                                Make smart decisions about software with our software asset management services. We can help you choose the right tools, analyze the software you’re already running, make sure you’re taking the best advantage of your licensing options, and reduce your overall costs.
                            </p>

                        </div>
                        <div className='col-md-6'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Software Licensing Management Solutions
                            </h5>
                            <p>
                                Streamline your workflow and provide the best customer service when you choose the right software. We consult with you to choose the best products, handle licensing tasks and issues for you, and help you implement your solutions.
                            </p>
                        </div>
                        <div className='col-md-12'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Microsoft Exchange Deployment Services
                            </h5>
                            <p>
                                Do you need Microsoft-based solutions? We’ll help you deploy Microsoft exchange deployment, handle all migration, and make sure you have what you need to implement your projects, workstations, and security.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Microsoft SharePoint Implementation Services
                            </h5>
                            <p>
                                Our end-to-end Microsoft SharePoint implementation services focus on scalability, security and performance, whether you need cloud migration assistance, upgrades, consulting, or ongoing management and monitoring. We make sure you have complete visibility into the project as well as full support.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Information Technology Asset Disposition
                            </h5>
                            <p>
                                You can’t just toss out IT assets when they become obsolete. The data that’s still recoverable on that hardware has to be protected or wiped securely, and you want to dispose of all electronics in a way that’s environmentally sustainable. We remove the risk from asset disposition, ensuring a secure chain of custody for your data and recycling your assets in a way that’s responsible and that gets you the maximum return on your investment.
                            </p>
                        </div>
                    </div>
                </>
            )
        },
        {
            key: 'cloud',
            title: 'Cloud Services',
            image: '/assets/img/banner/cloud.webp',
            details: (
                <>
                    <p>
                        Have you ever considered centralizing your business in one place? Thus, any unforeseen can be corrected with agility, without compromising its operations and its productivity.
                        <br />
                        Service Desk makes this possible. Able to receive, record and classify your requests and incidents, this service is responsible for managing the entire cycle of the incident, ensuring its resolution and keeping users informed.
                        <br />
                        Globaltek’ Service Desk offers service and technical support for your company, focusing on the demands of hardware maintenance, remote support and software distribution.
                    </p>
                    <h5 style={{ marginBottom: '10px' }}>
                        What we do:
                    </h5>
                    <ul className="list-style-three text-muted">
                        <li>
                            Receive, register and sort all requests
                        </li>
                        <li>
                            Prioritize and escalate the registry
                        </li>
                        <li>
                            Solve or route the record to solver groups
                        </li>
                        <li>
                            Keep users informed about the status and progress of requests
                        </li>
                        <li>
                            Management of incidents: analysis  of reasons for incidents and action plans to avoid them
                        </li>
                        <li>
                            Generate information and recommendations for IT service improvement
                        </li>
                        <li>
                            Contribute to problem identification
                        </li>
                    </ul>
                    <p className='mt-3'>
                        With the right IT tools and business solutions, you can complete your tasks and achieve your goals efficiently and smoothly. We find solutions to the most challenging business tech problems, setting up the technology you need to boost productivity and accelerate your performance overall. Whether you need websites, portals, business intelligence systems, e-commerce, data archiving or mobile apps, we’ll get you moving forward.
                    </p>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Mobility and End-User Management Solutions
                            </h5>
                            <p>
                                When your employees use mobile devices on the go, whether they’re using company-owned devices or their own, they inadvertently open up all kinds of security issues. Embedding mobile devices securely in your IT infrastructure is the key to fostering productivity without compromising safety. We’ll help you with the hardware as well as with establishing policies and controlling access for the utmost of protection.
                            </p>

                        </div>
                        <div className='col-md-6'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Virtualization and Cloud Solutions
                            </h5>
                            <p>
                                Moving your data into the cloud allows you easy access from wherever you are all over the world. We’ll help you boost your capacity, increase your productivity, and find the solutions to your IT concerns with virtualization and cloud solutions. Our customized solutions take into account your business size, your existing infrastructure, and your unique needs.
                            </p>
                        </div>
                        <div className='col-md-12'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Technology Assessment Services
                            </h5>
                            <p>
                                Are you spending your IT dollars in the best possible way? Our technology assessment services can help identify inefficiencies, redundancies and performance gaps to streamline your tech environment — and we’ll help you develop a plan of action to bring your IT up to speed.
                            </p>
                        </div>
                    </div>
                </>
            )
        },
        {
            key: 'globally-managed',
            title: 'Globally Managed Services',
            image: '/assets/img/banner/globally-managed.png',
            details: (
                <>
                    <p>
                        GlobalTek helps global enterprises with multiple locations in different countries to optimize procurement of IT solutions and services worldwide.
                        <ul className="list-style-three text-muted">
                            <li>
                                Own branch offices in 15 countries.
                            </li>
                            <li>
                                Global strategic partnerships.
                            </li>
                            <li>
                                International alliances with IT companies.
                            </li>
                        </ul>
                        <br />
                        Alliances with large international IT service providers enable GlobalTek to serve global customers with operations in many countries helping them to optimize procurement of IT products and solutions worldwide.
                        <br />
                        GlobalTek is a global IT solutions provider for your clients, partners, and business.
                    </p>
                    <p>
                        Managed services let you maintain peak IT operation with predictable costs that fit within your budget. When we manage all your IT services, you’re freed up to focus on growing your business with no worries about your network going down. Ask us about customized packages designed to meet your company’s unique IT needs.
                    </p>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Unified Communications and Collaboration Solutions
                            </h5>
                            <p>
                                Next-gen communications and collaboration solutions move your business into the future. Learn how you can take advantage of personal communication systems and increase internal efficiency with industry-leading collaboration tools.
                            </p>

                        </div>
                        <div className='col-md-6'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Network Infrastructure Solutions
                            </h5>
                            <p>
                                All your apps and business processes depend on a robust and reliable IT infrastructure. We can design, implement and manage your IT infrastructure across your global locations, whether you’re in need of automation, retail location modernization, or any other operational services.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <h5 style={{ marginBottom: '10px' }}>
                                Network Security Solutions
                            </h5>
                            <p>
                                If your data and network aren’t secure, your business is in danger. We provide multiple solutions to protect your networks, data center, endpoints, and cloud infrastructure against any and all attacks.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <h5 style={{ marginBottom: '10px' }}>
                                CompleteCare Managed Services
                            </h5>
                            <p>
                                Do you want to never have to think about your IT? Then CompleteCare managed services may be right for you. We minimize downtime through our comprehensive management of your IT — hardware and software, processes and operations — all for a fixed monthly fee that provides you with 24/7 support, security, and productivity.
                            </p>
                        </div>
                    </div>
                </>
            )
        },
    ]
    const { title } = serviceInfo
    const [isOpen, setOpen] = useState(false);
    const selectedDetail = details.find(item => item.key === serviceInfo);

    return (
        <>
            <div className="services-details-area default-padding">
                <div className="cotnainer">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Service Details</h4>
                                <h2 className="title">{selectedDetail.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-12 services-single-content">
                                <div className="thumb mb-50">
                                    <img src={selectedDetail.image} alt="Thumb" draggable="false" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <p>
                                    {selectedDetail.details}
                                </p>
                                <div className="process-style-one-items mt-50">
                                    <div className="choose-us-one-thumb">
                                        <div className="content">
                                            <div className="left-info">
                                                <h2 className="title">Proven Approach to Delivering Tailored IT Solutions.</h2>
                                            </div>
                                            <div className="process-style-one">
                                                <div className="process-style-one-item">
                                                    <span>01</span>
                                                    <h4>Client-Centric Collaboration</h4>
                                                    <p>
                                                        We begin by understanding your unique business needs through detailed discussions. This allows us to align our IT solutions with your specific goals and challenges from the start.
                                                    </p>
                                                </div>
                                                <div className="process-style-one-item">
                                                    <span>02</span>
                                                    <h4>Strategic Planning & Execution</h4>
                                                    <p>
                                                        Our team develops a customized, scalable roadmap tailored to your infrastructure. We ensure timely implementation with minimal disruption to your daily operations.
                                                    </p>
                                                </div>
                                                <div className="process-style-one-item">
                                                    <span>03</span>
                                                    <h4>Ongoing Support & Optimization</h4>
                                                    <p>
                                                        After deployment, we stay engaged with proactive monitoring, continuous updates, and technical support—ensuring your systems remain secure, efficient, and future-ready.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-content bg-gray default-padding">
                <div className="container">
                    <div className="about-style-one-items">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="thumb-style-one">
                                    <img src={about1} alt="Image Not Found" draggable="false" />
                                    {/* <Link onClick={() => setOpen(true)} to="#" className="popup-youtube video-play-button">
                                        <i className="fas fa-play" />
                                    </Link> */}
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <div className="content">
                                        <h2 className="title">Meet the executives driving our success.</h2>
                                        <p>
                                            Businesses operate in various industries, including technology, finance, healthcare, retail, and manufacturing, among others. They play a crucial role in the economy by providing goods, services, and employment never fruit up Pasture imagin. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse.
                                        </p>
                                    </div>
                                    <ul className="card-list">
                                        <li>
                                            <img src={icon4} alt="Image Not Found" draggable="false" />
                                            <h5>Award Winning Company</h5>
                                        </li>
                                        <li>
                                            <h2>3.8 X</h2>
                                            <h5>Economical growth </h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {serviceInfo === "hardware" &&
                <div className="services-content default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="title">What we do</h2>
                                <p>
                                    Track, record and forward alerts in the environment to the client and to the solver groups, tracking the process until resolution.
                                    <br />
                                    Control, analyze and manage the environment to ensure the best performance and use.
                                </p>
                                <div className="accordion mt-50" id="faqAccordion">
                                    <div className='row'>
                                        <div className="col-md-6 mb-3">
                                            <div className="accordion-item accordion-style-one">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Delivery Solutions
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            We offer flexible delivery options tailored to meet the logistical needs of your business. Whether it's purchasing, leasing, or rental, we ensure timely and reliable delivery of equipment with full transparency.
                                                        </p>
                                                        <ul className="list-style-three text-muted" style={{ marginTop: '-20px' }}>
                                                            <li>Purchasing</li>
                                                            <li>Leasing</li>
                                                            <li>Rental</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="accordion-item accordion-style-one">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        On-Site & Data Center Services
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            From seamless installations on-premise to advanced data center and colocation setups, we provide scalable infrastructure services that ensure performance, security, and uptime.
                                                        </p>
                                                        <ul className="list-style-two text-muted" style={{ marginTop: '-20px' }}>
                                                            <li>On-premise</li>
                                                            <li>In data centers</li>
                                                            <li>Colocation</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="accordion-item accordion-style-one">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        IT Services & Deployment
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            Our comprehensive IT services include expert guidance in product selection, deployment planning, and ongoing maintenance—helping you maximize the value of your technology investment.
                                                        </p>
                                                        <ul className="list-style-two text-muted" style={{ marginTop: '-20px' }}>
                                                            <li>Selection</li>
                                                            <li>Deployment</li>
                                                            <li>Maintenance</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="accordion-item accordion-style-one">
                                                <h2 className="accordion-header" id="headingFour">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                        Infrastructure Hardware
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            We supply and support critical infrastructure components such as servers, storage systems, racks, and chassis—designed for high availability and operational efficiency.
                                                        </p>
                                                        <ul className="list-style-two text-muted" style={{ marginTop: '-20px' }}>
                                                            <li>Selection</li>
                                                            <li>Deployment</li>
                                                            <li>Maintenance</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            {/* Printing & Document Solutions */}
                                            <div className="accordion-item accordion-style-one">
                                                <h2 className="accordion-header" id="headingFive">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        Printing & Document Solutions
                                                    </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            Our print solutions cover everything from high-performance printers and scanners to multifunction devices and consumables, ensuring smooth and cost-effective document management.
                                                        </p>
                                                        <ul className="list-style-two text-muted" style={{ marginTop: '-20px' }}>
                                                            <li>Printing</li>
                                                            <li>Printers, scanners</li>
                                                            <li>Copy machines, MFDs</li>
                                                            <li>Consumables</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            {/* IoT & Automation Systems */}
                                            <div className="accordion-item accordion-style-one">
                                                <h2 className="accordion-header" id="headingSix">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        IoT & Automation Systems
                                                    </button>
                                                </h2>
                                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            We implement IoT technologies including sensors, actuators, controllers, and gateways—enabling real-time automation, monitoring, and smarter decision-making.
                                                        </p>
                                                        <ul className="list-style-two text-muted" style={{ marginTop: '-20px' }}>
                                                            <li>loT</li>
                                                            <li>Sensors and actuators</li>
                                                            <li>Controllers</li>
                                                            <li>Gateway</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            {/* Engineering Systems */}
                                            <div className="accordion-item accordion-style-one">
                                                <h2 className="accordion-header" id="headingSeven">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                        Engineering Systems
                                                    </button>
                                                </h2>
                                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            Our engineering services include UPS systems, HVAC, data transfer networks, and modular solutions to build and maintain high-performance environments.
                                                        </p>
                                                        <ul className="list-style-two text-muted" style={{ marginTop: '-20px' }}>
                                                            <li>Engineering</li>
                                                            <li>Uninterrupted power supply</li>
                                                            <li>HVAC systems</li>
                                                            <li>Data transfer networks</li>
                                                            <li>Modular solutions</li>
                                                            <li>Engineering equipment</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            {/* End-User & Mobile Computing */}
                                            <div className="accordion-item accordion-style-one">
                                                <h2 className="accordion-header" id="headingEight">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                        End-User & Mobile Computing
                                                    </button>
                                                </h2>
                                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            We provide mobile devices, thin/zero clients, and end-user computing solutions that support mobility, security, and productivity for all your business users.
                                                        </p>
                                                        <ul className="list-style-two text-muted" style={{ marginTop: '-20px' }}>
                                                            <li>Mobile</li>
                                                            <li>Mobile devices</li>
                                                            <li>Thin and zero clients</li>
                                                            <li>End User Computing</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            {/* Imaging & Warehouse Services */}
                                            <div className="accordion-item accordion-style-one">
                                                <h2 className="accordion-header" id="headingNine">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                        Imaging & Warehouse Services
                                                    </button>
                                                </h2>
                                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            From professional imaging services to kitting and warehouse logistics, we ensure that your equipment is properly prepared, staged, and delivered to meet operational needs.
                                                        </p>
                                                        <ul className="list-style-two text-muted" style={{ marginTop: '-20px' }}>
                                                            <li>Imaging Service</li>
                                                            <li>Warehouse</li>
                                                            <li>Kitting Service</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
        </>
    );
};

export default ServicesDetailsContent;