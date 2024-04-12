import React, { useState } from "react";
import { useAuth } from "../../ProAuth/AuthPro.jsx";
import { FaRegStar } from "react-icons/fa";

const AddReviewComponent = ({ onSubmit, initialRating = 0 }) => {
  const { islogin } = useAuth();
  const [rating, setRating] = useState(initialRating);
  const [review, setReview] = useState("");

  const [reviewRating, setReviewRating] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ rating, review });
    setRating(initialRating); // Reset rating after submission
    setReview(""); // Reset review after submission
  };

  return (
    <>
      {islogin ? (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <div className="flex items-center space-x-1">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <FaRegStar
                  key={index}
                  className={`h-7 w-7 hover:cursor-pointer ${
                    rating >= index + 1 ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => handleRatingChange(index + 1)}
                />
              ))}
          </div>
          <textarea
            className="rounded-md border border-gray-300 p-2 text-base focus:outline-none focus:border-sky-500 resize-none"
            rows={5}
            placeholder="Write your review..."
            value={review}
            onChange={handleReviewChange}
          />
          <button
            type="submit"
            className="rounded-md bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 disabled:opacity-50"
            disabled={!review}
          >
            Submit Review
          </button>
        </form>
      ) : (
        <h1>Please login before you start giving review and rating </h1>
      )}
    </>
  );
};

export default AddReviewComponent;
