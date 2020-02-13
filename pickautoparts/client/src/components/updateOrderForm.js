import React, { Component } from 'react';

export default class UpdateOrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shipping_Address: ""
    }
  }

  setFormData = () => {
    if (this.props.orders.length) {
      const { shipping_Address } = this.props.orders.find(order => {
        return parseInt(order.id) === parseInt(this.props.orderId)
      })
      this.setState({ shipping_Address })
    }
  }

  componentDidMount() {
    this.setFormData();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.orders !== this.props.orders) {
      this.setFormData();
    }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.updateOrder(this.props.orderId, this.state)
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
