import { Typography } from '@mui/material';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

interface RelatedProductsProps {
  products: Product[];
}

const ProductCard: React.FC<Product> = ({ name, description, imageUrl }) => (
  <div className="flex flex-col">
    <Image
      src={imageUrl}
      alt={name}
      width={200}
      height={300}
      className="w-full object-contain"
    />
    <Typography className="mt-2 text-lg font-semibold">{name}</Typography>
    <Typography className="text-sm text-gray-600">{description}</Typography>
  </div>
);

export default function RelatedProducts(props: RelatedProductsProps) {
  const { products } = props;
  return (
    <div className="mx-auto max-w-4xl">
      <Typography sx={{ color: 'var(--text-secondary, rgba(0, 0, 0, 0.60))' }}>
        Related Products
      </Typography>
      <div className="grid grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
