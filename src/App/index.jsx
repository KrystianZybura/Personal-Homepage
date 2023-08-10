import FutureDevelopment from "./homepage/FutureDevelopment";
import Header from "./homepage/Header";
import Hero from "./homepage/Header/Hero";
import ToggleTheme from "./homepage/Header/ToggleTheme";
import Portfolio from "./homepage/Portfolio";
import Skillset from "./homepage/Skillset";

function App() {
  return (
    <>
      <Header
        hero={<Hero name={"Krystian Żybura"} />}
        toggleTheme={<ToggleTheme />}
      />
      <Skillset />
      <FutureDevelopment />
      <Portfolio />
    </>
  );
}

export default App;
