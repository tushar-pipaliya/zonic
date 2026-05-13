import React, { useState } from 'react'
import FaqHero from '../Faq/FaqHero'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AccordionItem = ({ id, question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <div 
        onClick={onClick}
        className={`flex items-center justify-between p-5 cursor-pointer border rounded-full transition-all duration-300 
        ${isOpen ? 'border-[#b18b5e] bg-white shadow-sm' : 'border-gray-200 bg-white hover:border-[#b18b5e]'}`}
      >
        <div className="flex items-center gap-4">
          <span className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold 
            ${isOpen ? 'bg-[#b18b5e] text-white' : 'bg-[#fcf9f6] text-[#b18b5e]'}`}>
            {id}
          </span>
          <h3 className="text-sm md:text-base font-semibold text-gray-800">
            {question}
          </h3>
        </div>

        <div className={`flex items-center justify-center w-8 h-8 border rounded-full transition-colors
          ${isOpen ? 'border-[#b18b5e] text-[#b18b5e]' : 'border-gray-200 text-gray-400'}`}>
          {isOpen ? <RemoveIcon sx={{ fontSize: 18 }} /> : <AddIcon sx={{ fontSize: 18 }} />}
        </div>
      </div>

      {isOpen && (
        <div className="px-16 py-4 animate-fadeIn">
          <p className="text-sm leading-relaxed text-gray-600">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  // useState(1) set karva thi first item automatically open thase starting ma
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      <FaqHero />
      
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Frequently Asked Questions</h2>

        <AccordionItem 
          id="01"
          question="What is the standard warranty on Zonic gadgets?"
          answer="Most electronics items carry a 12-month manufacturer warranty. For high-end peripherals, we offer an extended 2-year Zonic Care plan."
          isOpen={openIndex === 1}
          onClick={() => toggle(1)}
        />

        <AccordionItem 
          id="02"
          question="How can I track my electronics shipment?"
          answer="Once your order is processed, a tracking link will be sent to your registered email address and mobile number via SMS."
          isOpen={openIndex === 2}
          onClick={() => toggle(2)}
        />

        <AccordionItem 
          id="03"
          question="What happens if I receive a damaged product?"
          answer="If your electronic device arrives damaged, please contact our support team within 24 hours of delivery to initiate an immediate replacement."
          isOpen={openIndex === 3}
          onClick={() => toggle(3)}
        />

        <AccordionItem 
          id="04"
          question="Do you provide technical setup assistance?"
          answer="Yes, for specific high-end devices, we provide remote setup assistance through our technical support desk."
          isOpen={openIndex === 4}
          onClick={() => toggle(4)}
        />

        <AccordionItem 
          id="05"
          question="Can I cancel my order before shipping?"
          answer="Orders can be cancelled through your dashboard as long as the status is 'Pending'. Once it moves to 'Shipped', cancellation is not possible."
          isOpen={openIndex === 5}
          onClick={() => toggle(5)}
        />
      </div>
    </div>
  )
}

export default Faq