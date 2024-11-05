import Item from "../Item/item.jsx"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading.jsx"
import './Itemlist.css'

export default function Itemlist({ products: initialProducts }){
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if(!initialProducts) {
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [initialProducts]);

    return(
        <>
            {loading ? (
                <div className="loading-container">
                    <Loading />
                </div>
            ) : (
                <div className="products-grid">
                    {products.map((prod) =>(
                        <Item {...prod} key={prod.id}/>
                    ))}
                </div>
            )}
        </>
    )
}
