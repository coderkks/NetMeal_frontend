import React, {useState} from 'react';

export default function UserProfile () {
  const mealPlanHistory = [];
  const currentPlans = [];
  const feedbacksProvided = [];

  const userReviews = [];

  const [showHistoryAccordion, setShowHistoryAccordion] = useState(false);
  const [showCurrentPlansAccordion, setShowCurrentPlansAccordion] = useState(false);
  const [showFeedbacksAccordion, setShowFeedbacksAccordion] = useState(false);
  const [showReviewsAccordion, setShowReviewsAccordion] = useState(false);

  return (
    <div className="py-8 md:px-16 max-w-md">
        <h2 className="text-2xl md:text-3xl text-center font-semibold underline underline-offset-4 decoration-2 decoration-cyan-700 py-2  mb-4">Plans And Reviews</h2>
        {/* Meal Plan History */}
        <div>
          <h4
            className="text-lg font-medium cursor-pointer"
            onClick={() => setShowHistoryAccordion(!showHistoryAccordion)}
          >
            Meal Plans History
          </h4>
          {showHistoryAccordion ? (
            <ul className="list-disc pl-6">
              {mealPlanHistory.map((plan) => (
                <li key={plan.id} className="text-gray-600">
                  {plan.name} - {plan.duration}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">
              {mealPlanHistory.length > 0 ? `${mealPlanHistory.length} items` : 'No history'}
            </p>
          )}
        </div>

        <hr className="my-4" />

        {/* Current Plans */}
        <div>
          <h4
            className="text-lg font-medium cursor-pointer"
            onClick={() => setShowCurrentPlansAccordion(!showCurrentPlansAccordion)}
          >
            Current Plans
          </h4>
          {showCurrentPlansAccordion ? (
            <ul className="list-disc pl-6">
              {currentPlans.map((plan) => (
                <li key={plan.id} className="text-gray-600">
                  {plan.name} - {plan.duration}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">
              {currentPlans.length > 0 ? `${currentPlans.length} items` : 'No current plans'}
            </p>
          )}
        </div>

        <hr className="my-4" />

        {/* Feedbacks Provided */}
        <div>
          <h4
            className="text-lg font-medium cursor-pointer"
            onClick={() => setShowFeedbacksAccordion(!showFeedbacksAccordion)}
          >
            Feedbacks Provided
          </h4>
          {showFeedbacksAccordion ? (
            <ul className="list-disc pl-6">
              {feedbacksProvided.map((feedback) => (
                <li key={feedback.id} className="text-gray-600">
                  {feedback.subject} - {feedback.providedAt}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">
              {feedbacksProvided.length > 0 ? `${feedbacksProvided.length} items` : 'No Feedback Provided'}
            </p>
          )}
        </div>

        <hr className="my-4" />

        {/* User Reviews */}
        <div>
          <h4
            className="text-lg font-medium cursor-pointer"
            onClick={() => setShowReviewsAccordion(!showReviewsAccordion)}
          >
            Your Reviews
          </h4>
          {showReviewsAccordion ? (
            <ul className="list-disc pl-6">
              {userReviews.map((review) => (
                <li key={review.id} className="text-gray-600">
                  {review.subject} - {review.providedAt}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">
              {userReviews.length > 0 ? `${userReviews.length} items` : 'No Review Given'}
            </p>
          )}
        </div>

        <div className="flex justify-start">
            <button className="mt-6  bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-full">
            Sign Out
            </button>
        </div>
    </div>
  );
};


