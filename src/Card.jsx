import "./Card.css";

const Card = ({data}) => {

  if (!data) {
    return null;
  }

  const { nombre, genero, email } = data;
  return (
    <>
      <div className="card-container">
        <h2>Tu banda Favorita</h2>
        <p>Nombre Banda: {nombre}</p>
        <p>Genero: {genero} </p>
        <p>Email: {email} </p>
      </div>
    </>
  );
};

export default Card;
