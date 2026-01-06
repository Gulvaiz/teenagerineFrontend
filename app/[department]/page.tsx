
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import { fetchProducts } from '@/lib/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
    return [
        { department: 'women' },
        { department: 'men' },
        { department: 'kids' },
    ];
}

export default async function DepartmentPage({
    params,
    searchParams
}: {
    params: Promise<{ department: string }>,
    searchParams: Promise<{ [key: string]: string }>
}) {
    const { department } = await params;
    const resolvedSearchParams = await searchParams;

    // Validate department to avoid matching things like favicon.ico if not handled
    const validDepartments = ['women', 'men', 'kids', 'sale', 'new-arrivals'];
    if (!validDepartments.includes(department)) {
        // If it's not a known department, maybe let it 404 or handle differently
        // But Next.js app router dynamic routes might catch other things
    }

    // Prepare params for API
    // Mapping frontend department to backend expected params (assuming 'category' or 'gender')
    const queryParams: any = {
        ...resolvedSearchParams,
        limit: '20'
    };

    if (department === 'new-arrivals') {
        queryParams.sort = 'newest';
    } else if (department === 'sale') {
        queryParams.category = 'sale';
    } else {
        queryParams.gender = department; // or category: department
    }

    const productsData = await fetchProducts(queryParams);
    const products = Array.isArray(productsData) ? productsData : [];

    const title = department.replace('-', ' ').toUpperCase();

    return (
        <>

            <main className="container" style={{ padding: '40px 20px' }}>
                <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#666', textTransform: 'capitalize' }}>
                    <Link href="/">Home</Link> / <span>{department.replace('-', ' ')}</span>
                </div>

                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '30px', fontSize: '2rem', fontWeight: 'bold' }}>
                    {title}
                </h1>

                <div style={{ display: 'flex', gap: '40px', flexDirection: 'row' }}>
                    <div className="desktopFilters" style={{ width: '280px', flexShrink: 0 }}>
                        <FilterSidebar />
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
                            <span>Showing {products.length} products</span>
                        </div>

                        {products.length > 0 ? (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                                gap: '30px'
                            }}>
                                {products.map((p: any) => (
                                    <ProductCard
                                        key={p._id || p.id}
                                        id={p._id || p.id}
                                        name={p.name}
                                        brand={p.primaryBrand?.name || p.brand || 'Luxury Brand'}
                                        price={p.price}
                                        image={p.image || p.images?.[0] || 'https://via.placeholder.com/300x400'}
                                        soldOut={p.stockQuantity === 0 || p.soldOut === true}
                                        originalPrice={p.originalPrice}
                                        salePrice={p.salePrice}
                                        discount={p.discount}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                                <p>No products found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

        </>
    );
}
