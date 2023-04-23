import React, { useState } from 'react'
import ProductItem from '../ProductItem'
import AddProductForm from '../AddProductForm'

export default function ProductList() {

    const defaultProduct = [
        { id: 1, name: 'Велосипед', price: 4000 },
        { id: 2, name: 'Самокат', price: 4000 },
        { id: 3, name: 'Лыжи', price: 4000 },
        { id: 4, name: 'Сноуборд', price: 4000 },
    ]

    const [product, setProduct] = useState(defaultProduct)

    const addProduct = (newProduct) => {
        setProduct((prevProduct) => [...prevProduct, newProduct])
    }

    const deleteProduct = (id, updatedProduct) => {
        setProduct((prevProduct) => prevProduct
            .filter((product) => (product.id === id ? updatedProduct : product))
        );
    }

    return (
        <div>
            <AddProductForm {...{ addProduct }} />
            {
                product.map((el) =>
                    <ProductItem key={el.id} {...el} {...{deleteProduct}}/>)
            }
        </div>
    )
}
