import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useErrors from '../../../../hooks/useErrors'

import { corebiz } from '../../../../services/api';

import { isEmailValid } from '../../../../utils/isEmailValid';

import FormGroup from './components/FormGroup';
import Input from './components/Input';

import { NewsContainer, NewsContent, Form, Success } from './styled';

export default function News() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();


  const isFormValid = (name && email && errors.length === 0)

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Preencha com seu nome completo' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Preencha com um e-mail válido' })
    } else {
      removeError('email');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSuccess(true);

    corebiz.post('api/v1/newsletter', {
      "email": email,
      "name": name
    })

    toast.info("🎉 Enviado com sucesso!");
  }

  if (success) {
    return (
      <Success>
        <h3>Seu e-mail foi cadastrado com sucesso!</h3>
        <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
        <button onClick={() => setSuccess(false)}>
          Cadastrar novo e-mail
        </button>
        <ToastContainer />
      </Success>
    )
  }

  return (
    <NewsContainer>
      <NewsContent>
        <h1>Participe de nossas news com promoções e novidades!</h1>

        <Form onSubmit={handleSubmit}>
          <FormGroup error={getErrorMessageByFieldName('name')}>
            <Input
              type='text'
              label='Digite seu nome'
              onChange={handleNameChange}
              value={name}
              error={getErrorMessageByFieldName('name')}
            />
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('email')}>
            <Input
              type='text'
              label='Digite seu email'
              onChange={handleEmailChange}
              value={email}
              error={getErrorMessageByFieldName('email')}
            />
          </FormGroup>

          <button type='submit' disabled={!isFormValid}>Eu quero!</button>
        </Form>
      </NewsContent>
    </NewsContainer>
  );
}
