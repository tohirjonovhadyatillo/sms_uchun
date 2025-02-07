import SEO from "../components/SEO";
import LazyImage from "../components/LazyImage";

const Home = () => {
  return (
    <div>
      <SEO
        title="SMS Prank | SMS Yuborish | SMS Bomber"
        description="Eng zo'r SMS prank va SMS yuborish xizmati. Bepul SMS bomber xizmatidan foydalaning."
        keywords="sms prank, sms yuborish, sms bomber, sms sender, bepul sms"
        url="https://yourwebsite.com"
      />
      <h1>SMS Prank Xizmati</h1>
      <LazyImage src="/images/prank.webp" alt="SMS Prank Xizmati" />
    </div>
  );
};

export default Home;
