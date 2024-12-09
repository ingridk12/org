import "./ListaOpciones.css";
const ListaOpciones = () => {
  //Metodo map -> arreglo.map ((equipos, index) => {
  // return <option></option>
  //})
  const equipos = [
    "Programacion",
    "Front End",
    "Data Science",
    "Devops",
    "Ux y Diseño",
    "Movil",
    "Invonacion y gestion",
  ];

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select>
        {equipos.map((equipos, index) => {
          return <option key={index}>{equipos}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;
