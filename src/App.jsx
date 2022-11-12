import { Title } from "./components/Title";
import { Bio } from "./components/Bio";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Bio />
      <Title text="Meus Assuntos Favoritos" />
      <Cards />
      <Footer message="Feito com ♡ por Lis. E todos os direitos são reservados." />
    </div>
  );
}

export default App;
