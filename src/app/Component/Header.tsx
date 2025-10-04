'use client'

import React, { useState, useRef, useEffect } from "react";

export default function Header() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{top: number, left: number} | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  const handleCategoryClick = (categoryId: string, event: React.MouseEvent) => {
    if (window.innerWidth <= 1023) {
      // Mobile behavior: toggle dropdown on click
      const newActiveCategory = activeCategory === categoryId ? null : categoryId;
      setActiveCategory(newActiveCategory);
      
      if (newActiveCategory) {
        // Calculate position for fixed dropdown
        const rect = event.currentTarget.getBoundingClientRect();
        const dropdown = event.currentTarget.querySelector('.subcategory-dropdown') as HTMLElement;
        if (dropdown) {
          dropdown.style.left = `${rect.left + rect.width / 2}px`;
          dropdown.style.top = `${rect.bottom + 5}px`;
        }
      }
    }
  };
  
  // Close dropdown when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth <= 1023 && activeCategory) {
        const target = event.target as HTMLElement;
        if (!target.closest('.category-block')) {
          setActiveCategory(null);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeCategory]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setActiveCategory(null);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        #allcategory {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          overflow: visible;
          background-color: #fff;
          border-bottom: 1px solid #ddd;
          background: #FAFAFA;
          border-top: 1px solid #ddd;
          padding: 0px 0;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1023px) {
          #allcategory {
            display: flex !important;
            padding: 5px 10px;
            overflow-x: auto;
            overflow-y: visible;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
            scrollbar-color: #ccc transparent;
            gap: 0;
            position: relative;
            z-index: 1000;
          }
          
          #allcategory::-webkit-scrollbar {
            height: 4px;
          }
          
          #allcategory::-webkit-scrollbar-track {
            background: transparent;
          }
          
          #allcategory::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 2px;
          }
          
          #allcategory::-webkit-scrollbar-thumb:hover {
            background-color: #999;
          }
          
          .category-block {
            margin: 2px 8px;
            min-width: 60px;
            flex-shrink: 0;
          }
          
          .category-icon img {
            width: 25px;
            height: 25px;
          }
          
          .category-title {
            font-size: 10px;
          }
          
          .aerooe {
            width: 8px;
            height: 8px;
            margin-left: 3px;
          }
          
          .subcategory-dropdown {
            min-width: 120px;
            padding: 8px;
          }
          
          .subcategory-item {
            padding: 6px 8px;
            font-size: 11px;
          }
        }
        
        @media (max-width: 640px) {
          .category-block {
            margin: 1px 4px;
            min-width: 50px;
            flex-shrink: 0;
          }
          
          .category-icon img {
            width: 20px;
            height: 20px;
          }
          
          .category-title {
            font-size: 9px;
          }
          
          .aerooe {
            width: 6px;
            height: 6px;
            margin-left: 2px;
          }
          
          .subcategory-dropdown {
            min-width: 100px;
            padding: 6px;
          }
          
          .subcategory-item {
            padding: 4px 6px;
            font-size: 10px;
          }
        }

        .category-block {
          position: relative;
          margin: 5px 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0px;
          border-radius: 8px;
          min-width: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .category-block:hover {
          background-color: #f0f0f0;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .category-icon {
          margin-bottom: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .category-icon img {
          width: 35px;
          height: 35px;
          transition: transform 0.3s ease;
          
        }

        .category-block:hover .category-icon img {
          transform: scale(1.1);
        }

        .category-title {
          font-size: 12px;
          color: #555;
          transition: color 0.3s ease;
          font-weight: 500;
        }

        .category-block:hover .category-title {
          color: #ff3366;
        }

        .subcategory-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #fff;
          border: 1px solid #ddd;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          padding: 10px;
          z-index: 9999;
          min-width: 150px;
          margin-top: 5px;
        }

        .category-block:hover .subcategory-dropdown {
          display: block;
          animation: fadeInUp 0.3s ease;
        }
        
        /* Disable hover effects on mobile */
        @media (max-width: 1023px) {
          .category-block:hover {
            background-color: transparent;
            transform: none;
            box-shadow: none;
          }
          
          .category-block:hover .category-icon img {
            transform: none;
          }
          
          .category-block:hover .category-title {
            color: #555;
          }
          
          .category-block:hover .aerooe {
            transform: none;
          }
          
          .category-block:hover .subcategory-dropdown {
            display: none;
          }
          
          /* Show dropdown only when clicked */
          .category-block.active .subcategory-dropdown {
            display: block;
            animation: fadeInUp 0.3s ease;
            z-index: 1001;
            position: fixed;
            transform: translateX(-50%);
          }
          
          .category-block.active .aerooe {
            transform: rotate(180deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .subcategory-item {
          padding: 8px 12px;
          font-size: 13px;
          color: #333;
          text-align: left;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .subcategory-item:hover {
          background-color: #f8f8f8;
          color: #ff3366;
          transform: translateX(5px);
        }


        .aerooe {
          width: 12px;
          height: 12px;
          margin-left: 5px;
          transition: transform 0.3s ease;
        }

        .category-block:hover .aerooe {
          transform: rotate(180deg);
        }
      `}</style>
      
      <div id="allcategory">
        <div 
          className={`category-block ${activeCategory === 'all' ? 'active' : ''}`}
          data-category-id="null" 
          data-subcategory-id="null" 
          onClick={(e) => {
            if (window.innerWidth <= 1023) {
              handleCategoryClick('all', e);
            } else {
              location.reload();
            }
          }}
          onMouseEnter={() => setHoveredCategory('all')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="category-icon">
            <img src="https://app.oolee.com.au/Image/Oolee/alls.png" alt="All" />
          </div>
          <div className="category-title">All</div>
        </div>
        
        <div 
          className={`category-block ${activeCategory === 'auto' ? 'active' : ''}`}
          onClick={(e) => handleCategoryClick('auto', e)}
          onMouseEnter={() => setHoveredCategory('auto')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="category-icon">
            <img src="https://admin.oolee.com.au//Content/Category/25040422261146_Frame_1171277779.png" alt="Auto & Transport" />
          </div>
          <div className="category-title">
            Auto & Transport
            <img className="aerooe" src="/Image/Oolee/Vectoraccorden.png" />
          </div>
          <div className="subcategory-dropdown">
            <div className="subcategory-item" data-category-id="1" data-subcategory-id="14">
              New Cars
            </div>
            <div className="subcategory-item" data-category-id="1" data-subcategory-id="20">
              Wheels & Tyres
            </div>
          </div>
        </div>
      
        <div 
          className={`category-block ${activeCategory === 'health' ? 'active' : ''}`}
          onClick={(e) => handleCategoryClick('health', e)}
          onMouseEnter={() => setHoveredCategory('health')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="category-icon">
            <img src="https://admin.oolee.com.au//Content/Category/25040422501150_Frame_39519.png" alt="Health & Fitness" />
          </div>
          <div className="category-title">
            Health & Fitness
            <img className="aerooe" src="/Image/Oolee/Vectoraccorden.png" />
          </div>
          <div className="subcategory-dropdown">
            <div className="subcategory-item" data-category-id="2" data-subcategory-id="15">
              Exercise Equipment
            </div>
          </div>
        </div>
        
        <div 
          className={`category-block ${activeCategory === 'everyday' ? 'active' : ''}`}
          onClick={(e) => handleCategoryClick('everyday', e)}
          onMouseEnter={() => setHoveredCategory('everyday')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="category-icon">
            <img src="https://admin.oolee.com.au//Content/Category/25040613570482_fuel_1.png" alt="Everyday" />
          </div>
          <div className="category-title">
            Everyday
            <img className="aerooe" src="/Image/Oolee/Vectoraccorden.png" />
          </div>
          <div className="subcategory-dropdown">
            <div className="subcategory-item" data-category-id="3" data-subcategory-id="3">
              Meal Services
            </div>
            <div className="subcategory-item" data-category-id="3" data-subcategory-id="4">
              Energy
            </div>
            <div className="subcategory-item" data-category-id="3" data-subcategory-id="17">
              Beer & Wine
            </div>
            <div className="subcategory-item" data-category-id="3" data-subcategory-id="24">
              Pharmacy & Vitamins
            </div>
            <div className="subcategory-item" data-category-id="3" data-subcategory-id="25">
              Health Insurance
            </div>
          </div>
        </div>
      
        <div 
          className={`category-block ${activeCategory === 'shopping' ? 'active' : ''}`}
          onClick={(e) => handleCategoryClick('shopping', e)}
          onMouseEnter={() => setHoveredCategory('shopping')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="category-icon">
            <img src="https://admin.oolee.com.au//Content/Category/25040617200253_Frame_39517.png" alt="Shopping" />
          </div>
          <div className="category-title">
            Shopping
            <img className="aerooe" src="/Image/Oolee/Vectoraccorden.png" />
          </div>
          <div className="subcategory-dropdown">
            <div className="subcategory-item" data-category-id="4" data-subcategory-id="5">
              Footwear
            </div>
            <div className="subcategory-item" data-category-id="4" data-subcategory-id="6">
              Fashion
            </div>
            <div className="subcategory-item" data-category-id="4" data-subcategory-id="7">
              Bags & Luggage
            </div>
          </div>
        </div>
        
        <div 
          className={`category-block ${activeCategory === 'house' ? 'active' : ''}`}
          onClick={(e) => handleCategoryClick('house', e)}
          onMouseEnter={() => setHoveredCategory('house')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="category-icon">
            <img src="https://admin.oolee.com.au//Content/Category/25040617364791_plant_1.png" alt="House & Garden" />
          </div>
          <div className="category-title">
            House & Garden
            <img className="aerooe" src="/Image/Oolee/Vectoraccorden.png" />
          </div>
          <div className="subcategory-dropdown">
            <div className="subcategory-item" data-category-id="5" data-subcategory-id="16">
              Furniture
            </div>
            <div className="subcategory-item" data-category-id="5" data-subcategory-id="19">
              Appliances
            </div>
            <div className="subcategory-item" data-category-id="5" data-subcategory-id="21">
              Homewares
            </div>
          </div>
        </div>
      
        <div 
          className={`category-block ${activeCategory === 'wellness' ? 'active' : ''}`}
          onClick={(e) => handleCategoryClick('wellness', e)}
          onMouseEnter={() => setHoveredCategory('wellness')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="category-icon">
            <img src="https://admin.oolee.com.au//Content/Category/25040617372463_lotus_(3)_1.png" alt="Wellness & Beauty" />
          </div>
          <div className="category-title">
            Wellness & Beauty
            <img className="aerooe" src="/Image/Oolee/Vectoraccorden.png" />
          </div>
          <div className="subcategory-dropdown">
            <div className="subcategory-item" data-category-id="6" data-subcategory-id="18">
              Beauty
            </div>
          </div>
        </div>
        
        <div 
          className={`category-block ${activeCategory === 'travel' ? 'active' : ''}`}
          onClick={(e) => handleCategoryClick('travel', e)}
          onMouseEnter={() => setHoveredCategory('travel')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="category-icon">
            <img src="https://admin.oolee.com.au//Content/Category/25040617375480_travel_(2)_1.png" alt="Travel" />
          </div>
          <div className="category-title">
            Travel
            <img className="aerooe" src="/Image/Oolee/Vectoraccorden.png" />
          </div>
          <div className="subcategory-dropdown">
            <div className="subcategory-item" data-category-id="7" data-subcategory-id="11">
              Car Rentals
            </div>
            <div className="subcategory-item" data-category-id="7" data-subcategory-id="12">
              Cruises
            </div>
            <div className="subcategory-item" data-category-id="7" data-subcategory-id="13">
              Travel Insurance
            </div>
          </div>
        </div>
        
        <div 
          className={`category-block ${activeCategory === 'technology' ? 'active' : ''}`}
          onClick={(e) => handleCategoryClick('technology', e)}
          onMouseEnter={() => setHoveredCategory('technology')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="category-icon">
            <img src="https://admin.oolee.com.au//Content/Category/25040617384015_suitcase_(2)_1.png" alt="Technology" />
          </div>
          <div className="category-title">
            Technology
            <img className="aerooe" src="/Image/Oolee/Vectoraccorden.png" />
          </div>
          <div className="subcategory-dropdown">
            <div className="subcategory-item" data-category-id="8" data-subcategory-id="8">
              Photography & Video
            </div>
            <div className="subcategory-item" data-category-id="8" data-subcategory-id="9">
              Phones
            </div>
            <div className="subcategory-item" data-category-id="8" data-subcategory-id="23">
              Computers & Tablets
            </div>
          </div>
        </div>
      </div>
    </>
  );
}