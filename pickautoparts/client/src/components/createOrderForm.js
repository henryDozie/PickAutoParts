import React, { Component } from 'react';

export default class CreateOrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shipping_Address: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.props.createOrder(this.state)
      }}>
        <input
          type="text"
          name="shipping_Address"
          placeholder="Shipping Address"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
