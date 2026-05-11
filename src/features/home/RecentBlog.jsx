import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const RecentBlog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories/2/products')
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(6, 8)))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    console.log(products, 'RecentBLOg')
    return (
        <section className="bg-[#f8f5f0] py-16 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12">
                    <span className="bg-[#e9e0d3] text-[#a68b6d] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                        Read Blog
                    </span>
                    <h2 className="text-4xl font-bold mt-4 text-gray-900">Recent Blog</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((item) => (
                        <div key={item.id} className="bg-white flex flex-row items-stretch overflow-hidden group cursor-pointer shadow-sm">
                            <div className="w-[60%] p-5 flex flex-col justify-between">
                                <div>
                                    <span className="bg-[#f8f1e7] text-[#c4a484] px-3 py-1 rounded-full text-xs font-medium">
                                        {item.category?.name || "Design"}
                                    </span>

                                    <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">

                                        <span>By Alex Manie</span>
                                        <span>11 May, 2026</span>
                                    </div>

                                    <h3 className="text-2xl font-bold mt-4 text-gray-900 leading-tight line-clamp-2">
                                        {item.title}
                                    </h3>
                                </div>

                                <button className="w-12 h-12 rounded-full bg-[#f3ece2] flex items-center justify-center mt-6 transition-colors group-hover:bg-[#c4a484] group-hover:text-white">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                            <div className="w-[40%] relative overflow-hidden">
                                <img
                                    src={item.images}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentBlog;