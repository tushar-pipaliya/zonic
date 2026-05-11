import React, { useState, useEffect } from 'react';
import { Rating, Container, Grid, Typography, Box } from '@mui/material';

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API mathi data fetch karva mate
    fetch('https://api.escuelajs.co/api/v1/categories/2/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6))) // Fakt pehla 6 items leva mate
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  console.log(products, 'products')
  return (
    <Container className="py-10 !px-0">
      {/* Header Section */}
      <div className="mb-8">
        <span className="uppercase text-xs font-bold tracking-widest bg-orange-50 px-2 py-1">
          This Week
        </span>
        <h2 className="text-4xl font-bold mt-2 text-gray-900">Best Sellers</h2>
      </div>

      {/* New 6-Box Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="flex items-center space-x-4 p-2 border border-gray-100 transition-all hover:shadow-md rounded-lg bg-white"
          >
            {/* Product Image Container */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 flex-shrink-0 flex items-center justify-center rounded-md overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <Typography className="font-bold text-gray-800 leading-tight block">
                {product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title}
              </Typography>
              <Typography className="text-gray-500 font-medium my-1">
                USD {product.price}.00
              </Typography>
              <Rating name="" value={5} readOnly size="small" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BestSellers;


// <Container className="py-10">
//   {/* Header Section */}
//   <div className="mb-8">
//     <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 uppercase tracking-wide">
//       This Week
//     </span>
//     <h2 className="text-4xl font-bold mt-2 text-gray-900">Best Sellers</h2>
//   </div>

//   {/* Products Grid */}
//   <Grid container spacing={4}>
//     {products.map((product) => (
//       <div item xs={12} sm={6} md={4} key={product.id}>
//         <div className="flex items-center space-x-4  transition-all hover:shadow-sm rounded-lg">
//           {/* Product Image Container */}
//           <div className="w-32 h-32 bg-gray-100 flex items-center justify-center rounded-sm overflow-hidden">
//             <img
//               src={product.images[0]}
//               alt={product.title}
//               className="w-full h-full object-cover mix-blend-multiply"
//             />
//           </div>

//           {/* Product Details */}
//           <div className="">
//             <Typography variant="" className="font-bold text-gray-800 leading-tight">
//               {product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title}
//             </Typography>
//             <Typography className="text-gray-500 font-medium my-1">
//               USD {product.price}.00
//             </Typography>
//             <Rating name="read-only" value={0} readOnly size="small" />
//           </div>
//         </div>
//       </div>
//     ))}
//   </Grid>
// </Container>