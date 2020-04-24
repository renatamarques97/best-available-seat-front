import React from 'react';
import axios from 'axios';

export default class VenueFormComponent extends React.Component {
  state = {
    loading: false,
    name: '',
    rows: '',
    columns: '',
  }

  handleChange = event => {
    const fieldName = event.target.name;
    const newState = {
      [fieldName]: event.target.value
    }
    this.setState(newState);
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.loading){
      return
    }
    this.setState({loading: true}, () => {
      const venue = {
        name: this.state.name,
        rows: this.state.rows,
        columns: this.state.columns,
      }

      axios.post(`http://localhost:3001/api/venues`, {venue})
        .then(res => {
          this.props.handleCreation(res.data.venue_id);
          this.setState({loading: false})
          console.log(res);
          console.log(res.data);
        })
    })
  }

  render() {
    return (
      <div class="box-container">
        <h2>Create a new Venue</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Venue Name
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
            /><br/>
          </label>
          <label>
            How many rows?
            <input
              type="text"
              id="rows"
              name="rows"
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={this.handleChange}
            /><br/>
          </label>
          <label>
            How many columns?
            <input
              type="text"
              id="columns"
              name="columns"
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={this.handleChange}
            /><br/>
          </label>
          <button type="submit" class="btn-success">Create</button>
        </form>
        {this.props.children}
      </div>
    )
  }
}
