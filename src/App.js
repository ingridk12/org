import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  return (
    <div>
      <Header />
      <Formulario />
      <MiOrg />
    </div>
  );
}

export default App;
