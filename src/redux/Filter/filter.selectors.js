export const selectFilter = (products, filter) => {
  if (!products || products.length === 0) return [];

  const keyword = filter.keyword.toLowerCase();
  return (
    products
      .filter((product) => {
        const isInRange = filter.maxPrice
          ? product.productPrice >= filter.minPrice &&
            product.productPrice <= filter.maxPrice
          : true;

        const matchKeyword = product.productName
          ? product.productName.includes(keyword)
          : true;

        const matchName = product.productName
          ? product.productName.toLowerCase().includes(keyword)
          : true;

        const matchDescription = product.productDesc
          ? product.productDesc.toLowerCase().includes(keyword)
          : true;

        return (matchKeyword || matchName || matchDescription) && isInRange;
      })
      // eslint-disable-next-line array-callback-return
      .sort((a, b) => {
        if (filter.sortBy === 'name-desc') {
          return a.productName < b.productName ? 1 : -1;
        } else if (filter.sortBy === 'name-asc') {
          return a.productName > b.productName ? 1 : -1;
        } else if (filter.sortBy === 'price-desc') {
          return a.productPrice < b.productPrice ? 1 : -1;
        } else if (filter.sortBy === 'price-asc') {
          return a.productPrice > b.productPrice ? 1 : -1;
        }
      })
  );
};

// Select product with highest price
export const selectMax = (products) => {
  if (!products || products.length === 0) return 0;

  let high = products[0];

  for (let i = 0; i < products.length; i++) {
    if (products[i].productPrice > high.productPrice) {
      high = products[i];
    }
  }

  return Math.floor(high.productPrice);
};

// Select product with lowest price
export const selectMin = (products) => {
  if (!products || products.length === 0) return 0;
  let low = products[0];

  for (let i = 0; i < products.length; i++) {
    if (products[i].productPrice < low.productPrice) {
      low = products[i];
    }
  }

  return Math.floor(low.productPrice);
};
