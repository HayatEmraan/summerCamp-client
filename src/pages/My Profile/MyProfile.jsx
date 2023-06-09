import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { BsArrowRightShort } from "react-icons/bs";
import password from "../../assets/password/my-password.svg";
const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">
        Personal Details
      </h2>
      <div className="flex gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border shadow-lg p-12 rounded-lg space-y-4 w-3/4 mx-auto"
        >
          <img
            style={{ width: "150px", height: "150px" }}
            className="mx-auto"
            src={user?.photoURL}
            alt=""
          />
          <div>
            <label htmlFor="Rating" className="block text-lg">
              Your Name
            </label>
            <input
              className="border w-full py-2 rounded-lg px-2"
              defaultValue={user?.displayName}
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="Rating" className="block text-lg">
              Your Email
            </label>
            <input
              className="border w-full py-2 rounded-lg px-2"
              defaultValue={user?.email}
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="Rating" className="block text-lg font-semibold">
              Phone Number
            </label>
            <input
              className="border w-full py-2 rounded-lg px-2"
              defaultValue={user?.phoneNumber}
              {...register("number")}
            />
          </div>
          <div className="flex items-center w-2/6 bg-black text-white rounded-lg justify-center text-xl py-3 mx-auto mb-3">
            <button>UPDATE</button>
            <BsArrowRightShort size={25}></BsArrowRightShort>
          </div>
        </form>
        <div className="border shadow-lg p-12 rounded-lg space-y-4 w-3/4 mx-auto">
          <img className="mx-auto" src={password} alt="" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="Rating" className="block text-lg">
                New password
              </label>
              <input
                className="border w-full py-2 rounded-lg px-2"
                {...register("NewPass")}
              />
            </div>
            <div>
              <label htmlFor="Rating" className="block text-lg font-semibold">
                Confirm password
              </label>
              <input
                className="border w-full py-2 rounded-lg px-2"
                {...register("confirmPass")}
              />
            </div>
            <div className="flex items-center w-2/4 bg-black text-white rounded-lg justify-center text-xl py-3 mx-auto my-3">
              <button>SET PASSWORD</button>
              <BsArrowRightShort size={25}></BsArrowRightShort>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
