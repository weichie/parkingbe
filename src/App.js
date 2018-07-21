import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import ParkingList from './components/ParkingList/ParkingList';

const parking = {
  cover: 'https://images.pexels.com/photos/851305/pexels-photo-851305.jpeg',
  name: 'Zandpoort Vest',
  city: 'Mechelen',
  zip: '2800',
  price: .30,
  day: 4,
  capacity: 500
}

const parkings = [
  parking,
  parking,
  parking,
  parking,
  parking,
  parking
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <h1>Populairste parkeerplaatsen</h1>

        <div className="container">
          <ParkingList parkings={parkings} />
        </div>
      </div>
    );
  }
}

export default App;
