import React, { Component } from 'react'

export class Game extends Component {
  render() {
    return (
      <div className='Game'>
        <img src={"./game/"+this.props.game.id + ".png"}/>
        <h1>{this.props.game.title}</h1>
        <p1>{this.props.game.price} Руб.</p1>
        <button className='play'>
          <span className='button_line button_line--top'></span>
          <span className='button_line button_line--bottom'></span>
          <span className='button_line button_line--right'></span>
          <span className='button_line button_line--left'></span>
          ИГРАТЬ
        </button>
      </div>
    )
  }
}

export default Game