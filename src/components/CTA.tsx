import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import MyStoreButton from "@/components/ui/landing_page/store_button";
import appMockup from "@/assets/app_mockup.png";
import DownloadSection from "@/components/ui/landing_page/download_section"; 

const CTA = () => {
  return (
    <section className="section-padding bg-background ">
   <DownloadSection></DownloadSection>  
    </section>
  );
};

export default CTA;
