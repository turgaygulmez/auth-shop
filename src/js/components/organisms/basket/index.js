import React from "react";

const Basket = ({ basket }) => {
  if (basket && !basket.length) {
    return <div className="basket--empty">Basket is empty</div>;
  }

  return (
    <div className="basket">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.productName}</td>
                  <td>{item.quantity}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
