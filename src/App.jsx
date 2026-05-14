import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './features/home/Home'
import { Routes, Route } from 'react-router-dom';
import Match from './features/about/About'
import About from './features/about/About'
import Shop from './features/shop/Shop'
import Pages from './features/pages/Pages'
import Faq from './features/pages/Faq/Faq'
import Portfolio from './features/pages/Porfolio/Portfolio'
import Contact from './features/contact/Contact'
import ProductView from './features/productview/ProductView'


function App() {

  return (
    <  >
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductView />} />

            <Route
              path="*"
              element={
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 font-sans p-4">
                  <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4 animate-pulse">🚀</h1>
                    <h2 className="text-3xl font-semibold mb-2">Developing Phase</h2>
                    <p className="text-gray-500 mb-6">We are working hard to bring you something amazing. Stay tuned!</p>

                    {/* Progress Bar Animation */}
                    <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-blue-500 animate-progress"></div>
                    </div>

                    <button
                      onClick={() => window.history.back()}
                      className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              }
            />          </Routes>
        </Layout>

      </div>

    </>
  )
}

export default App
