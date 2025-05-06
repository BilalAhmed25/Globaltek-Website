import LayoutV5 from '@/components/layouts/LayoutV5';
import PortfolioV3 from '@/components/jobOpenings/PortfolioV3';
import CareersContent from '@/components/careers/CareersContent';

const ProjectPage = () => {
    return (
        <>
            <LayoutV5>
                <CareersContent/>
                <PortfolioV3 />
            </LayoutV5>
        </>
    );
};

export default ProjectPage;