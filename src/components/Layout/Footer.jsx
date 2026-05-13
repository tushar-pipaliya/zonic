import React from 'react';
import {
    Facebook,
    Twitter,
    LinkedIn,
    Instagram,
    LocationOn,
    LocalPhone,
    KeyboardArrowUp
} from '@mui/icons-material';
import payoneer from '../../assets/payoneer.png'
import mastercard from '../../assets/mastercard.png'
import paypal from '../../assets/paypal.png'
const Footer = () => {
    return (
        <footer className="bg-[#111111] text-[#999999] pt-16 pb-8 px-4 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 font-semibold">

                {/* Column 1: Brand & Social */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        {/* Replace with your actual SVG or Logo component */}
                        <div className="w-8 h-8 bg-[#C19A6B] rounded-full flex items-center justify-center">
                            <span className="text-black text-xs font-bold">Z</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">ZONIC</h2>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs">
                        It helps designers plan out where the content will sit, the content to be written and approved.
                    </p>
                    <div className="flex space-x-3">
                        {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
                            <a key={index} href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#C19A6B] hover:text-white transition-all duration-300">
                                <Icon fontSize="small" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 2: Services */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-[#C19A6B]">Log In</a></li>
                        <li><a href="#" className="hover:text-[#C19A6B]">Wishlist</a></li>
                        <li><a href="#" className="hover:text-[#C19A6B]">Return Policy</a></li>
                        <li><a href="#" className="hover:text-[#C19A6B]">Privacy policy</a></li>
                        <li><a href="#" className="hover:text-[#C19A6B]">Shopping FAQs</a></li>
                    </ul>
                </div>

                {/* Column 3: Company */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-[#C19A6B]">Home</a></li>
                        <li><a href="#" className="hover:text-[#C19A6B]">About us</a></li>
                        <li><a href="#" className="hover:text-[#C19A6B]">Pages</a></li>
                        <li><a href="#" className="hover:text-[#C19A6B]">Blog</a></li>
                        <li><a href="#" className="hover:text-[#C19A6B]">Contact us</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
                    <p className="text-sm">4517 Washington Ave.<br />Manchester, Kentucky 39495</p>

                    <div className="flex items-start space-x-4">
                        <div className="bg-[#C19A6B]/20 p-3 rounded-full text-[#C19A6B]">
                            <LocationOn fontSize="small" />
                        </div>
                        <p className="text-sm text-white pt-2">711-2880 Nulla St.</p>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-[#C19A6B]/20 p-3 rounded-full text-[#C19A6B]">
                            <LocalPhone fontSize="small" />
                        </div>
                        <div>
                            <p className="text-sm text-white font-medium">+964 742 44 763</p>
                            <p className="text-xs">Mon - Sat: 9 AM - 5 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-xs">© All Copyright 2026 by Zonic</p>

                {/* Payment Icons Simulation */}
                <div className="flex items-center gap-3">
                    {/* Icon 1 */}
                    <div className="h-8 flex items-center bg-white p-1 rounded">
                        <img src={payoneer} alt="Payoneer" className="h-full  object-contain" />
                    </div>

                    {/* Icon 2 */}
                    <div className="h-8 flex items-center bg-white p-1 rounded">
                        <img src={mastercard} alt="Mastercard" className="h-full  object-contain" />
                    </div>

                    {/* Icon 3 */}
                    <div className="h-8 flex items-center bg-white p-1 rounded">
                        <img src={paypal} alt="Paypal" className="h-full object-contain" />
                    </div>
                </div>

                <div className="flex items-center space-x-6 text-xs text-white">
                    <a href="#" className="hover:text-[#C19A6B]">Terms & Condition</a>
                    <span className="text-gray-600">|</span>
                    <a href="#" className="hover:text-[#C19A6B]">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;