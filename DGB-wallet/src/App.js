import React, { Component } from 'react';
import logo from '../src/assets/dgbIcon.png';
import './App.css';
import axios from 'axios';
import dgb from 'digibyte';


class App extends Component {
   /*************************************************************************
     * COMPONENT LIFECYCLE
     *************************************************************************/
  constructor(props) {
    super(props);

    this.state = {
      address: new dgb.PrivateKey()
    };
  }
  /*************************************************************************
     * EVENT HANDLERS
     *************************************************************************/
      onActionPress = () => {
        console.log(this.state);
          }

  
  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=DGB&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
  }
  

    /*************************************************************************
     * RENDERING
     *************************************************************************/
  render() {
    var { address } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Digibyte Paper Wallet</h1>
        </header>
       <h1>
       Private Address: {address.toAddress().toString()}
       </h1>

       <h1>
       Public Address: {address.publicKey.toString()} 
       </h1>
     

       
      </div>
    );
  }
}

export default App;
