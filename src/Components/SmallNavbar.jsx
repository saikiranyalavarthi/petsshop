// import React from "react";

// function SmallNavbar() {
//   return (
//     <nav className="bg-blue-600 text-white shadow-md p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}

//         {/* Desktop and Mobile Menu */}
//         <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-30">
//           <a href="#" className="text-white hover:text-gray-200">
//             Dogs
//           </a>
//           <a href="#" className="text-white hover:text-gray-200">
//             Cats
//           </a>
//           <a href="#" className="text-white hover:text-gray-200">
//             Small Pets
//           </a>
//           <a href="#" className="text-white hover:text-gray-200">
//             Bird
//           </a>
//           <a href="#" className="text-white hover:text-gray-200">
//             Brand
//           </a>
//           <a href="#" className="text-white hover:text-gray-200">
//             Vet Care
//           </a>
//           <a href="#" className="text-white hover:text-gray-200">
//             Our Stores
//           </a>
//           <a href="#" className="text-white hover:text-gray-200">
//             Blog
//           </a>
//           <a href="#" className="text-white hover:text-gray-200">
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default SmallNavbar;
import React from "react";

function SmallNavbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md p-4">
      <div className="container mx-auto flex flex-wrap justify-center gap-2 lg:gap-10">
        <a
          href="#"
          className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
        >
          Dogs
        </a>
        <a
          href="#"
          className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
        >
          Cats
        </a>
        <a
          href="#"
          className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
        >
          Small Pets
        </a>
        <a
          href="#"
          className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
        >
          Bird
        </a>
        <a
          href="#"
          className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
        >
          Brand
        </a>
        <a
          href="#"
          className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
        >
          Vet Care
        </a>
        <a
          href="#"
          className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
        >
          Our Stores
        </a>
        <a
          href="#"
          className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
        >
          Blog
        </a>
        <a
          href="#"
          className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default SmallNavbar;
