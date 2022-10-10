import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageTableroA from "./Pages/PageTableroA";
import PageTableroB from "./Pages/PageTableroB";
import ElNavBar from "./Componets/ElNavBar";
import Home from "./Pages/Home";
import ConfBarcos from "./Pages/ConfBarcos";
function App() {
  return (
    <BrowserRouter>
      <ElNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PrimerJugador" element={<ConfBarcos />} />
        <Route path="/SegundoJugador" element={<ConfBarcos />} />
        <Route path="/JugadorA" element={<PageTableroA />} />
        <Route path="/JugadorB" element={<PageTableroB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
