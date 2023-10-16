import React from 'react'
import './consumptionInput.css'

export default function ConsumptionInput(props) {
  return (
  <div className="App">
      <h3>Fuel consumption</h3>
      Current KM: <input id='kmInput' type='number' onChange={props.update}></input>
      Paid for fuel: <input id='moneyInput' type='number' onChange={props.update}></input>
      Refueled liters: <input id='fuelInput' type='number' onChange={props.update}></input>
  </div>
  )
}
