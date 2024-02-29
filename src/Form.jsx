import { useState } from "react";
import './Form.css'
import Card from "./Card";


const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState("");
  const [err, setErr] = useState(false);
  const [show, setShow] = useState(false);
  const [formData , setFormData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim().length >= 3 &&
      genero.length >= 6 &&
      validacionEmail(email)
    ) {
      setFormData({nombre , email , genero})
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
    
  };

  const validacionEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="form-container">
     <h1>Registra tu banda favorita</h1>
      {show ? null :
        <form onSubmit={handleSubmit}>
          <label>Nombre del grupo musical</label>
          <input
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          ></input>
          <label>Genero</label>
          <input
            type="text"
            onChange={(e) => setGenero(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button>Enviar</button>
        </form>
      }
      {show ?
      <>
        <Card data={formData}/>
      </>
      : <h4>Coloque los datos para enviar el formulario</h4>
      }
      {err ? (
        <p className="err-form">Por favor chequea que la información sea correcta</p>
      ) : null}
    </div>
  );
};

export default Form;


