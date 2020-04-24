import React from "react";

const VenueListComponent = (props) => {
  return (
    <React.Fragment>
      <button onClick={() => { props.handleChange() }}>Load Venues</button>
        <p>Current Venue: {props.venueId}</p>
        <p>Click on a venue to select:</p>
        <ul>
          {
            props.venues.map((venue) => (
              <li key={venue.id} onClick={() => { props.handleVenueCreation(venue.id) }}>
                {venue.id} - {venue.name}
              </li>
            ))
          }
        </ul>
      </React.Fragment>
  )
};

export default VenueListComponent
