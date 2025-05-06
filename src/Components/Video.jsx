import React from "react";

const Video = () => {
  return (
    <div className=" flex items-center justify-center bg-amber-300 p-1 m-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full bg-white shadow-xl rounded-2xl p-6">
        {/* Left Side - Pet Shop Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-600">
            🐾 Welcome to Paws & Tails Pet Shop
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            At Paws & Tails, we offer a wide range of healthy pets, tasty
            treats, cute accessories, and top-notch grooming services. Your
            furry friend deserves the best — and we’re here to deliver it with
            love!
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>🐶 Puppies & Kittens Available</li>
            <li>🛍️ Premium Pet Products</li>
            <li>🧼 Grooming & Spa Services</li>
            <li>📦 Free Home Delivery</li>
          </ul>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow">
            Shop Now
          </button>
        </div>

        {/* Right Side - Pet Video */}
        <div className="flex justify-center items-center">
          <video controls className="w-full rounded-lg shadow-md">
            <iframe
              className="w-full aspect-video rounded-lg shadow-md"
              src="https://youtu.be/jXHOHOYkbYc?si=JrNnKwmdleaEEppD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
