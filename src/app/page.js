import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "@/components/ui/Banner";
import Information from "@/components/ui/Information/Information";
import Notice from "@/components/ui/Notice";

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Information/>
      <Notice/>
    </div>
  );
};

export default HomePage;