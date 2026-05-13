import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioHero from './PortfolioHero';
import { Pagination, IconButton, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Portfolio = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // image_4ab2d8.png mujab ek page par 9 items

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Axios no use kari ne category 2 na products fetch karya
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories/2/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Data fetch karva ma bhul che:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Pagination Logic
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 500, behavior: 'smooth' }); // Page badle tyre thodu scroll up thay
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress sx={{ color: '#b3956e' }} />
      </div>
    );
  }

  return (
    <div className="bg-[#f5f1e6]">
      {/* Hero Section */}
      <PortfolioHero />

      {/* Product Grid Section */}
      <div className="py-16 px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

          {currentItems.map((product, index) => (
            <div key={product.id} className="rounded relative group overflow-hidden  shadow-sm bg-white">
              {/* Image */}
              <img
                src={product.images}
                alt={product.title}
                className="w-full  h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay - Text Visibility mate */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Title ane Category - Hover par upar avse */}
              <div className="absolute bottom-8 left-8 text-white z-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] font-bold uppercase tracking-[2px] mb-1">
                  {product.category.name}
                </p>
                <h3 className="text-xl font-semibold leading-tight">
                  {product.title}
                </h3>
              </div>

              {/* Arrow Button - Hover par visible thase */}
              <div className="absolute bottom-8 right-8 z-10 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                <IconButton
                  sx={{
                    backgroundColor: 'white',
                    '&:hover': { backgroundColor: '#f0f0f0' },
                    width: '45px',
                    height: '45px'
                  }}
                >
                  <ArrowForwardIcon className="text-black" />
                </IconButton>
              </div>
            </div>
          ))}

        </div>

        {/* Active MUI Pagination */}
        {/* Active MUI Pagination */}
        {products.length > itemsPerPage && (
          <div className="mt-16">
            <Pagination
              count={Math.ceil(products.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded" // image_4aa358.png mujab square shape mate
              sx={{
                '& .MuiPaginationItem-root': {
                  borderColor: '#d1d1d1',
                  color: '#888',
                  margin: '0 6px',
                  borderRadius: '4px', // Square design with slight rounding

                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease',
                },
                '& .Mui-selected': {
                  backgroundColor: '#b18b5e !important', // Tamari pasand no color
                  color: '#fff !important',
                  borderColor: '#b18b5e',
                },
                '& .MuiPaginationItem-root:hover': {
                  backgroundColor: 'rgba(177, 139, 94, 0.1)', // Hover effect with 10% opacity
                  borderColor: '#b18b5e',
                },
                '& .MuiPaginationItem-previousNext': {
                  borderColor: '#d1d1d1',
                  '&:hover': {
                    backgroundColor: '#f5f1e6',
                  }
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;