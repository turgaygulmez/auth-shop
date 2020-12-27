import AxiosService from "../axiosService";
import { toProducts } from "./adapter";

export default class ProductService extends AxiosService {
  get(data = {}) {
    let url = `/products?limit=${data.limit || 8}`;

    if (data.search) {
      url += `&search=${data.search}`;
    }

    if (data.type) {
      url += `&type=${data.type.id}`;
    }

    return this.httpClient
      .get(url)
      .then((response = {}) => toProducts(response.data));
  }
}
