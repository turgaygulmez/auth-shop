import React from "react";
import ProductCard from "../../organisms/productCard";
import Basket from "../../organisms/basket";
import FilterList from "../../molecules/filterList";

const ProductsPage = ({
  products,
  filters,
  productTypes,
  onFilterChange,
  onAddBasket,
  onClear,
  basket
}) => {
  return (
    <div className="all-products">
      <Basket basket={basket} />
      <FilterList
        productTypes={productTypes}
        filters={filters}
        onFilterChange={onFilterChange}
        onClear={onClear}
      />
      <div className="product-card-list">
        {products && products.length === 0 && (
          <p className="product-card-list__empty">
            We could not find any product with your filter
          </p>
        )}

        {products &&
          products.map((item, idx) => {
            return (
              <ProductCard
                key={idx}
                product={item}
                onAddBasket={onAddBasket}
                productTypes={productTypes}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductsPage;
