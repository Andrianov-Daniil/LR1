import React, { Component } from 'react'

export class Game extends Component {
  render() {
    if(this.props.game.I_have_this_game){
      return (
        //есть игра
        <div className='Game'>
          <button5>
             <img src={"./game/"+this.props.game.id + ".png"}/>
          </button5>
          <h1 className='I_have_game'>{this.props.game.title}</h1>
          <a className='play'>
            <span className='a_line a_line--top'></span>
            <span className='a_line a_line--bottom'></span>
            <span className='a_line a_line--right'></span>
            <span className='a_line a_line--left'></span>
            <p className='center'>ИГРАТЬ</p>
          </a>
        </div>
      )
    }
    else if(this.props.game.discount){
      //игра со скидкой
      return (
        <div className='Game'>
          <button5>
             <img src={"./game/"+this.props.game.id + ".png"}/>
          </button5>
          <h1>{this.props.game.title}</h1>
          <del className='discount'>{this.props.game.price} Руб.</del>
          <p className='now_price'>{this.props.game.now_price} Руб.</p>
          <a className='play'>
            <span className='a_line a_line--top'></span>
            <span className='a_line a_line--bottom'></span>
            <span className='a_line a_line--right'></span>
            <span className='a_line a_line--left'></span>
            <p className='center'>ИГРАТЬ</p>
          </a>
        </div>
      )
    }
    else {
      //игра без скидки
      return (
        <div className='Game'>
          <button5>
             <img src={"./game/"+this.props.game.id + ".png"}/>
          </button5>
          <h1>{this.props.game.title}</h1>
          <p1>{this.props.game.price} Руб.</p1>
          <a className='play'>
            <span className='a_line a_line--top'></span>
            <span className='a_line a_line--bottom'></span>
            <span className='a_line a_line--right'></span>
            <span className='a_line a_line--left'></span>
            <p className='center'>ИГРАТЬ</p>
          </a>
        </div>
      )
    }
  }
}

export default Game