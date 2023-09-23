import Section from "../common/Section";
import Footer from "./Footer";
import Header from "./Header";
import Portfolio from "./Portfolio";
import { skills } from "./skills";
import { skillsToLearn } from "./skillsToLearn";

const PersonalHomepage = () => (
  <>
    <Header name={"Krystian Żybura"} heading={"This is"} />
    <Section title={"My skillset includes 🛠"} body={skills} />
    <Section title={"What I want to learn next 🚀"} body={skillsToLearn} />
    <Portfolio title={"Portfolio"} subtitle={"My recent projects"} />
    <Footer heading={"Let's talk!"} />
  </>
);

export default PersonalHomepage;
