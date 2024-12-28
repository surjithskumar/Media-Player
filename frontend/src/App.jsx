
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import WatchHistory from './Pages/WatchHistory'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <> 

    <Header/>

      <Routes>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>

      </Routes>

      <Footer/>

    </>
  )
}

export default App
