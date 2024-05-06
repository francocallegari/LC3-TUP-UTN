import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setEnteredUsername(value);
    if (value.toLowerCase().includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra 'o'!");
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (enteredUsername === "" || enteredUsername.toLowerCase().includes("o")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto", marginTop: "100px" }}>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="-name">
          <Form.Label className="text-dark">Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre de usuario"
            onChange={handleUsernameChange}
            value={enteredUsername}
          />
        </Form.Group>
        <br />
        <Button variant="success" type="submit">
          Registrarse
        </Button>
      </Form>
      <br />
      <p>{enteredUsername}</p>
    </div>
  );
};

export default Login;
