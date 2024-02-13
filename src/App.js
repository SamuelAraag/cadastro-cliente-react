import React, { useState } from "react";
import "./App.css";
import ImagemBackground from "./assets/background-otimized.jpg";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (formData.fullName.trim() === "") {
      errors.fullName = "Por favor, informe o nome completo";
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Por favor, informe um email válido";
    }

    if (formData.password.length < 6) {
      errors.password = "A senha deve ter pelo menos 6 caracteres";
    }

    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "As senhas não coincidem";
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={ImagemBackground} alt="Logo" className="image" />
      </div>
      <div className="form-container">
        <h1 className="titulo-cadastro">Cadastro de Cliente</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nome Completo: <span>*</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <span className="error">{errors.fullName}</span>
            )}
          </label>
          <br />
          <label>
            Email: <span>*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <br />
          <label>
            Senha: <span>*</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </label>
          <br />
          <label>
            Confirmação de Senha: <span>*</span>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </label>
          <div className="botao-cadastrar">
            <br />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
