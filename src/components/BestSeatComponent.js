import React, { useState } from 'react';
import axios from 'axios';

const BestSeatComponent = (props) => {
  const [seats_requested, setSeatsRequest] = useState("");
  const [bestSeats, setBestSeats] = useState([]);

  const fetchBestSeats = () => {
    axios
      .get(`http://localhost:3001/api/best_seats`, { params: { venue_id: props.venueId, seats_requested: seats_requested }})
      .then(res => {
        const responseData = res.data;
        setBestSeats(responseData.data);
      });
  }

  return (
    <div class="box-container">
      <h2>Best Seat</h2>
      <form onSubmit={(event) => { event.preventDefault(); fetchBestSeats(); }}>
        <label>
          How many seats are you looking for?
          <input
            type="text"
            id="seats_requested"
            name="seats_requested"
            onChange={(event) => setSeatsRequest(event.target.value)}
          /><br/>
        </label><br/>
        <button type="submit" class="btn-success">Submit</button>
      </form>
      <p>The Best Available Seat for this Venue: {bestSeats.join(",")} </p>
    </div>
  )
}

export default BestSeatComponent
