import React from "react";
import { motion } from "framer-motion";

function Care() {
  const pets = [
    {
      id: 1,
      title: "50% OFF",
      name: "Walk essentials",
      image:
        "https://media.istockphoto.com/id/458924135/photo/milk-bone-pet-treats.jpg?s=612x612&w=0&k=20&c=bXhUSq6aTbzE4EctlDbEoXTUar0cr9Ck9hbfmHpBUa8=",
    },
    {
      id: 2,
      name: "Bowls and feeders",
      title: "60% OFF",
      image:
        "https://media.istockphoto.com/id/921565824/vector/dog-food-brand-ad-vector-realistic-illustration.jpg?s=612x612&w=0&k=20&c=6L03BGqB-YIK4k1RFhm0ef0PuE9GFwkyECYVKgJ6s7Q=",
    },
    {
      id: 3,
      name: "Clothing and accessories",
      title: "40% OFF",
      image:
        "https://media.istockphoto.com/id/1422407622/vector/dog-food-packaging-design-illustration-vector.jpg?s=612x612&w=0&k=20&c=8xGRnw226-FzAoMtSUijVbQPyuUUMG2QLdx8WXLlNvI=",
    },
    {
      id: 4,
      name: "Beds and blankets",
      title: "30% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnPMEHvF53fUH6gxZS6GCTw8rHBrCQ-vbnQ&s",
    },
    {
      id: 5,
      name: "Cat food",
      title: "40% OFF",
      image:
        "https://media.istockphoto.com/id/1138657963/photo/dog-food-bag-package-design-near-red-plastic-bowl-with-dry-food-for-dog-3d-rendering.jpg?s=612x612&w=0&k=20&c=JmByAu9kqN_gMoFjLILdxNAkHFvoleO20Hl1SZ4CBBo=",
    },
    {
      id: 6,
      name: "Dog food",
      title: "30% OFF",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnPMEHvF53fUH6gxZS6GCTw8rHBrCQ-vbnQ&s",
    },
  ];

  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
        🐶 Complete Care for Your Dog
      </h1>

      <div className="flex gap-6 overflow-x-auto lg:overflow-x-visible lg:flex-wrap justify-center m-2 my-8 lg:mx-12 sm:flex-wrap sm:justify-center">
        {pets.map((pet, index) => (
          <motion.div
            key={pet.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            // className="w-[220px] bg-gray-100 rounded-2xl shadow-md p-4 relative text-center"
            className="min-w-[200px] max-w-[200px] h-[180px] bg-white rounded-lg shadow-md p-4 text-center flex-shrink-0"
          >
            {/* Discount Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-sm px-4 py-1 rounded-full shadow">
              {pet.title}
            </div>

            {/* Circular Image */}
            <img
              src={pet.image}
              alt={pet.name}
              className="w-[100px] h-[100px] object-cover rounded-full mx-auto mb-2 border-4 border-pink-200"
            />

            {/* Pet Name */}
            <p className="text-sm font-medium text-gray-700">{pet.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Care;
