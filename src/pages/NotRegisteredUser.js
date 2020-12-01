import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Layout } from '../components/Layout'

export default () => {
  const { activateAuth } = useContext(Context)

  return (
    <Layout title='Log In or SignUp'>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }
            const errorMsg = error && 'Somethings was wrong!!!'

            return <UserForm
              disable={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title='Sign Up'
              ActionText='Sign Up' />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'The credentials not match!!!'
            return <UserForm
              disable={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title='Log In'
              ActionText='Log In' />
          }
        }
      </LoginMutation>
    </Layout>
  )
}
