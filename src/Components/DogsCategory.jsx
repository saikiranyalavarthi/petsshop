import React, { useState } from "react";

const DogsCategory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2
        className="text-xl font-bold text-blue-600 cursor-pointer hover:underline"
        onClick={toggleCategories}
      >
        DOGS
      </h2>

      {isOpen && (
        <div className="mt-4 space-y-6">
          {[
            {
              title: "FOOD",
              items: [
                "Dry Food",
                "Wet Food",
                "Puppy Food",
                "Fresh Food",
                "Prescription Food",
              ],
            },
            {
              title: "TREATS",
              items: [
                "Biscuits & Cookies",
                "Chicken Treats",
                "Calcium & Milk Chews",
                "Dental Treats",
                "Vegetarian Treats",
              ],
            },
            {
              title: "TOYS",
              items: [
                "Chew Toys",
                "Plush Toys",
                "Rope & Tug Toys",
                "Interactive Toys",
                "Squeaker Toys",
                "Fetch Toys",
              ],
            },
            {
              title: "HEALTH & HYGIENE",
              items: [
                "Supplements",
                "Oral & Dental Care",
                "Pooper Scoopers & Waste Bags",
                "Stain & Odour Remover",
                "Potty Training",
                "Diapers & Pee Pads",
              ],
            },
            {
              title: "GROOMING",
              items: [
                "Shampoo & Conditioner",
                "Skin & Coat Care",
                "Wipes",
                "Grooming Tools",
                "Deodorants & Perfumes",
              ],
            },
            {
              title: "WALK ESSENTIALS",
              items: ["Collars", "Harnesses", "Leashes", "Pet Tags"],
            },
            {
              title: "BOWLS & FEEDERS",
              items: ["Bowls & Dishes"],
            },
            {
              title: "BEDS & MATS",
              items: ["Beds", "Pet Mats"],
            },
            {
              title: "CLOTHING",
              items: [
                "Coats & Jackets",
                "T-shirts",
                "Sweatshirts & Sweaters",
                "Raincoats",
                "Frocks",
                "Shirts",
              ],
            },
            {
              title: "ACCESSORIES",
              items: ["Bandanas", "Bow Ties", "Shoes & Socks", "Mufflers"],
            },
            {
              title: "FEATURED COLLECTIONS",
              items: ["Summer Collection"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800">
                {section.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DogsCategory;
