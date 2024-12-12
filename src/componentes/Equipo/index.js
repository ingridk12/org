import "./Equipo.css";
const Equipo = (props) => {
  return (
    <section className="equipo" style={{ backgroundColor: "#000" }}>
      <h3>{props.datos.titulo}</h3>
      <div className="colaboradores"></div>
    </section>
  );
};
export default Equipo;
