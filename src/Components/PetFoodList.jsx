import React from "react";
import { motion } from "framer-motion"; // Add this import for animations

const petFoods = [
  {
    id: 1,
    title: "Royal Canin Puppy Food",
    description: "Premium dry food for small breed puppies.",
    price: 799,
    image:
      "https://media.istockphoto.com/id/678257014/photo/dog-food-in-the-bowl-and-bone-shaped-biscuits.jpg?s=612x612&w=0&k=20&c=lLzJYxxglUmtXOrlUqdtHbB-2p7q5NBSYZ4EI6bL8Fc=",
  },
  {
    id: 2,
    title: "Pedigree Adult Dog Food",
    description: "Wholesome chicken & vegetables for adult dogs.",
    price: 649,
    image:
      "https://himalayawellness.in/cdn/shop/files/HPF-PUPPY-1.2-Kg-FRONTSIDE.jpg?v=1708921969",
  },
  {
    id: 3,
    title: "Whiskas Tuna Cat Food",
    description: "Nutritious tuna-flavored food for adult cats.",
    price: 299,
    image:
      "https://img.freepik.com/free-photo/still-life-pet-food-composition_23-2148982345.jpg",
  },
  {
    id: 4,
    title: "Drools Focus Puppy Food",
    description: "Rich in nutrients for growing puppies.",
    price: 899,
    image:
      "https://media.istockphoto.com/id/1361708626/photo/various-types-of-dry-food-for-dog-on-table-top.jpg?s=612x612&w=0&k=20&c=SRi2ctbV6H0YtlNmwjnLxPC6Z9Z6MT6P1r9eJPlN70o=",
  },
  {
    id: 5,
    title: "Purepet Ocean Fish Cat Food",
    description: "Delicious fish blend for shiny coat & healthy digestion.",
    price: 349,
    image: "https://www.wiggles.in/cdn/shop/files/PackPDP-21.png?v=1716011485",
  },
  {
    id: 6,
    title: "JerHigh Chicken Stix",
    description: "Tasty and chewy chicken treats for dogs.",
    price: 199,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGCAIJcH1h5iY6Alykgd1u4YqpnyjVpGSDQ&s",
  },
];

const PetFoodList = () => {
  return (
    <div className="px-4 mt-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        🏷️ Shop Our Top-Selling Favorites
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-6 overflow-x-auto lg:overflow-x-visible lg:flex-wrap justify-center m-2 my-8 lg:mx-4 sm:flex-wrap sm:justify-center">
          {petFoods.map((item, index) => (
            <motion.div
              key={item.id} // Corrected from deal.id to item.id
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              // className="w-[220px]  bg-white border border-gray-200 rounded-2xl shadow-lg p-4 text-center relative"
              className="min-w-[200px] max-w-[220px] h-[180px]bg-white border border-gray-200 rounded-2xl shadow-lg p-4 text-center relative"
            >
              <img
                src={item.image}
                alt={item.title} // Corrected from item.name to item.title
                className="w-[100px] h-[100px] object-cover rounded-full mx-auto mb-3 border-4 border-pink-200"
              />

              {/* Title */}
              <p className="text-sm font-semibold text-gray-700">
                {item.title}
              </p>

              {/* Description */}
              <p className="text-xs text-gray-600 mt-2">{item.description}</p>

              {/* Price */}
              <p className="text-lg font-bold text-gray-800 mt-3">
                ₹{item.price}
              </p>

              {/* Add to Cart Button */}
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetFoodList;
