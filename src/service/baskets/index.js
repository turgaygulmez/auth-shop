import AxiosService from "../axiosService";
import { toBasket, toBasketJSON } from "./adapter";

export default class AuthenticationService extends AxiosService {
  getBaseUrl() {
    return "/baskets";
  }

  delete(data) {
    const { id } = data;
    return this.httpClient
      .delete(`${this.getBaseUrl()}/${id}`)
      .then((response = {}) => response);
  }

  create(data) {
    return this.httpClient
      .post(`${this.getBaseUrl()}`, toBasketJSON(data))
      .then((response = {}) =>
        toBasket({
          ...data,
          ...response.data
        })
      );
  }
}
