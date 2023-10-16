import { useState } from 'react'
import './App.css'
import ConsumptionInput from './ConsumptionInput/ConsumptionInput'
import Header from './Header/Header'

function App() {
  const kilometers = 148800

  const [car, setCar] = useState({
    drivenKM: 'N/A',
    consumption100: 'N/A',
    consumptionMoney: 'N/A',
    consumption10: 'N/A',
    consumption10Money: 'N/A',
    literToKM: 'N/A',
    priceForLiter: 'N/A'
  })

function update () {
  let drivenKM = document.getElementById('kmInput').value - kilometers
  let refilledFuel = document.getElementById('fuelInput').value
  let paidForFuel = document.getElementById('moneyInput').value

  setCar(
    {
      drivenKM: drivenKM,
      consumption100: ((refilledFuel/drivenKM) * 100).toFixed(2),
      consumptionMoney: parseFloat((paidForFuel / refilledFuel).toFixed(2) * ((refilledFuel/drivenKM) * 100)).toFixed(2),
      consumption10: ((refilledFuel/drivenKM) * 10).toFixed(2),
      consumption10Money: parseFloat((paidForFuel / refilledFuel).toFixed(2) * ((refilledFuel/drivenKM) * 10)).toFixed(2),
      literToKM: parseFloat((drivenKM / refilledFuel)).toFixed(2),
      priceForLiter: (paidForFuel / refilledFuel).toFixed(2)
    }
  )
}

  return (
    <>
    <Header kilometers={kilometers}/>
    <ConsumptionInput car={car} kilometers={kilometers} update={() => update()}/>
    </>
  )
}

export default App
