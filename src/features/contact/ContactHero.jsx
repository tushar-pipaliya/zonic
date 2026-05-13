import React from 'react';
// 1. Tamara CommonHero component ne import karo (path check kari lejo)
import CommonHero from '../../components/commonhero/CommonHero'; 

const ContactHero = () => {
    return (
        <CommonHero 
            title="Contact" 
            breadcrumb="Contact" 
        />
    );
};

export default ContactHero;