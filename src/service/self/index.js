import AxiosService from "../axiosService";
import { toProfile } from "./adapter";

export default class SelfService extends AxiosService {
  getBaseUrl() {
    return "/self";
  }

  get() {
    return this.httpClient
      .get(`${this.getBaseUrl()}`)
      .then((response = {}) => toProfile(response.data));
  }

  logout() {
    return this.httpClient
      .get(`${this.getBaseUrl()}/logout`)
      .then((response = {}) => response);
  }
}
