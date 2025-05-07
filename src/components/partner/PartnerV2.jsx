import Animation from '../animation/Animation';
import adobe from "/assets/img/brand/adobe.png";
import autodesk from "/assets/img/brand/autodesk.png";
import brotherAtYourSide from "/assets/img/brand/brother-at-your-side.png";
import commvault from "/assets/img/brand/commvault.jpg";
import c2g from "/assets/img/brand/c2g.jpg";
import cisco from "/assets/img/brand/cisco.jpg";
import epson from "/assets/img/brand/epson.jpg";
import fortinet from "/assets/img/brand/fortinet.jpg";
import hpe from "/assets/img/brand/hpe.jpg";
import ibm from "/assets/img/brand/ibm.jpg";
import intel from "/assets/img/brand/intel.jpg";
import jabra from "/assets/img/brand/jabra.jpg";
import kaspersky from "/assets/img/brand/kaspersky.jpg";
import lexmark from "/assets/img/brand/lexmark.jpg";
import lg from "/assets/img/brand/lg.jpg";
import logitech from "/assets/img/brand/logitech.jpg";
import malwarebytes from "/assets/img/brand/malwarebytes.jpg";
import mcafee from "/assets/img/brand/mcafee.jpg";
import microsoft from "/assets/img/brand/microsoft.jpg";
import nec from "/assets/img/brand/nec.jpg";
import netapp from "/assets/img/brand/netapp.jpg";
import nutanix from "/assets/img/brand/nutanix.jpg";
import oracle from "/assets/img/brand/oracle.jpg";
import plantronics from "/assets/img/brand/plantronics.jpg";
import polycom from "/assets/img/brand/polycom.jpg";
import sap from "/assets/img/brand/sap.jpg";
import samsung from "/assets/img/brand/samsung.jpg";
import sophos from "/assets/img/brand/sophos.jpg";
import symantec from "/assets/img/brand/symantec.jpg";
import targus from "/assets/img/brand/targus.jpg";
import trendmicro from "/assets/img/brand/trendmicro.jpg";
import veeam from "/assets/img/brand/veeam.jpg";
import veritas from "/assets/img/brand/veritas.jpg";
import vmware from "/assets/img/brand/vmware.jpg";
import zebra from "/assets/img/brand/zebra.jpg";


const brandLogos = [
    { src: adobe, alt: "Adobe" },
    { src: autodesk, alt: "Autodesk" },
    { src: brotherAtYourSide, alt: "Brother At Your Side" },
    { src: commvault, alt: "Commvault" },
    { src: c2g, alt: "C2G" },
    { src: cisco, alt: "Cisco" },
    { src: epson, alt: "Epson" },
    { src: fortinet, alt: "Fortinet" },
    { src: hpe, alt: "HPE" },
    { src: ibm, alt: "IBM" },
    { src: intel, alt: "Intel" },
    { src: jabra, alt: "Jabra" },
    { src: kaspersky, alt: "Kaspersky" },
    { src: lexmark, alt: "Lexmark" },
    { src: lg, alt: "LG" },
    { src: logitech, alt: "Logitech" },
    { src: malwarebytes, alt: "Malwarebytes" },
    { src: mcafee, alt: "McAfee" },
    { src: microsoft, alt: "Microsoft" },
    { src: nec, alt: "NEC" },
    { src: netapp, alt: "NetApp" },
    { src: nutanix, alt: "Nutanix" },
    { src: oracle, alt: "Oracle" },
    { src: plantronics, alt: "Plantronics" },
    { src: polycom, alt: "Polycom" },
    { src: sap, alt: "SAP" },
    { src: samsung, alt: "Samsung" },
    { src: sophos, alt: "Sophos" },
    { src: symantec, alt: "Symantec" },
    { src: targus, alt: "Targus" },
    { src: trendmicro, alt: "Trend Micro" },
    { src: veeam, alt: "Veeam" },
    { src: veritas, alt: "Veritas" },
    { src: vmware, alt: "VMware" },
    { src: zebra, alt: "Zebra" },
];

const PartnerV2 = () => {
    return (
        <>
            <div className="partner-style-two-area default-padding bg-light text-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 partner-style-one">
                            <div className="partner-style-one-item bg-theme text-light" style={{ backgroundImage: 'url(/assets/img/shape/22.png)' }}>
                                <h4 className="sub-title">Our Partners</h4>
                                <h2 className="title">Worked with <br /> Largest Brands.</h2>
                            </div>
                        </div>

                        {brandLogos.map((brand, index) => (
                            <Animation
                                key={index}
                                className="animate__animated animate__fadeInLeft"
                                delay={`${100 + index * 50}ms`}
                            >
                                <div className="col-lg-3 col-md-6 partner-style-one">
                                    <div className="partner-style-one-item">
                                        <img className='partner-logo' src={brand.src} alt={brand.alt || "Image Not Found"} draggable="false" />
                                    </div>
                                </div>
                            </Animation>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                .partner-style-one-item{
                    border:1px solid #2c3947;
                    background: white;
                }
                .partner-logo{
                    min-width: 225px;
                    max-width: 225px !important;
                    min-height: 150px;
                    max-height: 225px;
                    object-fit: contain;
                }
                @media (max-width: 768px) {
                    .partner-logo {
                        min-width: 180px;
                        margin-left: -17px;
                    }
                }
            `}</style>
        </>
    );
};

export default PartnerV2;