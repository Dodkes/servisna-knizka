import React from 'react'
import './consumptionInput.css'

export default function ConsumptionInput(props) {
  return (
  <div className="App">
      <h2 id='fuel-consumption-title'>Fuel consumption</h2>
      Current KM <input id='kmInput' type='number' onChange={props.update}></input>
      Paid for fuel <input id='moneyInput' type='number' onChange={props.update}></input>
      Refueled liters <input id='fuelInput' type='number' onChange={props.update}></input>

      <div>
        <ul id='output'>
            <li>Driven from last tank: <span id='data'>{props.car.drivenKM}</span> KM</li>
            <br></br>
            <li>Average consumption (100 KM): <span id='data'>{props.car.consumption100}</span> L</li>
            <li>Average money consumption (100 KM): <span id='data'>{props.car.consumptionMoney}</span> EUR</li>
            <br></br>
            <li>Average consumption (10 KM): <span id='data'>{props.car.consumption10}</span> L</li>
            <li>Average money consumption (10 KM): <span id='data'>{props.car.consumption10Money}</span> EUR</li>
            <br></br>
            <li>1 L: <span id='data'>{props.car.literToKM}</span> KM</li>
            <li>1 L Price: <span id='data'>{props.car.priceForLiter}</span> EUR</li>
        </ul>
    </div>
  </div>
  )
}
