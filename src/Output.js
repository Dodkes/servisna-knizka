import React from 'react'
import './output.css'

export default function Output(props) {
  return (
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
  )
}
