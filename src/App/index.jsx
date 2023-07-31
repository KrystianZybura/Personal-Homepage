import Header from "./Header";
import About from "./Header/About";
import ToggleTheme from "./Header/ToggleTheme";

function App() {
  return (
    <>
      <Header
        about={<About name={"Krystian Żybura"} />}
        toggleTheme={<ToggleTheme />}
      />
    </>
  );
}

export default App;
