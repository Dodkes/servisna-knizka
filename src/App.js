import { useState } from 'react';
import './App.css';
import Output from './Output';


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
      consumption100: ((refilledFuel/drivenKM) * 100).toFixed(3),
      consumptionMoney: (paidForFuel / refilledFuel).toFixed(2) * ((refilledFuel/drivenKM) * 100).toFixed(3),
      consumption10: ((refilledFuel/drivenKM) * 10).toFixed(3),
      consumption10Money: (paidForFuel / refilledFuel).toFixed(2) * ((refilledFuel/drivenKM) * 10).toFixed(3),
      literToKM: (drivenKM / refilledFuel).toFixed(3),
      priceForLiter: (paidForFuel / refilledFuel).toFixed(3)
    }
  )
}

  return (
    <>
    <div className="App">
      <h1>Last record: {kilometers} KM</h1>
        Current KM: <input id='kmInput' type='number' onChange={() => update()}></input>
        Paid for fuel: <input id='moneyInput' type='number' onChange={() => update()}></input>
        Refueled liters: <input id='fuelInput' type='number' onChange={() => update()}></input>
    </div>
    <Output car={car}/>
    </>
  )
}

export default App
