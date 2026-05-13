import React from 'react';
// 1. Tamara CommonHero component ne import karo (path check kari lejo)
import CommonHero from '../../components/commonhero/CommonHero'; 

const AboutHero = () => {
    return (
        <CommonHero 
            title="About" 
            breadcrumb="About" 
        />
    );
};

export default AboutHero;