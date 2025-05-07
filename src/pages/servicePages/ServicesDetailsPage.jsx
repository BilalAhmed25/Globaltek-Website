import LayoutV5 from '@/components/layouts/LayoutV5';
import ServicesDetailsContent from '@/components/services/ServicesDetailsContent';
import { useParams } from 'react-router-dom';
import ServicesV2Data from "@/assets/jsonData/services/ServicesV2Data.json"

const ServicesDetailsPage = ({ serviceType }) => {

    const { id } = useParams()
    const data = ServicesV2Data.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutV5>
                <ServicesDetailsContent serviceInfo={serviceType} />
            </LayoutV5>
        </>
    );
};

export default ServicesDetailsPage;