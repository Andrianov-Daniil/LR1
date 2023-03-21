import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Games from "./components/Games";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      games: [
        {
        id: 1,
        title: 'Дота 2',
        img: '',
        price: '699'
        },
        {
          id: 2,
          title: 'CS GO',
          img: '',
          price: '699'
        },
        {
          id: 3,
          title: 'Апекс',
          img: '',
          price: '699'
        },
        {
          id: 4,
          title: 'Ведьмак',
          img: '',
          price: '699'
        },
        {
          id: 5,
          title: 'NFS',
          img: '',
          price: '699'
        },
        {
          id: 6,
          title: 'Assasins',
          img: '',
          price: '699'
        },
        {
          id: 7,
          title: 'DOOM',
          img: '',
          price: '699'
        },
        {
          id: 8,
          title: 'PUBG',
          img: '',
          price: '699'
        },
        {
          id: 9,
          title: 'PUBG',
          img: '',
          price: '699'
        },
        {
          id: 9,
          title: 'PUBG',
          img: '',
          price: '699'
        },
        {
          id: 9,
          title: 'PUBG',
          img: '',
          price: '699'
        },
      ]
    };
  }
  render(){
    return(
      <div className='wrapper'>
        <Header />
        <Games games={this.state.games}/>
        <Footer />
      </div>
    )
  }
}

export default App;
