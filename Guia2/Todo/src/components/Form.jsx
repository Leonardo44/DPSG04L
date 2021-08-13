import React, { useState } from 'react';
import Producto from './Producto';

const Form = () => {

    const [product, setProduct] = useState();

    const [products, setProducts] = useState([]);

    const handleChange = e => {
        let actualProduct = {};
        actualProduct[e.target.name] = e.target.value;
        setProduct({
            ...product, 
            ...actualProduct
        });
    };

    const handleClick = e => {

        if(Object.keys(product.product).length === 0 || product.product.trim() === ''){
            alert('El producto no puede estar vacio');
            return;
        }

        if(Object.keys(product.num_product).length === 0 || product.num_product.trim() === '' || parseInt(product.num_product) <= 0){
            alert('El numero de productos no puede estar vacio o no es válido');
            return;
        }

        setProducts([...products, product]);
    };

    const deleteProduct = indice => {
        const newProducts = [...products];
        newProducts.splice(indice, 1);
        setProducts(newProducts);
    };

    return (
        <>
        <form onSubmit={ e => e.preventDefault() }>
            <label>Agregar producto</label>
            <br />
            <br />
            <input type="text" autocomplete="off" name='product' required placeholder='Manzanas' onChange={ handleChange } />
            <br />
            <input type="text" autocomplete="off" name='num_product' required placeholder='5' onChange={ handleChange } />
            <br />
            <button onClick={ handleClick }>Agregar</button>
        </form>
        {
            products.map((value, index) => (
                <Producto product={ value } key={index} index={index} deleteProduct={deleteProduct} />
            ))
        }
        </>
    );
}

export default Form;