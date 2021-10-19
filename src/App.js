import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import HeroList from 'pages/HeroList'
import HeroDetails from 'pages/HeroDetails'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={HeroList} />
          <Route exact path="/hero/:id" component={HeroDetails} />
        </Switch>
        <ToastContainer />
      </ThemeProvider>
    </Router>
  )
}

export default App
