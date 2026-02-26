///Product API Fetch using Promises (.then, .catch, .finally)
function fetchProducts(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const products = ['Laptop', 'Smartphone', 'Tablet'];
      resolve(products);
    }, 2000);
  });
}
fetchProducts()
  .then((products) => {
    console.log('Products fetched:', products);
  })
  .catch((error) => {

  console.error('Error fetching products:', error);
})
  .finally(() => {
  console.log('Fetch attempt completed.');
});



