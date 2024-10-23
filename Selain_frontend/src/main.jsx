import ReactDOM from 'react-dom/client'

import React from 'react'
import App from './App'

const GAS_STATIONS = [
  {
      id: 1,
      addr: "Ruukintie 177, 60200 Seinäjoki, Finland",
      corp: "ABC",
      price : 2.106
  },
  {
      id: 2,
      addr: "Hyllykalliontie 1, 60510 Seinäjoki, Finland",
      corp: "St1",
      price: 2.149
  },
  {
      id: 3,
      addr: "Vapaudentie 73, 60100 Seinäjoki, Finland",
      corp: "Neste",
      price: 2.119
  },    
  {
      id: 4,
      addr: "Valtionkatu 7, 60100 Seinäjoki, Finland",
      corp: "Shell",
      price: 2.121
  },
  {
      id: 5,
      addr: "Kasperinviita 15, 60150 Seinäjoki, Finland",
      corp: "Neste",
      price: 2.114
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App stations={GAS_STATIONS}/>)