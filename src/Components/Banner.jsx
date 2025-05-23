// import React, { useState } from "react";

// function BannerSection() {
//   const banners = [
//     "https://img.freepik.com/free-vector/gradient-pet-sitting-facebook-cover_23-2149605728.jpg?ga=GA1.1.1233385664.1722960299&semt=ais_hybrid&w=740", // Example image URLs
//     "https://img.freepik.com/free-vector/hand-drawn-pet-sitting-facebook-cover_23-2149665677.jpg?ga=GA1.1.1233385664.1722960299&semt=ais_hybrid&w=740",
//     "https://img.freepik.com/free-vector/hand-drawn-pet-sitting-service-facebook-cover_23-2149636389.jpg?ga=GA1.1.1233385664.1722960299&semt=ais_hybrid&w=740",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to the next banner
//   const nextBanner = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
//   };

//   return (
//     <div className="relative">
//       {/* Banner image */}
//       <div
//         className="w-full h-96 bg-cover bg-center mt-5 bg-amber-300"
//         style={{ backgroundImage: `url(${banners[currentIndex]})` }}
//       >
//         <div className="flex justify-end items-center h-full pr-4">
//           {/* Next Button (Arrow) */}
//           <button
//             className="bg-white text-black p-2 rounded-full shadow-lg"
//             onClick={nextBanner}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 5l7 7-7 7M5 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Optional: Add text or content below the banner */}
//     </div>
//   );
// }

// export default BannerSection;

import React, { useState } from "react";

function BannerSection() {
  const banners = [
    "https://img.freepik.com/free-vector/gradient-pet-sitting-facebook-cover_23-2149605728.jpg?ga=GA1.1.1233385664.1722960299&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-vector/hand-drawn-pet-sitting-facebook-cover_23-2149665677.jpg?ga=GA1.1.1233385664.1722960299&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-vector/hand-drawn-pet-sitting-service-facebook-cover_23-2149636389.jpg?ga=GA1.1.1233385664.1722960299&semt=ais_hybrid&w=740",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next banner
  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Function to go to the previous banner
  const prevBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Banner image */}
      <div
        className="w-full h-96 bg-cover bg-center mt-5 bg-amber-300"
        style={{ backgroundImage: `url(${banners[currentIndex]})` }}
      >
        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-4">
          {/* Previous Button */}
          <button
            className="bg-white text-black p-2 rounded-full shadow-lg lg:block hidden"
            onClick={prevBanner}
            aria-label="Previous Banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7M19 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="bg-white text-black p-2 rounded-full shadow-lg lg:block hidden"
            onClick={nextBanner}
            aria-label="Next Banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Optional: Add text or content below the banner */}
    </div>
  );
}

export default BannerSection;
