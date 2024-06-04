import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "@/components/ui/Banner";
import Information from "@/components/ui/Information/Information";
import Notice from "@/components/ui/Notice";
import Application from "@/components/ui/Application/Application";
import ApplicationVerification from "@/components/ui/Application/ApplicationVerification";
import ApplicationVerified from "@/components/ui/Application/ApplicationVerified";
import UPMemberList from "@/components/ui/UPMembarList";

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Information/>
      <Notice/>
      <Application/>
      <ApplicationVerification/>
      <ApplicationVerified/>
      <UPMemberList/>
    </div>
  );
};

export default HomePage;