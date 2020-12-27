import React from "react";
import { connect } from "react-redux";

import { ProductsPage } from "../../components/pages";
import { selectProfile } from "../../store/self/reducer";

import {
  getProducts,
  setFilters,
  resetFilters
} from "../../store/products/actions";
import { selectProducts, selectFilters } from "../../store/products/reducer";

import { getProductTypes } from "../../store/productTypes/actions";
import { selectProductTypes } from "../../store/productTypes/reducer";

import { selectBasket } from "../../store/basket/reducer";
import { addBasket } from "../../store/basket/actions";
import { getBasket } from "../../store/basket/actions";

class Products extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onResetFilters = this.onResetFilters.bind(this);
    this.onAddBasket = this.onAddBasket.bind(this);
  }

  onFilterChange(data) {
    const { onSetFilters, onLoadProducts, filters } = this.props;
    const newFilter = {};
    newFilter[data.key] = data.value;

    onSetFilters(newFilter);
    onLoadProducts({
      ...filters,
      ...newFilter
    });
  }

  onAddBasket(data, quantity) {
    const { basket, onAddBasket, profile } = this.props;

    const existingItem = basket && basket.find((x) => x.productId === data.id);

    if (!quantity) {
      alert("Please add quantity");
    } else if (existingItem) {
      alert("Product has already being added to basket");
    } else {
      onAddBasket({
        quantity,
        productId: data.id,
        userId: profile.id,
        name: data.name
      });
    }
  }

  onResetFilters() {
    const { onResetFilters, onLoadProducts } = this.props;
    onResetFilters();
    onLoadProducts();
  }

  componentDidMount() {
    const {
      products,
      onLoadProducts,
      productTypes,
      onLoadProductTypes,
      basket,
      onLoadBasket,
      profile
    } = this.props;

    if (productTypes && !productTypes.length) {
      onLoadProductTypes();
    }

    if (products && !products.length) {
      onLoadProducts();
    }

    if (profile && basket && !basket.length) {
      onLoadBasket({ id: profile.id });
    }
  }

  render() {
    const { filters = {}, productTypes, basket, products } = this.props;

    return (
      <ProductsPage
        products={products}
        productTypes={productTypes}
        filters={filters}
        basket={basket}
        onFilterChange={this.onFilterChange}
        onAddBasket={this.onAddBasket}
        onClear={this.onResetFilters}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  products: selectProducts(state),
  filters: selectFilters(state),
  basket: selectBasket(state),
  productTypes: selectProductTypes(state),
  profile: selectProfile(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadProducts: (data) => dispatch(getProducts(data)),
  onLoadProductTypes: () => dispatch(getProductTypes()),
  onLoadBasket: (data) => dispatch(getBasket(data)),
  onSetFilters: (data) => dispatch(setFilters(data)),
  onResetFilters: () => dispatch(resetFilters()),
  onAddBasket: (data) => dispatch(addBasket(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
