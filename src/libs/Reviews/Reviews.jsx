import React, { useEffect, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetch("feedback.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mx-3 mb-12">
      <div>
        <h2 className="font-semibold text-2xl mb-4">
          How learners like you are achieving their goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {reviews?.map((review, index) => {
            return (
              <div className="bg-[#F7F9FA] py-8 px-6" key={index}>
                <RiDoubleQuotesL size={34}></RiDoubleQuotesL>
                <h1 className="mb-3">{review.feedback}</h1>
                <div className="flex gap-2 items-center my-4">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={review.photoUrl} alt="" />
                    </div>
                  </div>
                  <h2>{review.name}</h2>
                </div>
                <hr />
                <h2 className="text-end"><span className="italic font-light">updated at</span> {review.feedbackDate}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
