import React from 'react'
import products from '../datafiles/product'

const Products = () => {
    return (
        <div>
            <h1>Products</h1>
            <div className="products-container">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products