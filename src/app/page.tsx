import CompanyLogos from "@/components/CompanyLogos";
import ContactUs from "@/components/ContactUs";
import GetStartedSection from "@/components/GetStartedSection";
import OurValue from "@/components/OurValue";
import PropertySlider from "@/components/PropertySlider";

const page = () => {
  return (
    <div className="md:px-20 px-1">
      <CompanyLogos />
      <PropertySlider />
      <OurValue />
      <ContactUs />
      <GetStartedSection />
    </div>
  );
};

export default page;
