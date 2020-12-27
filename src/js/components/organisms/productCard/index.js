import React, { useState } from "react";
import { Tag } from "../../atoms";

const ProductCard = ({ product, productTypes, onAddBasket }) => {
  const productType = productTypes.find((x) => x.id === product.productTypeId);

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="product-card">
      <div className="product-card__content">
        <h3 className="product-card__content__title">{product.name}</h3>
        {productType && <Tag label={productType.name} />}
        <p className="product-card__content__title">{product.description}</p>
      </div>
      <div className="product-card__actions">
        <input
          name="amount"
          pattern="[0-9.]+"
          type="number"
          className="product-card__actions__amount form-control"
          placeholder="Amount"
          value={value}
          onChange={onChange}
        />
        <button
          onClick={() => {
            onAddBasket(product, value);
            setValue("");
          }}
          className="product-card__actions__button btn btn-primary"
        >
          Add Basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
