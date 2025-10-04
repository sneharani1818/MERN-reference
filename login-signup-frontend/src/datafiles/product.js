// generate a list of products
const products = [];
for (let i = 1; i <= 20; i++) {
    products.push({
        id: i,
        name: `Product ${i}`,
        description: `This is the description for product ${i}.`,
        price: (Math.random() * 100).toFixed(2),
    });
}
export default products;