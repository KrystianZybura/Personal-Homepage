import Header from "./Header";
import About from "./Header/About";

function App() {
  return (
    <>
      <Header about={<About name={"Krystian Żybura"} />} />
    </>
  );
}

export default App;
