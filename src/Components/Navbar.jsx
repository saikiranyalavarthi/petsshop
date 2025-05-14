// import React, { useState } from "react";

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-blue-600 lg:flex items-center">
//           <a href="#">VET&MEET</a>
//         </div>

//         {/* Mobile Menu Button (Hamburger Icon) */}
//         <div className="lg:hidden flex items-center space-x-2">
//           <div className="text-2xl font-bold text-blue-600">
//             <a href="#">YourLogo</a>
//           </div>
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-gray-700 focus:outline-none"
//           >
//             <i className="fas fa-bars"></i> {/* Hamburger Menu Icon */}
//           </button>
//         </div>

//         {/* Search Input */}
//         <div className="flex items-center bg-gray-100 p-2 rounded-md w-1/3  lg:flex">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent outline-none w-full pl-2 text-sm text-gray-700"
//           />
//           <button className="text-gray-600">
//             <i className="fas fa-search"></i> {/* Search Icon */}
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <button className="text-gray-700 flex items-center space-x-2">
//             <i className="fas fa-location-arrow"></i>{" "}
//             {/* Track Location Icon */}
//             <span>Track Location</span>
//           </button>

//           <button className="text-gray-700 flex items-center space-x-2">
//             <i className="fas fa-shopping-cart"></i> {/* Cart Icon */}
//             <span>Cart</span>
//           </button>

//           <button className="text-gray-700 flex items-center space-x-2">
//             <i className="fas fa-user-circle"></i> {/* Profile Icon */}
//             <span>Profile</span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-white shadow-md p-4 absolute top-16 w-full">
//           <div className="flex flex-col items-start space-y-4">
//             <button className="text-gray-700 flex items-center space-x-2">
//               <i className="fas fa-location-arrow"></i>{" "}
//               {/* Track Location Icon */}
//               <span>Track Location</span>
//             </button>
//             <button className="text-gray-700 flex items-center space-x-2">
//               <i className="fas fa-shopping-cart"></i> {/* Cart Icon */}
//               <span>Cart</span>
//             </button>
//             <button className="text-gray-700 flex items-center space-x-2">
//               <i className="fas fa-user-circle"></i> {/* Profile Icon */}
//               <span>Profile</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Desktop) */}
        <div className="hidden lg:block text-2xl font-bold text-blue-600">
          <a href="">VET&MEET</a>
        </div>

        {/* Mobile Logo + Hamburger */}
        <div className="lg:hidden flex items-center space-x-50">
          <div className="text-2xl font-bold text-blue-600">
            <a href="#">VET&MEET</a>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none text-xl"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Search (Desktop only) */}
        <div className="hidden lg:flex items-center bg-gray-100 p-2 rounded-md w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full pl-2 text-sm text-gray-700"
          />
          <button className="text-gray-600">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-700 flex items-center space-x-2">
            <i className="fas fa-location-arrow"></i>
            <span>Track Location</span>
          </button>
          <button className="text-gray-700 flex items-center space-x-2">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </button>
          <button className="text-gray-700 flex items-center space-x-2">
            <i className="fas fa-user-circle"></i>
            <span>Profile</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 absolute top-full left-0 w-full">
          <div className="flex flex-col items-start space-y-4">
            <button className="text-gray-700 flex items-center space-x-2">
              <i className="fas fa-location-arrow"></i>
              <span>Track Location</span>
            </button>
            <button className="text-gray-700 flex items-center space-x-2">
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span>
            </button>
            <button className="text-gray-700 flex items-center space-x-2">
              <i className="fas fa-user-circle"></i>
              <span>Profile</span>
            </button>
            {/* Optional mobile search */}
            <div className="flex items-center bg-gray-100 p-2 rounded-md w-full">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-full pl-2 text-sm text-gray-700"
              />
              <button className="text-gray-600">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
