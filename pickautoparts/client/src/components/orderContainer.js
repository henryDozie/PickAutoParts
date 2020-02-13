import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { indexOrders, postOrder, putOrder, verifyUser } from '../services/api_helper';
import OrderList from './orderList';
import SingleOrder from './singleOrder';
import CreateOrderForm from './createOrderForm';
import UpdateOrderForm from './updateOrderForm';

class OrderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    verifyUser();
    this.readAllOrders();
  }

  // READ ALL THE ORDERS
  readAllOrders = async () => {
    const orders = await indexOrders();
    this.setState({ orders });
  }

  //CREATE THE ORDER
  createOrder = async (orderData) => {
    // e.preventDefault()
    console.log(orderData);
    const newOrder = await postOrder(orderData);
    this.setState({
      orders: [...this.state.orders, newOrder]
    })
    this.props.history.push("/orders");
  }

  // UPDATE THE ORDER
  updateOrder = async (id, ordersData) => {
    const updatedOrder = await putOrder(id, ordersData);
    const changedOrders = this.state.orders.map(order => parseInt(order.id) === parseInt(id) ? updatedOrder : order);
    console.log(changedOrders);
    this.setState({ orders: changedOrders });
    this.props.history.push("/orders");
  }

  render() {
    return (
      <div>
        <Route exact path="/orders" render={() => (
          <OrderList
            orders={this.state.orders}
          />
        )} />
        <Route exact path="/orders/:id" render={(props) => (
          <SingleOrder
            orderId={props.match.params.id}
            orders={this.state.orders}
          />
        )} />
        <Route path="/orders/new" render={() => (
          <CreateOrderForm
            createOrder={this.createOrder}
          />
        )} />
        <Route path="/orders/:id/edit" render={(props) => (
          <UpdateOrderForm
            orders={this.state.orders}
            updateOrder={this.updateOrder}
            orderId={props.match.params.id}
          />
        )} />
      </div>
    )
  }
}

export default withRouter(OrderContainer);
