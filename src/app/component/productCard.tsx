// components/ProductCard.tsx
'use client';

interface ProductCardProps {
  product: { id: number, image: string };
  view: 'grid' | 'list';
}

const ProductCard = ({ product, view }: ProductCardProps) => {
  if (!product) {
    return <p>Product data is missing</p>;
  }

  return (
    <div className={`p-4 border rounded-lg ${view === 'grid' ? 'w-full' : 'flex'}`}>
      <img src={product.image} alt={`Product ${product.id}`} className="w-full  object-fit " />
    </div>
  );
};

export default ProductCard;
