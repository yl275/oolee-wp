'use client'

import React from 'react';


interface Product {
  id: number;
  title: string;
  imageUrl: string;
  brandLogo: string;
  brandName: string;
  isFeatured?: boolean;
}

const products: Product[] = [
  {
    id: 14,
    title: 'Save across the entire Koala range of Furniture & Bedding',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25040922193559_ByronOS.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25040922193559_Koala_Logotype_BLK_(1)_(1).png',
    brandName: 'Koala',
    isFeatured: true
  },
  {
    id: 24,
    title: 'Exclusive oolee savings with the Mobile Tyre Shop.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25041519115740_MTS_FITTING_1200x600.jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25041519115740_Screenshot_2025-04-07_182543.png',
    brandName: 'Mobile Tyre Shop',
    isFeatured: true
  },
  {
    id: 42,
    title: 'Save BIG on Breville Appliances',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25061221525057_Breville1.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25060120143243_1-1_Logo-300x300-7399352_(002).jpg',
    brandName: 'Breville',
    isFeatured: true
  },
  {
    id: 46,
    title: 'Save on Car Rentals with Hertz.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25062519582868_Hertz_.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25062519582868_Hertz_Favicon.png',
    brandName: 'Hertz',
    isFeatured: true
  },
  {
    id: 47,
    title: 'oolee Members Save with Chemist Direct.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25070922504649_pexels-anntarazevich-5910953.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25070922470793_300397773_606336407726620_5913229294465004587_n.png',
    brandName: 'Chemist Direct',
    isFeatured: true
  },
  {
    id: 49,
    title: 'Save on full priced and sale items at Peter Jackson',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25072422173026_Peter-Jackson-1920x1080-2.jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25082620583810_Peter_Jackson_Favicon.png',
    brandName: 'Peter Jackson',
    isFeatured: true
  }
];

interface ProductCardProps {
  product: Product;
  onRedirect: (id: number, title: string) => void;
  onRedeem: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onRedirect, onRedeem }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <div className="mb-3">
        <a 
          onClick={() => onRedirect(product.id, product.title)}
          className="block cursor-pointer no-underline"
        >
          <div className="relative">
            <div>
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-48 object-cover rounded"
              />
            </div>
            
            {product.isFeatured && (
              <div className="absolute top-2 left-2 bg-[#DD388B] text-white px-3 py-1 text-xs font-bold rounded-2xl border-amber-50 border-1">
                Featured
              </div>
            )}
            
            <div className="absolute bottom-2 right-2">
              <img 
                src={product.brandLogo} 
                alt={product.brandName} 
                className="w-10 h-10 object-contain bg-white bg-opacity-90 rounded p-1"
              />
            </div>
          </div>
        </a>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="mb-3 flex-1">
          <p className="text-sm leading-relaxed text-gray-700 text-left">
            {product.title}
          </p>
        </div>
        <div className="border-t border-gray-300 mb-3"></div>
        <div className='self-end rounded-2xl border-1 py-2 px-4 border-gray-200
        hover:border-[#ff3366]'>
          
          <button 
            onClick={() => onRedeem(product.id)}
            className="w-full bg-[#ffffff]  
            text-black border-none rounded text-sm font hover:text-[#ff3366]
            cursor-pointer transition-colors duration-300 hover:scale-105
            
            "
          >
            Claim Your Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AllProducts() {
  const handleRedirectToProduct = (id: number, title: string) => {
    // RedirectToViewProduct function implementation
    console.log(`Redirecting to product ${id}: ${title}`);
    // Add your navigation logic here
  };

  const handleRedeemOffer = (id: number) => {
    // ReedemOffer function implementation
    console.log(`Redeeming offer ${id}`);
    // Add your redemption logic here
  };


  return (
    <div id="allProduct" className="py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRedirect={handleRedirectToProduct}
              onRedeem={handleRedeemOffer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}