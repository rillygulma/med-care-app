import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import product from './images';

const ProductPage = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  
  return (
    <div className="product-page">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {product.map((imageUrl, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={imageUrl}
              alt={`Product ${index + 1}`}
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        ))}
      </div>
      <button
        className="add-to-cart-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        <FaShoppingCart className="inline-block mr-2" /> Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
