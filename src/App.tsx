import "./App.css";
import Aside from "./components/Aside";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-row">
      <Aside />
      <section className="w-full">
        <Hero />
      </section>
    </div>
  );
}

export default App;
