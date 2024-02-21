import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import WeatherMain from './components/organisms/WeatherMain'
import ForecastMain from './components/organisms/ForecastMain'
import NotFound from './components/organisms/NotFound'
import HomeMain from './components/pages/HomeMain'
import ChooseCity from './components/pages/ChooseCity';
import GlobalWeatherMain from './components/pages/GlobalWeatherMain';


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomeMain />}/>
              <Route path='/geo/1.0/direct/:query' element={<ChooseCity />}/>
              <Route path='/data/2.5/weather/:city' element={<GlobalWeatherMain />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
