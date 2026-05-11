import React from 'react'
import Hero from './Hero'
import ServicesBar from './ServicesBar'
import Promo from './Promo'
import NewArrivals from './NewArrivals'
import NodeBanner from './NodeBanner'
import TrendyCollection from './TrendyCollection'
import ElectronicDeals from './ElectronicDeals'
import TestimonialsSlider from './TestimonialsSlider'
import BestSellers from './BestSellers'
import RecentBlog from './RecentBlog'
import PromoSection from './PromoSection'
import AwardMarquee from './Award'


const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesBar />
      <Promo />
      <NewArrivals />
      <NodeBanner />
      <TrendyCollection />
      <ElectronicDeals />
      <TestimonialsSlider/>
      <BestSellers/>
      <RecentBlog/>
      <PromoSection/>
      <AwardMarquee/>
    </div>
  )
}

export default Home
