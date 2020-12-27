export const toProducts = (data) => {
  if (data && data.length) {
    return data.map((item) => {
      return toProduct(item);
    });
  }

  return [];
};

export const toProduct = (data) => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    productTypeId: data.ProductTypeId
  };
};
