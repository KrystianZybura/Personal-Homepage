import Header from "./homepage/Header";
import Hero from "./homepage/Header/Hero";
import SkillsSection from "./homepage/Header/SkillsSection";
import ToggleTheme from "./homepage/Header/ToggleTheme";

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
