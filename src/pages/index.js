import IndexNavbar from "../../components/IndexNavbar";
import IndexCarousel from "../../components/IndexCarousel";
import IndexIntro from "../../components/IndexIntro";
import IndexBest from "../../components/IndexBest";
import IndexHospital from "../../components/IndexHospital";
import IndexNotic from "../../components/IndexNotice";
import IndexFooter from "../../components/IndexFooter";
import IndexContact from "../../components/IndexContact";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <IndexNavbar />
      <IndexCarousel />
      <IndexIntro />
      <IndexHospital />
      <IndexBest />
      <IndexNotic />
      <IndexContact />
      <IndexFooter />
    </div>
  );
};

export default Index;
