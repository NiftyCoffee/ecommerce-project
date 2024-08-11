import './ProductCatalog.css';
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const path = process.env.NEXT_PUBLIC_PATH;

export default function ProductCatalog() {

    const [products, setProducts] = useState([]);

    const testGet = async () => {
        try {
            const res = await fetch(`${path}/api/test`);

            if (!res.ok) {
                throw new Error("Test failed");
            }

            console.log("hello");
        } catch (error) {
            console.log("Test failed:", error);
        }
    }

    const getProducts = async () => {
        try {
        const res = await fetch(`${path}/api/products`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }

        console.log(res)
        const response_json = await res.json()
        // console.log(response_json["products"])
        console.log(response_json)

        // setProducts(response_json.products);
        setProducts(response_json);
        return response_json;

        } catch (error) {
            console.log("Error loading products:", error);
        }
    }

    useEffect(() => {
        testGet();
        const allProducts = getProducts();
    }, []);

    return (
        <main className="product-catalog-container">
            {products.map((product: { name: string; brand: string; price: number; url: string; img: string; }, index) => (
                <ProductCard key={index} name={product.name} brand={product.brand} price={product.price} url={product.url} img={product.img} />
            ))}
        </main>
    )
}
