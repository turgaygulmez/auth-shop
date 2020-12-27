export const toBaskets = (data) => {
  if (data && data.length) {
    return data.map((item) => {
      return toBasket(item);
    });
  }

  return [];
};

export const toBasket = (data) => {
  return {
    id: data.id,
    quantity: data.quantity,
    productId: data.ProductId,
    productName: data.Product ? data.Product.name : data.name
  };
};

export const toBasketJSON = (data) => {
  return {
    quantity: data.quantity,
    ProductId: data.productId,
    UserId: data.userId
  };
};
