import { products, getProductBySlug, getProductsByCategory } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

interface ProductDetailPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    const relatedProducts = product
        ? getProductsByCategory(product.categorySlug).filter(p => p.id !== product.id).slice(0, 4)
        : [];

    return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
