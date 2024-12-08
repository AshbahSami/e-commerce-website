// components/ProductList.tsx
'use client';

import ProductCard from './productCard';

interface ProductListProps {
  heading: string;
  products: { id: number, image: string }[];
  view: 'grid' | 'list';
}

const ProductList = ({ heading, products, view }: ProductListProps) => {
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold">{heading}</h2>
      <div className={view === 'grid' ? 'grid grid-cols-4 gap-4' : 'space-y-4'}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} view={view} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
