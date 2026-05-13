import React from 'react';
// 1. Tamara CommonHero component ne import karo (path check kari lejo)
import CommonHero from '../../../components/commonhero/CommonHero'; 

const FaqHero = () => {
    return (
        <CommonHero 
            title="FAQ" 
            breadcrumb="FAQ" 
        />
    );
};

export default FaqHero;