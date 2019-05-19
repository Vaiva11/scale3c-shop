export default (products, id, cartCount) => {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.map(product => {
    if (product.id === id) {
      return { ...product, cartCount };
    }

    return product;
  });
}