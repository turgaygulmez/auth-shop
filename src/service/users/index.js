import AxiosService from "../axiosService";
import { toBaskets } from "../baskets/adapter";

export default class AuthenticationService extends AxiosService {
  getBaseUrl() {
    return "/users";
  }

  getBasket(data) {
    const { id } = data;
    return this.httpClient
      .get(`${this.getBaseUrl()}/${id}/basket`)
      .then((response = {}) => toBaskets(response.data));
  }
}
