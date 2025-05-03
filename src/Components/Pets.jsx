import React from "react";
import { motion } from "framer-motion";

function PetSection() {
  const pets = [
    {
      id: 1,
      name: "Dog",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-bichon-frise-dog-royalty-free-image-1682312789.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=980:*",
    },
    {
      id: 2,
      name: "Cat",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-bichon-frise-dog-royalty-free-image-1682312789.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=980:*",
    },
    {
      id: 3,
      name: "Pets",
      image:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    },
    {
      id: 4,
      name: "pets",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnPMEHvF53fUH6gxZS6GCTw8rHBrCQ-vbnQ&s",
    },
    {
      id: 5,
      name: "Dog",
      image:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    },
    {
      id: 6,
      name: "pets",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnPMEHvF53fUH6gxZS6GCTw8rHBrCQ-vbnQ&s",
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap justify-center m-10">
      {pets.map((pet, index) => (
        <motion.div
          key={pet.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="w-[200px] h-[180px] bg-white rounded-lg shadow-md p-4 text-center"
        >
          <img
            src={pet.image}
            alt={pet.name}
            className="w-[100px] h-[100px] object-cover rounded-full mx-auto mb-2"
          />
          <h2 className="text-xl font-semibold">{pet.name}</h2>
        </motion.div>
      ))}
    </div>
  );
}

export default PetSection;
