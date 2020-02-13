import React from 'react';
import { Link } from 'react-router-dom';

 function OrderList(props) {
  console.log(props)
  return (
    <div>
      {props.orders && props.orders.map(order => (
        <div key={order.id}>
          <Link to={`/orders/${order.id}`}><h3>{order.shipping_Address}</h3></Link>
        </div>
      ))}
      <Link to="/orders/new"><button>Add a Order</button></Link>
    </div>
  )
 }

 export default OrderList
