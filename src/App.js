import React from 'react';
import './App.css';
import VenueFormComponent from './components/VenueFormComponent.js'

function App() {
  return (
    <div>
      <VenueFormComponent />
      <h2>Seats Available</h2>
      <form>
        <label for="name">Pick Your Seat</label><br/>
        <input type="text" id="label" name="label"/><br/>
        <input type="submit" value="submit"/>
      </form>
      <h2>Best Seat</h2>
      <form>
        <label for="name">How many seats are you looking for?</label><br/>
        <input type="text" id="seats_requested" name="seats_requested"/><br/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}

export default App;
