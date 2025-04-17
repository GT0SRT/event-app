import React from "react";

const sponsors = [
  { name: "Sponsor 1", logo: "https://miro.medium.com/v2/resize:fit:799/0*ilw552fVUGbwIzbE.jpg" },
  { name: "Sponsor 2", logo: "https://pngimg.com/d/google_PNG19644.png" },
  { name: "Sponsor 3", logo: "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png" },
  { name: "Sponsor 4", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniflqXPyrxu6-SzxISPxRADLv_mp8cjwmcg&s" },
  { name: "Sponsor 5", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cYh8eJq0Gnavbw2Vp6P3547YXSiLp-SRXQ&s" },
  { name: "Sponsor 6", logo: "https://graphicsprings.com/wp-content/uploads/2023/07/image-58-1024x512.png" },
];

const Sponsors = () => {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center">
        Our Sponsors
      </h2>
      <div className='w-[10%] items-center justify-center bg-blue-900 h-1 m-3 ml-[45%] mb-5'></div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex justify-center grayscale items-center p-4 hover:grayscale-0 transition"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
