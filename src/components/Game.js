import React, { Component } from 'react'

export class Game extends Component {
  render() {
    return (
      <div className='Game'>
        <img src={"./game/"+this.props.game.id + ".png"}/>
        <h1>{this.props.game.title}</h1>
        <p1>{this.props.game.price} Руб.</p1>
        <div className='play'>Play</div>
      </div>
    )
  }
}

export default Game