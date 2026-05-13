import React from 'react'
import AboutHero from './AboutHero'
import CoreDivisions from './CoreDivisions'
import VideoShowcase from './VideoShowcase'
import PromoSection from '../../components/common/PromoSection'


const About = () => {
  return (
    <div>
      <AboutHero/>
      <CoreDivisions/>
      <VideoShowcase/>
      <PromoSection/>
    </div>
  )
}

export default About
