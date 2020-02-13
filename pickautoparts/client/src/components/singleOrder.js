import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOrder: null
    }
  }

  setCurrentOrder = () => {
    const currentOrder = this.props.orders.find(order => order.id === parseInt(this.props.orderId));
    this.setState({ currentOrder })
  }

  componentDidMount() {
    this.setCurrentOrder();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.orderId !== this.props.orderId) {
      this.setCurrentOrder();
    }
  }

  render() {
    // console.log(this.props.orderId);
    
    return (
      <div>
        {this.state.currentOrder && (
          <>
            <h1>{this.state.currentOrder.shipping_Address}</h1>
            <Link to={`/orders/${this.state.currentOrder.id}/edit`}><button>Edit</button></Link>
          </>
        )}
      </div>
    )
  }
}
