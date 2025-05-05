const ReviewsSection = () => {
  const reviews = [
    {
      name: "Shrey Girotra",
      date: "4 days ago",
      rating: 5,
      text: `Dear Zigly Doctors and the Entire Team,
  
  I am writing with immense gratitude to thank you for the incredible care you gave my dog, Rio, during his battle with parvovirus. From the moment we arrived, your team’s compassion, professionalism, and expertise gave me hope.
   
  Shrey Girotra`,
    },
    {
      name: "Jimmy Salim",
      date: "6 days ago",
      rating: 4.5,
      text: "The range of pet products here is incredible, especially the toys and treats!,The way you treated Rio — not just as a patient but like your own — made all the difference. Your updates, patience in answering every question, and warm interaction with him truly comforted me.",
    },

    {
      name: "Wilson MG",
      date: "1 month ago",
      rating: 5,
      text: `Zigly exceeded my expectations! The staff was courteous, helpful, and truly cared about my pet’s well-being.
  
  Special thanks to Mr. Abhimanyu for going the extra mile. I’ll definitely be coming back. Keep up the great work!`,
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
        ⭐ Customer Reviews
      </h2>
      <div className="text-center mb-6">
        <p className="text-lg font-medium text-gray-800">4.8 ★ (459 Reviews)</p>
        <button className="text-orange-600 underline hover:text-orange-800 mt-2">
          Review us on Google →
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-grey-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <p className="text-gray-700 whitespace-pre-line mb-4">
              "{review.text}"
            </p>
            <div className="text-sm text-gray-500 flex justify-between items-center">
              <span>— {review.name}</span>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
