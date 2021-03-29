// import logo from './logo.svg';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.scss';
import Home from './views/Home'
import Sign_in from './views/Sign_in'
import Registered from './views/Registered'
import React,{ useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation()
  const lan = localStorage.getItem("locale") || 'cn'
  
  useEffect(()=>{
      i18n.changeLanguage(lan)
  },[lan])
  return (
    <HashRouter>
    <div className="App">
        <Switch>
          <Route exact path='/' component={Sign_in} />
          <Route path='/Sign_in' component={Sign_in} />
          <Route path='/Registered' component={Registered} />
          <Route path='/Home' component={Home} />
        </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
