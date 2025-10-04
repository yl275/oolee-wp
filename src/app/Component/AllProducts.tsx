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
  },
  {
    id: 51,
    title: 'Exclusive Offers on LG Products',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25091820533007_WashTower_Lifestyle-green-beige-24-v1_(1).jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25081121110348_lg_logo_icon_1712621.png',
    brandName: 'LG',
    isFeatured: true
  },
  {
    id: 52,
    title: 'Save with Fleet Pricing from Subaru',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25082620490603_Forester_PNG.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25082620531165_Subaru_Favicon.png',
    brandName: 'SUBARU',
    isFeatured: true
  },
  {
    id: 53,
    title: 'Save on Sim Only Mobile Plans with Lyca Mobile',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25090920463915_Screenshot_2025-09-09_201605.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25090921353879_Lyca_Favicon.png',
    brandName: 'Lyca Mobile',
    isFeatured: true
  },
  {
    id: 54,
    title: 'Save on the signature Ultrahuman Ring AIR',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25091619523789_image_(38).png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25091619523789_Ultrahuman_Favicon.png',
    brandName: 'Ultrahuman',
    isFeatured: true
  },
  {
    id: 1,
    title: 'My Muscle Chef is all about offering smart nutrition that enables you to feel your best.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25040423071862_Corporate_Program_Image_for_Partners.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25040423071862_My_Muscle_Chef_Approved_Logo-Black.jpg',
    brandName: 'Muscle Chef',
    isFeatured: false
  },
  {
    id: 4,
    title: 'New & returning customers enjoy HelloFresh for up to 10 weeks discounted.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25040514343413_HF_Y23_L_W21_AUS_OOH__109-1_high.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25040921544780_27.-HelloFresh-App_Feature_Image.jpg',
    brandName: 'HelloFresh',
    isFeatured: false
  },
  {
    id: 6,
    title: 'New Youfoodz customers access exclusive savings across your first 13 boxes.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25040615071338_Screenshot_2025-04-05_155404.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25040615071338_Screenshot_2025-04-06_143109.png',
    brandName: 'Youfoodz',
    isFeatured: false
  },
  {
    id: 7,
    title: 'Save across your first 13 EveryPlate boxes.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25040920342445_cropped-240222_i2_EveryPlate_02_0767.jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25040615444943_EveryPlate_Main_Logo_RGB.png',
    brandName: 'EveryPlate',
    isFeatured: false
  },
  {
    id: 8,
    title: 'Big savings across a huge range of New Balance products.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25052720201171_cropped-cropped-241126_NewBalance_QuincyWilson_Locker-Room_Rebel_01450-Enhanced-NR_(1).jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25040921173601_NB.png',
    brandName: 'New Balance',
    isFeatured: false
  },
  {
    id: 9,
    title: 'Energy Australia is proud to reward oolee members with best in market energy plans.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25040920554148_cropped-Ea1.jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25040616595640_Screenshot_2025-04-06_162755.png',
    brandName: 'EnergyAustralia',
    isFeatured: false
  },
  {
    id: 11,
    title: 'Save on Travel Insurance',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25040919213763_WAS_Insurance_Image_3.jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25040919213763_WAS_Insurance_Logo_-_300x300.png',
    brandName: 'WAS Insurance',
    isFeatured: false
  },
  {
    id: 13,
    title: 'Save on Premium Bedlinen',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25040921520321_lh-au-commission_factory-oolee-1280x720-03_(002).jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25040921520321_download_(1).png',
    brandName: 'Linen House',
    isFeatured: false
  },
  {
    id: 15,
    title: 'Oolee members save on new arrivals and all full prices styles.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25041314123322_cropped-1Q2BkWXZ.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25041314123322_WC.PNG',
    brandName: 'White & Co.',
    isFeatured: false
  },
  {
    id: 16,
    title: 'Big savings off Nikon cameras, lenses, binoculars and rangefinders.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25051815573169_Nikon.jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25041214160693_Logo_200_x_200.png',
    brandName: 'Nikon',
    isFeatured: false
  },
  {
    id: 18,
    title: 'Save on endota Products,',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25041214315389_cropped-Product_Cutaway_0732.jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25041214315389_endota-7738-SQ_-_300_x_300.png',
    brandName: 'endota',
    isFeatured: false
  },
  {
    id: 22,
    title: 'Save on NordicTrack Equipment',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25041420560788_Screenshot_2025-04-14_200908.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25041420560786_download_(2).png',
    brandName: 'NordicTrack',
    isFeatured: false
  },
  {
    id: 25,
    title: 'Save on Wacom creative pen tablets',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25041519432243_Screenshot_2025-04-15_190526.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25041519432243_images.png',
    brandName: 'Wacom',
    isFeatured: false
  },
  {
    id: 26,
    title: 'Save on IMBIBE with oolee',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25091212132644_IMBIBE_Oolee.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25042919143893_IMBIBE__Oolee_Logo_300x300.png',
    brandName: 'IMBIBE',
    isFeatured: false
  },
  {
    id: 27,
    title: 'Special pricing on you next Nissan',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25050920574856_x-trail-sto-component.jpg.ximg.l_full_h.smart.jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25050920422587_nissan-brand-logo-1200x938-1594842787.png',
    brandName: 'Nissan',
    isFeatured: false
  },
  {
    id: 28,
    title: 'Exclusive Account Credit Offer',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25050714370593_AdobeStock_1654156682.jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25090107255623_images_(1).png',
    brandName: 'Energy Locals',
    isFeatured: false
  },
  {
    id: 29,
    title: 'Great Savings from Brooks Running',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25050715162567_F25_FEB_LA_Ghost17__2159_.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25050715162567_brooks-stacked-blue_copy.png',
    brandName: 'Brooks Running',
    isFeatured: false
  },
  {
    id: 30,
    title: 'Save Sitewide with EMU Australia',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25051220494641_Sharky_Scuff1_(002).png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25050715433114_EMU_Australia_Logo_300_x_300.png',
    brandName: 'EMU Australia',
    isFeatured: false
  },
  {
    id: 32,
    title: 'Save everyday at Kakadu Plum Co.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25051418254260_Lifestyle169.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25051418254260_KPC_logo_300X300.png',
    brandName: 'Kakadu Plum Co.',
    isFeatured: false
  },
  {
    id: 33,
    title: 'Save on all styles at One Honey Boutique',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25062420123617_One_Honey_1.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25051608132291_One_Honey_Favicon.jpg',
    brandName: 'One Honey Boutique',
    isFeatured: false
  },
  {
    id: 38,
    title: 'Save on Full Priced Luggage and Accessories at Antler',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25061021400981_Antler3.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25052720361825_Antler_Wordmark_B.png',
    brandName: 'Antler',
    isFeatured: false
  },
  {
    id: 41,
    title: 'Save on your first case from Wine Selectors.',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25061020435649_Wine_Selectors_Image_2.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25060120083949_Wine_Selectors_Logo_-_300x300_(1).png',
    brandName: 'Wine Selectors',
    isFeatured: false
  },
  {
    id: 43,
    title: 'Save on cruises with Norwegian Cruise Lines',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25062010412884_NCL1.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25060320321474_NCL_Logo.png',
    brandName: 'ecruising Travel',
    isFeatured: false
  },
  {
    id: 48,
    title: 'Save on Health Insurance with nib',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25072421570726_NIB_3.png',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25090107222754_nib-badge.png',
    brandName: 'nib',
    isFeatured: false
  },
  {
    id: 50,
    title: 'Save everyday at Wheel & Barrow',
    imageUrl: 'https://admin.oolee.com.au//Content/NewOfferImages/25072422370612_W&B_winter25_0419.jpg',
    brandLogo: 'https://admin.oolee.com.au//Content/Brand/25072422370612_Wheel_&_Barrow_Favicon.png',
    brandName: 'Wheel & Barrow',
    isFeatured: false
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