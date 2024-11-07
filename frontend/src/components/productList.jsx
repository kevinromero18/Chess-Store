import { useEffect, useState } from "react";
import axios from 'axios';


const ProductList = () => {
    const [products, setProducts] = useState([])

   useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products')
                setProducts(res.data)
            } catch (error) {
                console.log('Error al obtener los productos', error); 
            }
        };
        fetchProducts();
   }, [])

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </li>
                    ))
                }
            </ul>
    </div>
    );
}

export default ProductList;