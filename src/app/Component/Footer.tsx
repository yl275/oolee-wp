import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa6';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFECF7] py-10 px-4 md:px-0">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Social Media Section */}
          <div className="md:col-span-6">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="https://app.oolee.com.au/Image/Oolee/logo1.png" 
                alt="Oolee Logo" 
                width={125} 
                height={40}
                className="w-[125px] h-auto"
              />
            </Link>
            
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-[#ff3366] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <FaFacebookF
                    size={15}
                    color="#000"
                />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-[#ff3366] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                    size={15}
                    color="#000"
                />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-[#ff3366] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram
                    size={15}
                    color="#000"
                />
              </a>
              <a 
                href="https://www.pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-[#ff3366] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Pinterest"
              >
                <FaPinterest
                    size={15}
                    color="#000"
                />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#" 
                  className="text-gray-600 hover:text-[#ff3366] transition-colors duration-200"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-gray-600 hover:text-[#ff3366] transition-colors duration-200"
                >
                  New Offers
                </Link>
              </li>
              <li>
                <Link 
                  href="/BusinessPartnerLogin/BusinessPartnerLogin" 
                  className="text-gray-600 hover:text-[#ff3366] transition-colors duration-200"
                >
                  Business
                </Link>
              </li>
              <li>
                <a 
                  href="https://oolee.com.au/help/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#ff3366] transition-colors duration-200"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://oolee.com.au/legal/#Terms%20and%20Conditions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#ff3366] transition-colors duration-200"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a 
                  href="https://oolee.com.au/legal/#privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#ff3366] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://oolee.com.au/help/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#ff3366] transition-colors duration-200"
                >
                  FAQ&apos;s
                </a>
              </li>
              <li>
                <a 
                  href="https://oolee.com.au/support/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#ff3366] transition-colors duration-200"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">
            Copyright Oolee Vouchers {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}