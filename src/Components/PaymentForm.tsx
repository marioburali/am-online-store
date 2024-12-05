import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentForm() {
  const navigate = useNavigate();
  const [isValidForm, setIsValidForm] = useState(true);
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    payment: '',
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(form).includes('')) {
      setIsValidForm(false);
      return;
    }
    localStorage.clear();
    navigate('/');
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>) {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <section>
      <form onSubmit={ onSubmit }>
        <label htmlFor="fullname">
          Nome Completo
          <input
            data-testid="checkout-fullname"
            type="text"
            id="fullname"
            name="fullname"
            value={ form.fullname }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            data-testid="checkout-email"
            type="text"
            id="email"
            name="email"
            value={ form.email }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="cpf">
          CPF
          <input
            data-testid="checkout-cpf"
            type="text"
            id="cpf"
            name="cpf"
            value={ form.cpf }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="phone">
          Telefone
          <input
            data-testid="checkout-phone"
            type="text"
            id="phone"
            name="phone"
            value={ form.phone }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="cep">
          CEP
          <input
            data-testid="checkout-cep"
            type="text"
            id="cep"
            name="cep"
            value={ form.cep }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="address">
          Endereço
          <input
            data-testid="checkout-address"
            type="text"
            id="address"
            name="address"
            value={ form.address }
            onChange={ handleChange }
          />
        </label>
        <li>
          <label
            htmlFor="ticket"
          >
            <input
              data-testid="ticket-payment"
              type="radio"
              name="payment"
              value="boleto"
              id="ticket"
              onChange={ handleChange }
            />
            Boleto
          </label>
          <label
            htmlFor="visa"
          >
            <input
              data-testid="visa-payment"
              type="radio"
              name="payment"
              value="visa"
              id="visa"
              onChange={ handleChange }
            />
            Visa
          </label>
          <label
            htmlFor="mastercard"
          >
            <input
              data-testid="master-payment"
              type="radio"
              name="payment"
              value="mastercard"
              id="mastercard"
              onChange={ handleChange }
            />
            MasterCard
          </label>
          <label
            htmlFor="elo"
          >
            <input
              data-testid="elo-payment"
              type="radio"
              name="payment"
              value="elo"
              id="elo"
              onChange={ handleChange }
            />
            Elo
          </label>
        </li>
        <button type="submit" data-testid="checkout-btn">Confirmar</button>
      </form>
      {!isValidForm && (<p data-testid="error-msg">Campos inválidos</p>)}
    </section>
  );
}

export default PaymentForm;
