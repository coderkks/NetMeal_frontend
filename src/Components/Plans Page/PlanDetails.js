import React from 'react';
import Layout from '../Utilities/Layout';
import PlanReviews from './PlanReviews';

const PlanDetails = () => {
  const plan = {
    name: "Premium Meal Plan",
    price: 19.99,
    discount: 10,
    rating: 4.5,
    description: "Enjoy a variety of delicious meals delivered to your doorstep.",
  };

  return (
    <Layout>
        <div className="bg-gray-100 min-h-screen flex-col flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 mx-4 md:w-2/3 lg:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">{plan.name}</h2>
                <p className="text-gray-600 mb-2">${plan.price.toFixed(2)}</p>
                {plan.discount && (
                <p className="text-red-500 mb-4">Discount: {plan.discount}% off</p>
                )}
                <div className="flex items-center mb-4">
                <p className="text-yellow-400 mr-2">Rating:</p>
                <div className="flex items-center">
                    <span className="text-yellow-500">{plan.rating}</span>
                    <svg
                    className="w-5 h-5 text-yellow-500 ml-1"
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
                <p className="text-gray-700 mb-4">{plan.description}</p>
            </div>
            <PlanReviews/>
        </div>
    </Layout>
  );
};

export default PlanDetails;

