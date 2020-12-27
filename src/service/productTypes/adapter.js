export const toProductTypes = (data) => {
  if (data && data.length) {
    return data.map((item) => {
      return toProductType(item);
    });
  }

  return [];
};

export const toProductType = (data) => {
  return {
    id: data.id,
    name: data.name
  };
};
