export const calcSubTotal = (data) => {
  if (data && data.data) {
    // Calculate subtotal for data.data structure
    return data.data.reduce((sum, test) => {
      return sum + parseFloat(test.lab_test.price);
    }, 0);
  } else if (Array.isArray(data)) {
    // Calculate subtotal for array structure
    return data.reduce((sum, product) => {
      return sum + product.product.price * product.quantity;
    }, 0);
  } else {
    return 0; // Return 0 for unsupported data structure or empty data
  }
};

export const calcDiscount = (data) => {
  if (data && data.data) {
    // Calculate subtotal for data.data structure
    return data?.data.reduce((sum, test) => {
      return (
        sum + parseFloat(test.lab_test.price * (test.lab_test.discount / 100))
      );
    }, 0);
  } else if (Array.isArray(data)) {
    // Calculate subtotal for array structure
    return data.reduce((sum, product) => {
      return sum + parseFloat(product.price * (product.discount / 100));
    }, 0);
  } else {
    return 0; // Return 0 for unsupported data structure or empty data
  }
};
