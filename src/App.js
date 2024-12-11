import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  //Ternario -->condicion ? seMuestra - noSeMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };
  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <div></div>}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo equipo={"Programación"} />
      <Equipo equipo={"Front End"} />
      <Equipo equipo={"Data Science"} />
      <Equipo equipo={"Devops"} />
      <Equipo equipo={"UX y Diseño"} />
      <Equipo equipo={"Móvil"} />
      <Equipo equipo={"Innovación y  Gestión"} />
    </div>
  );
}

export default App;
