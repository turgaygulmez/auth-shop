import AxiosService from "../axiosService";
import { toProfile } from "../self/adapter";

export default class AuthenticationService extends AxiosService {
  getBaseUrl() {
    return "/authentication";
  }

  authenticate(data) {
    return this.httpClient
      .post(`${this.getBaseUrl()}/authenticate`, data)
      .then((response = {}) => toProfile(response.data));
  }
}
