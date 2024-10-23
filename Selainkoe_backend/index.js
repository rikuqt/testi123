const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
// const id = Number(request.params.id)

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
    }
]


app.get('/api/gasstations', (request, response) => {
    response.json(GAS_STATIONS)
  })
  
  app.delete('/api/gasstations/:id', (request, response) => {
    const id = Number(request.params.id)
      GAS_STATIONS = GAS_STATIONS.filter(station => station.id !== id)
    
      response.status(204).end()
    })
  
    app.post('/api/gasstations', (request, response) => {
      const maxId = GAS_STATIONS.length > 0
        ? Math.max(...GAS_STATIONS.map(n => Number(n.id)))         // <--- jos tämä ei toimi (POST)
        : 0                                                        // korvaa se alla kommentissa olevalla koodilla
    
      const station = request.body                                
      station.id = String(maxId + 1)
    
      GAS_STATIONS = GAS_STATIONS.concat(station)
    
      response.json(station)
    })

/*
app.post('/api/gasstations', (request, response) => {
    const body = request.body
    console.log(body)
    if (!body.addr || !body.corp || !body.price) {
      return response.status(400).json({
        error: 'missing inputs'
      })
    }
 
    const newStation = {
      id: generateId(),
      addr: body.addr,
      corp: body.corp,
      price: body.price,
    }
 
    GAS_STATIONS = GAS_STATIONS.concat(newStation)
    response.json(newStation)
  })
 
  const generateId = () => {
    const maxId = GAS_STATIONS.length > 0
      ? Math.max(...GAS_STATIONS.map(n => Number(n.id)))
      : 0
    return String(maxId + 1)
  }
*/
  
  app.get('/api/gasstations/:id', (request, response) => {
    const id = Number(request.params.id)
      const station = GAS_STATIONS.find(station => station.id === id)
      
    
      if (station) {
        response.json(station)
      } else {
        response.status(404).end()
      }
    })
  
    
    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
