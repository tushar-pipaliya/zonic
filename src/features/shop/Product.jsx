import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import { Pagination, Stack } from '@mui/material';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories/2/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Axios fetching error:", err);
                setLoading(false);
            });
    }, []);

    // --- Logic functions above return ---

    // 1. Search Change Handler
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Search badlay tyare pehla page par pacha avvu
    };

    // 2. Sort Change Handler
    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    // 3. Pagination Change Handler
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Data Processing Logic
    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === "lowToHigh") return a.price - b.price;
        if (sortOrder === "highToLow") return b.price - a.price;
        return 0; 
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    if (loading) return <div className="text-center py-20 text-xl font-semibold">Loading Collection...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
            {/* Header & Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2">Products</h2>
                </div>

                <div className="flex flex-wrap gap-4 w-full md:w-auto">
                    {/* Search Input */}
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="border border-gray-300 p-2 rounded-md outline-none focus:border-[#b18b5e] transition-colors w-full md:w-64"
                        onChange={handleSearchChange}
                    />
                    
                    {/* Sort Select */}
                    <select 
                        className="border border-gray-300 p-2 rounded-md cursor-pointer focus:border-[#b18b5e] outline-none"
                        onChange={handleSortChange}
                    >
                        <option value="default">Sort By: Featured</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Mobile View: All products */}
                <div className="contents sm:hidden">
                    {sortedProducts.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
                
                {/* Desktop View: Paginated products */}
                <div className="hidden sm:contents">
                    {currentItems.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>

                {sortedProducts.length === 0 && (
                    <div className="col-span-full text-center py-10 text-gray-500 italic">
                        No products found for "{searchTerm}"
                    </div>
                )}
            </div>

            {/* Pagination Controls - Hidden on Mobile */}
            {totalPages > 1 && (
                <div className="hidden sm:flex justify-center mt-12">
                    <Stack spacing={2}>
                        <Pagination 
                            count={totalPages} 
                            page={currentPage} 
                            onChange={handlePageChange} 
                            variant="outlined" 
                            shape="rounded"
                            sx={{
                                '& .Mui-selected': {
                                    backgroundColor: '#b18b5e !important',
                                    color: '#ffffff !important',
                                    borderColor: '#b18b5e !important',
                                },
                                '& .MuiPaginationItem-root:hover': {
                                    backgroundColor: 'rgba(177, 139, 94, 0.1)',
                                }
                            }}
                        />
                    </Stack>
                </div>
            )}
        </div>
    );
};

export default Product;