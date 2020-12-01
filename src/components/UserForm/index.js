import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, ActionText, error, disable }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disable}>
        <Title>{title}</Title>
        <Input placeholder='Email' {...email} disabled={disable} />
        <Input placeholder='Password' type='password' {...password} disabled={disable} />
        <SubmitButton disabled={disable}>{ActionText}</SubmitButton>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  )
}
