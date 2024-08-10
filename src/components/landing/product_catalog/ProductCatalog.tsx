import './ProductCatalog.css';
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductCatalog() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
        const res = await fetch("https://ecommerce-project-niftycoffees-projects.vercel.app/api/products", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }

        console.log(res)
        const response_json = await res.json()
        // console.log(response_json["products"])
        console.log(response_json)

        setProducts(response_json.products);

        return response_json;

        } catch (error) {
            console.log("Error loading products:", error);
        }
    }

    useEffect(() => {
        const allProducts = getProducts();
    }, []);

    return (
        <main className="product-catalog-container">
            {products.map((product: { name: string; brand: string; price: number; url: string; }, index) => (
                <ProductCard key={index} name={product.name} brand={product.brand} price={product.price} url={product.url} />
            ))}
        </main>
    )
}
