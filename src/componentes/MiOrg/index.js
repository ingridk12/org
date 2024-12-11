import { useState } from "react";
import "./MiOrg.css";
const MiOrg = () => {
  const [Mostrar, actualizarMostrar] = useState("true");
  const manejarClick = () => {
    console.log("Mostrar/ocutar elemento", !Mostrar);
    actualizarMostrar(!Mostrar);
  };

  return (
    <secction className="orgSeccion">
      <h3 className="title">Mi Organización </h3>
      <img src="/img/add.png" alt="add" onClick={manejarClick} />
    </secction>
  );
};
export default MiOrg;
