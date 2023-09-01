import React from 'react';

export default function PlanReviews () {
  const plan = {
    // ... (previous plan details)
    reviews: [
      { id: 1, user: "User123", rating: 5, comment: "Absolutely loved the meals! Highly recommended." },
      { id: 2, user: "Foodie22", rating: 4, comment: "Great taste and good value for money." },
      // Add more reviews here
    ],
  };

  return (
    
      <div className="bg-white shadow-lg rounded-lg p-8 mt-2 mx-4 md:w-2/3 lg:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
        <ul>
          {plan.reviews.map((review) => (
            <li key={review.id} className="mb-4">
              <div className="flex items-center mb-2">
                <p className="text-gray-600 mr-2">{review.user}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">
                    Rating: {review.rating}
                  </span>
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
  );
};

