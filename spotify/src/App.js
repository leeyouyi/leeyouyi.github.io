import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg'
import './App.css'
import Home from '@/views/Home'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
