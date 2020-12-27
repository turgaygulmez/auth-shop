import Products from "./products";
import ProductTypes from "./productTypes";
import Baskets from "./baskets";
import Users from "./users";
import Authentication from "./authentication";
import Self from "./self";
/**
 * Create a singelton service instance to be able to use
 * across different actions
 */
class Service {
  constructor() {
    if (!Service.instance) {
      this.products = new Products();
      this.productTypes = new ProductTypes();
      this.baskets = new Baskets();
      this.users = new Users();
      this.authentication = new Authentication();
      this.self = new Self();
      Service.instance = this;
    }

    return Service.instance;
  }
}

const instance = new Service();
Object.freeze(instance);
export default instance;
