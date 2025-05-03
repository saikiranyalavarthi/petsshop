import React from "react";
import { motion } from "framer-motion";

const Dealslist = [
  {
    id: 1,

    name: "Walk Essentials",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/WEB-2881050-May25_6TUS6_AFDM-CONs_DT",
  },
  {
    id: 2,

    name: "Bowls and Feeders",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/WEB-2881050-May25_6TUS8_AFDM-CONs_DT",
  },
  {
    id: 3,

    name: "Clothing and Accessories",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/WEB-2881050-May25_6TUS4_AFDM-CONs_DT",
  },
  {
    id: 4,

    name: "Beds and Blankets",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/WEB-2881050-May25_6TUS3_AFDM-CONs_DT",
  },
  {
    id: 5,

    name: "Cat Food",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/WEB-2881050-May25_6TUS2_AFDM-CONs_DT",
  },
  {
    id: 6,

    name: "Dog Food",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/WEB-2881050-May25_6TUS1_AFDM-CONs_DT",
  },
];

const Deals = () => {
  return (
    <div className="px-4 mt-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        🏷️ Premium Brand Deals
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {Dealslist.map((deal, index) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="w-[220px] bg-white border border-gray-200 rounded-2xl shadow-lg p-4 text-center relative"
          >
            <img
              src={deal.image}
              alt={deal.name}
              className="w-[100px] h-[100px] object-cover rounded-full mx-auto mb-3 border-4 border-pink-200"
            />

            {/* Name */}
            <p className="text-sm font-semibold text-gray-700">{deal.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
