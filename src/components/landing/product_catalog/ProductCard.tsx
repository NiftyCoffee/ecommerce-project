import Image from 'next/image';
import './ProductCard.css';
import productImageSample from '../../../../public/assets/images/product-sample.webp';
import Link from 'next/link';

interface ProductCardProps {
    name: string,
    brand: string,
    price: number,
    url: string,
}

export default function ProductCard(props: ProductCardProps) {
    return (
        <Link href={props.url} target='_blank' className="product-card-link">
            <article className="product-card-container shadow-light_accent dark:shadow-dark_accent">
                    <div className="product-image-container">
                        <Image
                        src={productImageSample}
                        alt="Product Image"
                        className="product-image"
                        layout={'fill'}
                        objectFit={'cover'}
                        />
                    </div>
                    <h3 className="product-name mt-2">{props.name}</h3>
                    <span className="product-brand">{props.brand}</span>
                    <span className="product-price text-light_secondary dark:text-dark_secondary">{props.price}</span>
            </article>
        </Link>
    )
}
