import React, { useContext, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import Logo from './components/Logo'

// import { Home } from './pages/Home'
// import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
// import { User } from './pages/user'
// import { NotRegisteredUser } from './pages/NotRegisteredUser'
// import { NotFound } from './pages/NotFound'

import { NavBar } from './components/NavBar'

import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Home = React.lazy(() => import('./pages/Home'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div></div>}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
