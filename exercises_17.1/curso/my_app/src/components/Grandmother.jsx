// components/Grandmother.jsx
import React, { Component } from 'react'
import Father from './Father'

export default class Grandmother extends Component {
  render() {
    return (
      <div>
        <h2>Eu sou a vó</h2>
        <Father />
      </div>
    )
  }
}
