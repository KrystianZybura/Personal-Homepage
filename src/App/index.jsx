import Header from "./homepage/Header";
import Hero from "./homepage/Header/Hero";
import ToggleTheme from "./homepage/Header/ToggleTheme";

function App() {
  return (
    <>
      <Header
        hero={<Hero name={"Krystian Żybura"} />}
        toggleTheme={<ToggleTheme />}
      />
    </>
  );
}

export default App;
