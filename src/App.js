import React, { useState } from 'react';
import './App.css';
import logoImage from './logo.svg'; // Importe a imagem e ajuste o caminho conforme necessário

const App = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Limpa o erro ao digitar no campo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(); // Valida o formulário antes de prosseguir
    if (Object.keys(validationErrors).length === 0) {
      // Se não houver erros de validação, prossiga com o envio do formulário
      console.log(formData);
      // ... código adicional para enviar os dados do formulário
    } else {
      // Se houver erros de validação, atualize o estado de erros
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validação do campo Nome Completo
    if (formData.fullName.trim() === '') {
      errors.fullName = 'Por favor, informe o nome completo';
    }

    // Validação do campo Email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Por favor, informe um email válido';
    }

    // Validação do campo Senha
    if (formData.password.length < 6) {
      errors.password = 'A senha deve ter pelo menos 6 caracteres';
    }

    // Validação do campo Confirmação de Senha
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'As senhas não coincidem';
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={logoImage} alt="Logo" className="image" />
      </div>
      <div className="form-container">
        <h1>Cadastro de Cliente</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nome Completo: *
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </label>
          <br />
          <label>
            Email: *
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
            Senha: *
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </label>
          <br />
          <label>
            Confirmação de Senha: *
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </label>
          <div className='botao-cadastrar'>
            <br />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default App;
