import AxiosService from "../axiosService";
import { toProductTypes } from "./adapter";

export default class ProductTypeService extends AxiosService {
  get() {
    return this.httpClient
      .get("/productTypes")
      .then((response = {}) => toProductTypes(response.data));
  }
}
