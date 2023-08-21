import Footer from "./core/Footer";
import FutureDevelopment from "./core/FutureDevelopment";
import Header from "./core/Header";
import Hero from "./core/Header/Hero";
import ToggleTheme from "./core/Header/ToggleTheme";
import Portfolio from "./core/Portfolio";
import Skillset from "./core/Skillset";

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
      <Footer />
    </>
  );
}

export default App;
