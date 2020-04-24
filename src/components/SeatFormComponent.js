import React from 'react';
import axios from 'axios';

export default class SeatFormComponent extends React.Component {
  state = {
    loading: false,
    taken: [],
    label: '',
  }

  handleChange = event => {
    const fieldName = event.target.name;
    const selected = event.target.selectedOptions;
    const selectedValue = selected[0].value;
    const newState = {
      [fieldName]: selectedValue
    }

    this.setState(newState);
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.loading){
      return
    }
    this.setState({loading: true}, () => {
      const newTaken = this.state.label !== "" ? this.state.taken.concat(this.state.label) : this.state.taken

      const newState = {
        taken: newTaken,
        loading: false,
      }

      const seats = this.props.seats.filter((seat) => newTaken.includes(seat.label))

      const body = {
        "seats_ids": seats.map((s) => s.id),
        "available": false
      };

      this.setState(newState, () => {
        axios.post(`http://localhost:3001/api/batch_update_seats`, body)
          .then(res => {
            this.setState({loading: false})
            console.log(res);
            console.log(res.data);
          })
      })
    })
  }

  deleteSeat = event => {
    const newTaken = this.state.taken.filter(
      (label) => {
        return label !== event.target.value
      }
    );

    const seats = this.props.seats.filter((seat) => event.target.value === seat.label)

    const body = {
      "seats_ids": seats.map((s) => s.id),
      "available": true
    };

    console.log(body);

    this.setState({ taken: newTaken }, () => {
      axios.post(`http://localhost:3001/api/batch_update_seats`, body)
        .then(res => {
          this.setState({loading:false})
          console.log(res);
          console.log(res.data);
        })
    });
  }

  render() {
    const seats = this.props.seats.filter((seat) => !this.state.taken.includes(seat.label))
    return (
      <div class="box-container">
        <h2>Seats Available</h2>
        <form onSubmit={this.handleSubmit}>
          <br/>
          <select name="label" onChange={this.handleChange}>
            <option value="">Select your seat</option>
            {
              seats.map((seat) => {
                return (
                  <option key={seat.id} value={seat.label}>{seat.label}</option>
                )
              })
            }
          </select>
          <button class="btn-success" type="submit">Submit</button>
        </form>
        <ul>
          {
            this.state.taken.map( (label, index) => {
              return (
                <React.Fragment key={index}>
                  <li>{label}</li>
                  <button
                    class="btn-danger"
                    value={label}
                    onClick={this.deleteSeat}>
                    x
                  </button>
                </React.Fragment>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
