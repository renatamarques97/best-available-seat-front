import React, { useState } from "react";

const VenueListComponent = (props) => {
  const [venue, setVenue] = useState("")
  return (
    <React.Fragment>
      <button onClick={() => { props.handleChange() }}>Load Venues</button>
        <p>Current Venue: {venue}</p>
        <p>Click on a venue to select:</p>
        <ul>
          {
            props.venues.map((venue) => (
              <li key={venue.id} onClick={() => { props.handleVenueCreation(venue.id); setVenue(venue.name) }}>
                {venue.id} - {venue.name}
              </li>
            ))
          }
        </ul>
      </React.Fragment>
  )
};

export default VenueListComponent
