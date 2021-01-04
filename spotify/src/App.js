// import { BrowserRouter } from 'react-router-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg'
import './App.scss'
import Home from '@/views/Home/Home'
import PopularChinese from '@/views/PopularChinese'
import JapanAndSouthKorea from '@/views/JapanAndSouthKorea'
import WesternMusic from '@/views/WesternMusic'
import Podcast from '@/views/Podcast'
import Login from '@/components/Login'
import { useSelector } from 'react-redux'

function App () {
  const isMask = useSelector(state => state.maskReducer.mask)

  return (
    <HashRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/PopularChinese' component={PopularChinese} />
          <Route path='/JapanAndSouthKorea' component={JapanAndSouthKorea} />
          <Route path='/WesternMusic' component={WesternMusic} />
          <Route path='/Podcast' component={Podcast} />
        </Switch>
        {isMask && <Login />}
      </div>
    </HashRouter>
  )
}

export default App
