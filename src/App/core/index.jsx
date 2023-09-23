import Section from "../common/Section";
import Footer from "./Footer";
import Header from "./Header";
import Portfolio from "./Portfolio";
import { skills } from "./skills";
import { skillsToLearn } from "./skillsToLearn";

const PersonalHomepage = () => (
  <>
    <Header />
    <Section title={"My skillset includes 🛠"} body={skills} />
    <Section title={"What I want to learn next 🚀"} body={skillsToLearn} />
    <Portfolio />
    <Footer />
  </>
);

export default PersonalHomepage;
