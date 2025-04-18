import React, { useState } from 'react';

const faqs = [
  {
    question: "What is E-Summit 2025?",
    answer:
      "E-Summit 2025 is the flagship entrepreneurial event organized by E-Cell UIT RGPV. It brings together innovators, industry leaders, and aspiring entrepreneurs for keynotes, competitions, and workshops."
  },
  {
    question: "Who can attend the event?",
    answer:
      "Students, professionals, startup founders, and anyone interested in entrepreneurship are welcome to attend E-Summit 2025."
  },
  {
    question: "Is registration required?",
    answer:
      "Yes, registration is mandatory. Details and registration links will be available on the official event website and social media pages."
  },
  {
    question: "Will there be any competitions?",
    answer:
      "Yes! E-Summit 2025 will host multiple competitions including startup pitches, ideathons, and more with exciting prizes."
  },
  {
    question: "Where is the event being held?",
    answer:
      "The event will be hosted at UIT RGPV Campus, Bhopal. Exact venues and schedules will be shared closer to the event date."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-transparent text-white py-10 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center text-white mb-2">Frequently Asked Questions</h2>
      <div className='w-1/3 items-center justify-center bg-blue-900 h-1 m-3 ml-[32%] mb-5'></div>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-blue-900 hover:bg-[#11112fad] rounded-lg p-4 bg-opacity-0 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-semibold text-white flex justify-between items-center"
            >
              {faq.question}
              <span className="text-blue-500">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-blue-100">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
