'use client'

import React, { useState, useRef, useEffect } from "react";

export default function Header() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{top: number, left: number} | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
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
  
  const handleSubcategoryClick = () => {
    if (window.innerWidth <= 1023) {
      setIsMobileMenuOpen(false);
      setActiveCategory(null);
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
        .mobile-menu-overlay {
          display: none;
        }
        
        @media (max-width: 1023px) {
          .mobile-menu-overlay {
            display: ${isMobileMenuOpen ? 'block' : 'none'};
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
            animation: fadeIn 0.3s ease;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }
        
        .mobile-menu-toggle {
          display: none;
        }
        
        @media (max-width: 1023px) {
          .mobile-menu-toggle {
            display: block;
            position: fixed;
            top: clamp(8px, 2vw, 15px);
            right: clamp(8px, 2vw, 15px);
            z-index: 1002;
            background-color: #ff3366;
            border: none;
            border-radius: clamp(6px, 1.5vw, 10px);
            padding: clamp(8px, 2vw, 12px) clamp(10px, 2.5vw, 14px);
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
          }
          
          .mobile-menu-toggle:hover {
            background-color: #ff1a4d;
            transform: scale(1.05);
          }
          
          .mobile-menu-toggle:active {
            transform: scale(0.95);
          }
          
          .hamburger-icon {
            display: flex;
            flex-direction: column;
            gap: clamp(3px, 0.8vw, 5px);
            width: clamp(20px, 4.5vw, 28px);
          }
          
          .hamburger-line {
            width: 100%;
            height: clamp(2px, 0.4vw, 3px);
            background-color: white;
            border-radius: 2px;
            transition: all 0.3s ease;
          }
          
          .mobile-menu-toggle.open .hamburger-line:nth-child(1) {
            transform: translateY(clamp(5px, 1.2vw, 7px)) rotate(45deg);
          }
          
          .mobile-menu-toggle.open .hamburger-line:nth-child(2) {
            opacity: 0;
          }
          
          .mobile-menu-toggle.open .hamburger-line:nth-child(3) {
            transform: translateY(clamp(-5px, -1.2vw, -7px)) rotate(-45deg);
          }
        }
      
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
            display: ${isMobileMenuOpen ? 'flex' : 'none'} !important;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start;
            padding: clamp(8px, 2vw, 15px) clamp(5px, 1.5vw, 10px);
            overflow: visible;
            gap: clamp(5px, 1.5vw, 10px);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: #FAFAFA;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            animation: slideDown 0.3s ease;
            max-height: 90vh;
            overflow-y: auto;
          }
          
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          .scroll-spacer-left,
          .scroll-spacer-right {
            display: none;
          }
          
          #allcategory::-webkit-scrollbar {
            width: clamp(3px, 0.5vw, 5px);
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
            margin: 0;
            min-width: clamp(60px, 12vw, 90px);
            flex: 0 0 auto;
            width: clamp(60px, 12vw, 90px);
          }
          
          .category-block:first-child {
            margin-left: 0;
          }
          
          .category-block:last-child {
            margin-right: 0;
          }
          
          .category-icon img {
            width: clamp(20px, 4.5vw, 30px);
            height: clamp(20px, 4.5vw, 30px);
          }
          
          .category-title {
            font-size: clamp(9px, 2vw, 12px);
          }
          
          .aerooe {
            width: clamp(6px, 1.5vw, 10px);
            height: clamp(6px, 1.5vw, 10px);
            margin-left: clamp(2px, 0.5vw, 4px);
          }
          
          .subcategory-dropdown {
            min-width: clamp(100px, 20vw, 150px);
            padding: clamp(6px, 1.5vw, 10px);
          }
          
          .subcategory-item {
            padding: clamp(4px, 1vw, 8px) clamp(6px, 1.5vw, 10px);
            font-size: clamp(10px, 2vw, 13px);
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
      
      <div 
        className="mobile-menu-overlay"
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      <button 
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <div className="hamburger-icon">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </button>
      
      <div id="allcategory">
        <div className="scroll-spacer-left"></div>
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
            <div className="subcategory-item" data-category-id="1" data-subcategory-id="14" onClick={handleSubcategoryClick}>
              New Cars
            </div>
            <div className="subcategory-item" data-category-id="1" data-subcategory-id="20" onClick={handleSubcategoryClick}>
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
            <div className="subcategory-item" data-category-id="2" data-subcategory-id="15" onClick={handleSubcategoryClick}>
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
            <div className="subcategory-item" data-category-id="3" data-subcategory-id="3" onClick={handleSubcategoryClick}>
              Meal Services
            </div>
            <div className="subcategory-item" data-category-id="3" data-subcategory-id="4" onClick={handleSubcategoryClick}>
              Energy
            </div>
            <div className="subcategory-item" data-category-id="3" data-subcategory-id="17" onClick={handleSubcategoryClick}>
              Beer & Wine
            </div>
            <div className="subcategory-item" data-category-id="3" data-subcategory-id="24" onClick={handleSubcategoryClick}>
              Pharmacy & Vitamins
            </div>
            <div className="subcategory-item" data-category-id="3" data-subcategory-id="25" onClick={handleSubcategoryClick}>
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
            <div className="subcategory-item" data-category-id="4" data-subcategory-id="5" onClick={handleSubcategoryClick}>
              Footwear
            </div>
            <div className="subcategory-item" data-category-id="4" data-subcategory-id="6" onClick={handleSubcategoryClick}>
              Fashion
            </div>
            <div className="subcategory-item" data-category-id="4" data-subcategory-id="7" onClick={handleSubcategoryClick}>
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
            <div className="subcategory-item" data-category-id="5" data-subcategory-id="16" onClick={handleSubcategoryClick}>
              Furniture
            </div>
            <div className="subcategory-item" data-category-id="5" data-subcategory-id="19" onClick={handleSubcategoryClick}>
              Appliances
            </div>
            <div className="subcategory-item" data-category-id="5" data-subcategory-id="21" onClick={handleSubcategoryClick}>
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
            <div className="subcategory-item" data-category-id="6" data-subcategory-id="18" onClick={handleSubcategoryClick}>
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
            <div className="subcategory-item" data-category-id="7" data-subcategory-id="11" onClick={handleSubcategoryClick}>
              Car Rentals
            </div>
            <div className="subcategory-item" data-category-id="7" data-subcategory-id="12" onClick={handleSubcategoryClick}>
              Cruises
            </div>
            <div className="subcategory-item" data-category-id="7" data-subcategory-id="13" onClick={handleSubcategoryClick}>
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
            <div className="subcategory-item" data-category-id="8" data-subcategory-id="8" onClick={handleSubcategoryClick}>
              Photography & Video
            </div>
            <div className="subcategory-item" data-category-id="8" data-subcategory-id="9" onClick={handleSubcategoryClick}>
              Phones
            </div>
            <div className="subcategory-item" data-category-id="8" data-subcategory-id="23" onClick={handleSubcategoryClick}>
              Computers & Tablets
            </div>
          </div>
        </div>
        <div className="scroll-spacer-right"></div>
      </div>
    </>
  );
}