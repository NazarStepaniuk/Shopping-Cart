import { useState, useEffect } from "react"
import { ClipLoader } from "react-spinners";
import ProductItem from "../components/product-item";


export default function Home(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchProducts() {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        if(data){
            setProducts(data);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchProducts();
    }, []);

    return <div>
        {
            loading ? 
            (<div className="min-h-screen w-full flex justify-center items-center">
                <ClipLoader
                    size={75}
                    color="rgb(127, 29, 29)"/>
            </div>) :
            (<div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
                {
                    products && products.length ?
                    products.map(product => <ProductItem product={product}/>) :
                    null
                }
            </div>) 
        }
    </div>
}