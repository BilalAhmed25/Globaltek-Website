import PartnersAbout from '@/components/about/PartnersAbout';
import AwardV1 from '@/components/award/AwardV1';
import FactV1 from '@/components/fact/FactV1';
import LayoutV5 from '@/components/layouts/LayoutV5';
import TeamV2 from '@/components/team/TeamV2';
import TestimonialV2 from '@/components/testimonial/TestimonialV2';
import WhyChooseV1 from '@/components/whyChoose/WhyChooseV1';
import PartnerV1 from '@/components/partner/PartnerV1';
import PartnerV2 from '@/components/partner/PartnerV2';
const AboutUsPage = () => {
    return (
        <>
            <LayoutV5>
                <PartnerV1 />
                <PartnerV2 />
                <PartnersAbout sectionClass="shape-less default-padding" />
                <WhyChooseV1 />
                <FactV1 sectionClass="bg-gray" />
                <AwardV1 />
                <TestimonialV2 sectionClass="shape-3" />
            </LayoutV5>
        </>
    );
};

export default AboutUsPage;