import Section from "../common/Section";
import { skillsToLearn } from "./Data/skillsToLearn";
import { skillset } from "./Data/skillset";
import Footer from "./Footer";
import { Header } from "./Header";
import Hero from "./Hero";
import { Layout } from "./Layout";
import Portfolio from "./Portfolio";
import SwitchTheme from "./SwitchTheme";

const PersonalHomepage = () => (
  <Layout>
    <Header>
      <Hero name="Krystian Żybura" heading="This is" />
      <SwitchTheme />
    </Header>
    <Section title="My skillset includes 🛠" body={skillset} />
    <Section title="What I want to learn next 🚀" body={skillsToLearn} />
    <Portfolio title="Portfolio" subtitle="My recent projects" />
    <Footer heading="Let's talk!" />
  </Layout>
);

export default PersonalHomepage;
