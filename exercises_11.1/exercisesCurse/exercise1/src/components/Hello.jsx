import React, { Component } from 'react'

//forma 1 de exportar
export default class Hello extends Component {
  render() {
    const textJSX = "Hello, JSX"
    return (
      <div>
        <h1 className="hello" >{textJSX}</h1>
      </div>
    )
  }
}
