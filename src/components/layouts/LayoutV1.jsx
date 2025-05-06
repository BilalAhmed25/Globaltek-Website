import HeaderV1 from '../header/HeaderV1';
import Footer from '../footer/FooterV2';

const LayoutV1 = ({ children }) => {
    return (
        <>
            <HeaderV1 />
            {children}
            <Footer />
        </>
    );
};

export default LayoutV1;