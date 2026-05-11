import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './features/home/Home'
import { Routes, Route } from 'react-router-dom';
import Match from './features/match/Match'

function App() {

  return (
    <  >
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/match" element={<Match/>} />
            <Route path="*" element={<div className="-white">Developing Phase</div>} />
          </Routes>
        </Layout>

      </div>

    </>
  )
}

export default App
