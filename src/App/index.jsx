import Header from "./homepage/Header";
import Hero from "./homepage/Header/Hero";
import ToggleTheme from "./homepage/Header/ToggleTheme";
import SkillsSection from "./homepage/SkillsSection";

function App() {
  return (
    <>
      <Header
        hero={<Hero name={"Krystian Żybura"} />}
        toggleTheme={<ToggleTheme />}
      />
      <SkillsSection />
    </>
  );
}

export default App;
