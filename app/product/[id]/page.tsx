import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { fetchProduct } from '@/lib/api';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/ProductGallery';
import ProductActions from '@/components/ProductActions';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const productData = await fetchProduct(id);

    if (!productData || !productData.data) {
        // Since API structure might be nested: { status: "success", data: { product: ... } }
        // Or if fetchProduct returns the product object directly (check api.ts)
        // api.ts: return await res.json(); 
        // So we probably have { status: 'success', data: { product: {...} } }
        // Let's inspect api.ts return again or handle safely
    }

    // Adapt based on API response structure. 
    // Assuming fetchProduct returns the full JSON response, we access .data.product or similar
    const product = productData?.data?.product || productData;

    if (!product || !product.name) {
        return notFound();
    }

    // Normalize data
    const images = product.images && product.images.length > 0
        ? product.images
        : [product.image || 'https://via.placeholder.com/600x800'];

    const relatedDetails = [
        `Condition: ${product.condition || 'Pre-Owned'}`,
        `Material: ${product.material || 'N/A'}`,
        `Color: ${product.color || 'N/A'}`,
        `Includes: ${product.inclusions || 'N/A'}`
    ];

    return (
        <>
            <Header />
            <main className="container" style={{ padding: '40px 20px' }}>
                <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#666' }}>
                    <Link href="/">Home</Link> / <Link href="/women">Women</Link> / <span className="uppercase">{product.name}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px' }}>
                    {/* Image Gallery */}
                    <ProductGallery images={images} name={product.name} />

                    {/* Product Info */}
                    <div>
                        <div style={{ fontSize: '1.1rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                            {product.brand?.name || product.brand || 'Brand'}
                        </div>
                        <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>{product.name}</h1>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                                {product.salePrice ? `₹ ${product.salePrice.toLocaleString()}` : `₹ ${product.price?.toLocaleString()}`}
                            </span>
                            {product.originalPrice && (
                                <span style={{ textDecoration: 'line-through', color: '#999' }}>₹ {product.originalPrice.toLocaleString()}</span>
                            )}
                            {product.discount > 0 && (
                                <span style={{ color: 'green', fontSize: '0.9rem' }}>{product.discount}% OFF</span>
                            )}
                        </div>

                        <div style={{ marginBottom: '30px', fontSize: '1rem', lineHeight: '1.6', color: '#444' }}>
                            {product.description}
                        </div>

                        <ProductActions product={product} />

                        {/* Trust Badges */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', fontSize: '0.8rem', textAlign: 'center', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '20px 0' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                <ShieldCheck size={24} color="var(--color-primary)" />
                                <span>100% Authentic</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                <Truck size={24} color="var(--color-primary)" />
                                <span>Free Shipping</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                                <RefreshCw size={24} color="var(--color-primary)" />
                                <span>Easy Returns</span>
                            </div>
                        </div>

                        {/* Details Tab */}
                        <div style={{ marginTop: '30px' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Product Details</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                                {relatedDetails.map((d, i) => (
                                    <li key={i} style={{ marginBottom: '5px', color: '#555' }}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
