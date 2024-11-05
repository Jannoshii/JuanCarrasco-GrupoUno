import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import './Itemdetail.css';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const decrementQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const incrementQuantity = () => {
        if(product && quantity < product.stock) {
            setQuantity(quantity + 1)
        }
    }

    if (loading) {
        return <div className='container'><Loading /></div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }

    const precioTotal = product.price * quantity;

    return (
        <div className='container'>
            <div className="product-detail">
                <div className="product-image">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p className="product-description">{product.description}</p>
                    <div className="sizes">
                        <h3>Tallas disponibles:</h3>
                        <ul>
                            {product.sizes.map((size, index) => (
                                <li key={index}>{size}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="stock">Stock: {product.stock}</p>
                    <div className="quantity-selector">
                        <button onClick={decrementQuantity}> - </button>
                        <p>{quantity}</p>
                        <button onClick={incrementQuantity}> + </button>
                    </div>
                    <p className="price">Precio: ${product.price} por unidad</p>
                    <p className="total-price">Precio Total: ${precioTotal}</p>
                    <button className="buy-button">Comprar</button>
                </div>
            </div>
        </div>
    );
}