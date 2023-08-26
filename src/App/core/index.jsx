import Footer from "./Footer";
import FutureDevelopment from "./FutureDevelopment";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Skillset from "./Skillset";

const PersonalHomepage = ({ toggleDark }) => (
  <>
    <Header toggleDark={toggleDark} />
    <Skillset />
    <FutureDevelopment />
    <Portfolio />
    <Footer />
  </>
);

export default PersonalHomepage;
