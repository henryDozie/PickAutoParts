import React from "react";

function Cart(props) {
  return (
    <div>
      <div className="cartDiv">
        {props.cart.map((autopart, index) => (
          <div className="autopartCard" key={index}>
            <div className="img">
              <img src={autopart.img_url} alt="loading"></img>
            </div>
            <div className="partdesc">
              <h3>{autopart.name}</h3>
              <h5>{autopart.description}</h5>
              <span>
                <h4>$ {autopart.price}</h4>
              </span>
              <button onClick={e => props.handleRemove(e, autopart)}>
                <h3>Remove from Cart</h3>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cart;
