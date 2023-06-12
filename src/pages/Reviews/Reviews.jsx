import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { BsArrowRightShort } from "react-icons/bs";

const Reviews = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">Reviews</h2>
      <Helmet>
        <title>Reviews | E-Learning</title>
      </Helmet>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border shadow-lg p-12 rounded-lg space-y-4 w-3/4 mx-auto"
        >
          <div>
            <label htmlFor="Rating" className="block text-lg font-semibold">
              Your Ratings
            </label>
            <input
              className="border w-full py-2 rounded-lg px-2 "
              type="number"
              {...register("example")}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold">
              Message
            </label>
            <textarea
              className="border w-full rounded-md py-12"
              {...register("exampleRequired", { required: true })}
            />
          </div>
          <div className="flex items-center w-2/6 bg-black text-white rounded-lg justify-center text-xl py-3 mx-auto mb-3">
            <button>SUBMIT</button>
            <BsArrowRightShort size={25}></BsArrowRightShort>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
