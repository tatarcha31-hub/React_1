import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Card from "./components/comp_1/comp_1"
import GetName from "./components/comp_2/comp_2"
import Props from "./components/comp_3/comp_3"
import Timer from "./components/comp_4/comp_4"

function App() {
  return <div>
    <Card />
    <GetName />
    <Props name="Ildar" />
    <Timer />
  </div>
}
export default App;


