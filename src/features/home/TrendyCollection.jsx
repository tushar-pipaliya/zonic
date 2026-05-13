import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';

const TrendyCollection = () => {
    const [allProducts, setAllProducts] = useState([]); // Badha products store karva
    const [filteredProducts, setFilteredProducts] = useState([]); // Display mate filtered data
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('All Collection');

    const tabs = ['All Collection', 'New Arrivals', 'Top Rated', 'Trending Items'];

    // 1. Initial Fetch: Ek vaar badha products fetch kari lo
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories/2/products')
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                setFilteredProducts(data.slice(0, 8)); // Default first 8 items
                setLoading(false);
            })
            .catch((err) => console.error("Error:", err));
    }, []);

    // 2. Filter Logic: Jyare pan activeTab badlay tyare data filter thase
    useEffect(() => {
        let list = [...allProducts];

        if (activeTab === 'New Arrivals') {
            // Logic: Maano ke last 4 products "New" che
            list = list.reverse().slice(0, 8);
        } else if (activeTab === 'Top Rated') {
            // Logic: Maano ke jeni price $50 thi vadhare che e top rated (API ma rating nathi etle)
            list = list.filter(item => item.price > 50);
        } else if (activeTab === 'Trending Items') {
            // Logic: Random shuffle for trending feel
            list = list.sort(() => 0.5 - Math.random());
        }

        setFilteredProducts(list.slice(0, 8)); // Display limit
    }, [activeTab, allProducts]);

    if (loading) return <div className="text-center py-20">Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                <div>
                    <span className="bg-[#e9e0d3] text-[#a68b6d] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                        This Month
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2">Trendy Collection</h2>
                </div>

                <nav className="flex gap-6 text-sm font-semibold text-gray-500 mt-6 md:mt-0">
                    {tabs.map((tab) => (
                        <button 
                            key={tab} 
                            onClick={() => setActiveTab(tab)}
                            className={`hover:text-black transition-all duration-300 pb-1 ${
                                activeTab === tab 
                                ? 'text-black border-b-2 border-[#a68b6d]' 
                                : 'border-b-2 border-transparent'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
            {filteredProducts.length === 0 && (
                <div className="text-center py-10 text-gray-400">No products found in this category.</div>
            )}
        </div>
    );
};

export default TrendyCollection;