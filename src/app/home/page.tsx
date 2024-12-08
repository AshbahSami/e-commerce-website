'use client';
import { useState } from 'react';
import Sidebar from '../component/sideBar';
import ProductList from '../component/productList';

const Home = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const Featured = [
    { id: 1, image: '/Featured product.png' },
    { id: 2, image: '/Featured product1.png' },
    { id: 3, image: '/Component 3.png' },
    { id: 4, image: '/Component 4.png' },
  ];

  const Latest = [
    { id: 1, image: '/Component 9.png' },
    { id: 2, image: '/l.png' },
    { id: 3, image: '/Component 8.png' },
    { id: 4, image: '/Component 10.png' },
    { id: 5, image: '/Component 11.png' },
    { id: 6, image: '/Component 12.png' },
  ];

  const Trending = [
    { id: 1, image: '/Trending products.png' },
    { id: 2, image: '/Trending products (1).png' },
    { id: 3, image: '/Trending products (2).png' },
    { id: 4, image: '/Trending products (3).png' },
  ];

  const Top = [
    { id: 1, image: '/Featured product.png' },
    { id: 2, image: '/Featured product1.png' },
    { id: 3, image: '/Component 3.png' },
    { id: 4, image: '/Component 4.png' },
  ];

  return (
    <div className="flex flex-col sm:w-full">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="w-full p-4">
          <img src="promotional.png" alt="Promotional Banner" className="w-full h-auto mb-6" />

          {/* Featured Products Section */}
          <ProductList heading="Featured Products" products={Featured} view={view} />

          {/* Latest Products Section */}
          <ProductList heading="Latest Products" products={Latest} view={view} />

          <div className="py-6">
            <h1 className="text-center font-extrabold text-2xl sm:text-3xl">What Shopex Offers!</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {['24/7 Support', 'Free Delivery', 'Easy Returns', 'Fast Shipping'].map((title, index) => (
                <li key={index} className="flex justify-center">
                  <div className="w-[200px] bg-slate-100 rounded-lg p-4 text-center">
                    <img src="free-delivery 1.png" alt="Support" className="w-full h-auto mb-4" />
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <img src="unique feature sofa.png" alt="Unique Feature" className="w-full h-auto my-6" />

          {/* Trending Products Section */}
          <ProductList heading="Trending Products" products={Trending} view={view} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            <img src="Group 154.png" alt="Group Image 1" className="row-span-2 w-full h-auto" />
            <img src="Group 155.png" alt="Group Image 2" className="row-span-2 w-full h-auto" />
            <div className="space-y-4">
              <img src="1.png" alt="Image 1" className="w-full h-auto" />
              <img src="2.png" alt="Image 2" className="w-full h-auto" />
              <img src="3.png" alt="Image 3" className="w-full h-auto" />
            </div>
          </div>

          <h1 className="text-center py-6 font-extrabold text-2xl sm:text-3xl">Discount Items</h1>
          <img src="discount sofa.png" alt="Discount Banner" className="w-full h-auto mb-6" />

          {/* Discount Products Section */}
          <ProductList heading="Discount Items" products={Top} view={view} />

          <img src="Group 162.png" alt="Discount Image" className="w-full h-auto my-6" />

          {/* Latest Blog Section */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['leatest blog.png', 'leatest blog (1).png', 'leatest blog (2).png'].map((src, index) => (
              <li key={index} className="w-full">
                <img src={src} alt={`Latest Blog ${index + 1}`} className="w-full h-auto" />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Home;
