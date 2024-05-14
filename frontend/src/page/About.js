import React, { useState } from 'react';

function About() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url('/assest/about2.avif')` }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="max-w-4xl px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-transparent rounded-lg overflow-hidden shadow-lg transition-opacity duration-300 ease-in-out transform relative" style={{ height: 'auto' }} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
            <img className={`w-full object-cover ${hoveredIndex === index ? 'opacity-50' : 'opacity-100'}`} src="/assest/about.jpeg" alt={card.heading} />
          </div>
        ))}
      </div>
      {hoveredIndex !== -1 && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-4xl px-4 py-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{cardsData[hoveredIndex].heading}</h2>
            <p className="text-xl lg:text-2xl leading-relaxed">{cardsData[hoveredIndex].content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const cardsData = [
  {
    heading: "About Us",
    content: "At Farm Fresh, we believe in connecting farmers directly with consumers, fostering a community where fresh, locally-sourced produce is easily accessible to everyone. Our platform serves as a marketplace where farmers can showcase their hard work and dedication while offering buyers the opportunity to discover and purchase high-quality, farm-fresh products from the comfort of their homes."
  },
  {
    heading: "Our Story",
    content: "Inspired by a passion for sustainable agriculture and a desire to support local farmers, Farm Fresh was founded with a mission to revolutionize the way people access and enjoy farm-fresh goods. We understand the challenges faced by farmers in reaching consumers, and we aim to bridge this gap by providing a user-friendly platform that promotes transparency, fairness, and sustainability."
  },
  {
    heading: "Our Farmers",
    content: "Our platform is home to a diverse community of dedicated farmers, each with a unique story and a commitment to producing the finest quality products. From organic fruits and vegetables to pasture-raised meats and artisanal goods, our farmers take pride in their craft, employing traditional methods and innovative practices to cultivate delicious and nutritious offerings that you can trust."
  },
  {
    heading: "Our Promise",
    content: "At Farm Fresh, we prioritize freshness, quality, and authenticity in everything we do. We work closely with our farmers to ensure that every product meets our rigorous standards for taste, safety, and sustainability. Whether you're a health-conscious consumer seeking nutritious ingredients or a culinary enthusiast looking for inspiration, you can shop with confidence knowing that you're supporting local farmers and enjoying the best that nature has to offer."
  }
];

export default About;
