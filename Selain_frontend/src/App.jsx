import { useState, useEffect } from 'react'
import axios from "axios"

const Total = ({ hinta }) => {
  return (
    <div>
      <p>Keskiarvo on bensalla: {hinta}</p>
    </div>
  )
}

const Station = ({ station }) => {
  return (
    <li>{station.addr} {station.corp} {station.price}</li>
  )
}


 


const App = (props) => {
  const [bensat, setBensat] = useState([])


  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/api/gasstations')
      .then(response => {
        console.log('promise fulfilled')
        setBensat(response.data)
      })
  }
  
  useEffect(hook, [])
  console.log(bensat)

  


  const {stations} = props

  var arr = Object.values(bensat)   // kun laittaa bensat muuttujan tähän niin se toimii kerran ja näyttää oikean tuloksen mutta sivun refreshin jälkeen ei toimi               
  var sum = (prev, cur) => ({price: prev.price + cur.price})
  var avg = arr.reduce(sum).price / arr.length
  console.log(avg)
 

  return (
    <div>
      <h1>Stations</h1>
       <ul>
        {bensat.map(station =>
          <Station key={station.id} station={station} />
        )}
      </ul>
      <Total hinta={avg}/>
    </div>
  )
}

export default App