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
// import React from "react";

// function SmallNavbar() {
//   return (
//     <nav className="bg-blue-600 text-white shadow-md p-4">
//       <div className="container mx-auto flex flex-wrap justify-center gap-2 lg:gap-10">
//         <a
//           href="#"
//           className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
//         >
//           Dogs
//         </a>
//         <a
//           href="#"
//           className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
//         >
//           Cats
//         </a>
//         <a
//           href="#"
//           className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
//         >
//           Small Pets
//         </a>
//         <a
//           href="#"
//           className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
//         >
//           Bird
//         </a>
//         <a
//           href="#"
//           className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
//         >
//           Brand
//         </a>
//         <a
//           href="#"
//           className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
//         >
//           Vet Care
//         </a>
//         <a
//           href="#"
//           className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
//         >
//           Our Stores
//         </a>
//         <a
//           href="#"
//           className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
//         >
//           Blog
//         </a>
//         <a
//           href="#"
//           className="underline lg:no-underline lg:hover:underline hover:text-gray-200"
//         >
//           Contact Us
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default SmallNavbar;
import React, { useState } from "react";

const categories = {
  Dogs: [
    "Dry Food",
    "Wet Food",
    "Puppy Food",
    "Fresh Food",
    "Prescription Food",
    "Biscuits & Cookies",
    "Chicken Treats",
    "Calcium & Milk Chews",
    "Dental Treats",
    "Vegetarian Treats",
  ],
  Cats: [
    "Dry Food",
    "Wet Food",
    "Kitten Food",
    "Litter & Accessories",
    "Catnip Toys",
    "Cat Treats",
  ],
  "Small Pets": ["Food", "Toys", "Cages", "Health Care"],
  Bird: ["Bird Seeds", "Cages", "Health Care"],
  Brand: ["Pedigree", "Drools", "Royal Canin", "Farmina", "Purepet"],
  "Vet Care": ["Supplements", "Dental Care", "Dewormers", "Ear & Eye Care"],
  "Our Stores": ["Hyderabad", "Bangalore", "Delhi", "Mumbai"],
  Blog: ["Tips", "Health", "Training", "Nutrition"],
  "Contact Us": ["Customer Care", "Email", "Feedback Form"],
};

function SmallNavbar() {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleDropdown = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md p-2">
      <div className="container mx-auto flex flex-wrap justify-center gap-2 lg:gap-10">
        {Object.keys(categories).map((category) => (
          <div key={category} className="relative">
            <button
              onClick={() => toggleDropdown(category)}
              className="hover:underline underline-offset-4 hover:text-gray-200"
            >
              {category}
            </button>

            {activeCategory === category && (
              <div className="absolute top-8 left-0 bg-white text-black rounded shadow-lg z-50 p-4 w-56">
                {categories[category].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-2 py-1 hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default SmallNavbar;
