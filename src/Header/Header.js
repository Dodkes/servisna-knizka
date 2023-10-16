import React from 'react'
import './header.css'

export default function Header(props) {
  return (
    <div id='header'>
    <h1>Your car: VW Tiguan</h1>
    <div id='car-data'>
        <h3>KM: {props.kilometers}</h3>
    </div>
    </div>
  )
}
