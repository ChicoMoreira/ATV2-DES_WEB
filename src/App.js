import "./styles.css";
import Arena from "./Components/Questao01/Arena";
import Hero from "./Components/Questao01/Hero";
import Enemy from "./Components/Questao01/Enemy";
import World from "./Components/Questao01/World";

export default function App() {
  return (
    <div className="App">
      <World>
        <Arena arena="Chile">
          <Hero name="Jorge poderoso" />
          <Enemy name="Dudão malvado" />
        </Arena>
        <br />
        <br />
        <Arena arena="Brasil">
          <Hero name="Super Sandro" />
          <Enemy name="Regis Luthor" />
        </Arena>
        <br />
        <br />
        <Arena arena="Uruguay">
          <Hero name="Pedro 10" />
          <Enemy name="Miguel Gas" />
        </Arena>
      </World>
    </div>
  );
}

/*
export default function App() {
  return (
    <div className="App">
      <Arena arena="casa do paraguai">
        <Hero name="Jorge" />
        <Enemy name="malvadao" />
      </Arena>
    </div>
  );
}
*/
