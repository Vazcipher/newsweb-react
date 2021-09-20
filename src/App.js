import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sports from './Components/Sports'
import Entertainment from './Components/Entertainment'
import Technology from './Components/Technology'
import Health from './Components/Health'
import Science from './Components/Science'
import Business from './Components/Business'

export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sports">
          <Sports />
        </Route>
        <Route path="/entertainment">
          <Entertainment/>
        </Route>
        <Route path="/technology">
          <Technology/>          
        </Route>
        <Route path="/health">
          <Health/>          
        </Route>
        <Route path="/science">
          <Science/>         
        </Route>
        <Route path="/business">
          <Business/>         
        </Route>
      </Switch>

    </Router>
  )
}
