import React from "react";

const Bannernew = () => {
  return (
    <div className="w-full mt-4 h-64 bg-[#f5deb3] flex items-center justify-center relative overflow-hidden rounded-lg shadow-md">
      {/* Decorative Circles */}
      <div className="absolute w-40 h-40 bg-white opacity-10 rounded-full -top-10 -left-10"></div>
      <div className="absolute w-32 h-32 bg-white opacity-10 rounded-full -bottom-10 -right-10"></div>

      {/* Dog Image */}
      <img
        // src="https://www.zigly.com/media/wysiwyg/dog-playful.png"
        src="https://www.zigly.com/media/wysiwyg/Vet-Banner-Web-min.png"
        alt="Playful Dog"
        className="w-[1500px] h-[400px] object-contain"
      />
    </div>
  );
};

export default Bannernew;
