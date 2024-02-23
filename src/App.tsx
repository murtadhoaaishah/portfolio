import "./App.css";
import Aside from "./molecule/Aside";

function App() {
  return (
    <div className="flex flex-row">
      <Aside />
      <section className="w-full">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </section>
    </div>
  );
}

export default App;
