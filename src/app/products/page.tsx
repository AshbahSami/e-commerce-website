'use client';

import { useState } from 'react';
import ProductList from '../component/productList';

const ProductListPage = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const allProducts = [
    { id: 1, image: '/Featured product.png' },
    { id: 2, image: '/Featured product1.png' },
    { id: 3, image: '/Component 3.png' },
    { id: 4, image: '/Component 4.png' },
    // Add more products as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-extrabold py-6">All Products</h1>
      <ProductList heading="All Products" products={allProducts} view={view} />
    </div>
  );
};

export default ProductListPage;
