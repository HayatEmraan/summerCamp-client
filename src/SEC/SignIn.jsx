import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { set, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo/logo.jpg";
import { CgSpinnerTwo } from "react-icons/cg";
import { toast } from "react-hot-toast";
const SignIn = () => {
  const { signIn, signInWithGoogle, resetPassword, loading, setLoading } =
    useContext(AuthContext);
  console.log(loading);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [eyeActive, setEyeActive] = useState(false);
  const onSubmit = (data) => {
    signIn(data.email, data.password)
        .then((res) => {
            toast.success("Successfully logged In!");
            console.log(res)
        })
      .catch((err) => console.log(err));
  };
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => console.log(res))
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto w-1/4 border p-8 shadow-md rounded-xl">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Welcome back, Olivia</h2>
          <p>Continue with Google or enter your details</p>
          <div
            onClick={handleSignInWithGoogle}
            className="flex justify-center items-center space-x-2 border my-6 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <div className="divider mb-20">or</div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6"
          >
            <input
              type="email"
              className="border-b border-gray-400 focus:outline-none"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            <div className="relative">
              <input
                type={`${eyeActive ? "text" : "password"}`}
                className="border-b border-gray-400 focus:outline-none w-full"
                {...register("password", { required: true })}
                placeholder="Password"
              />
              <div className="absolute top-0 right-0 text-xl cursor-pointer">
                {eyeActive ? (
                  <AiFillEye
                    onClick={() => setEyeActive(!eyeActive)}
                  ></AiFillEye>
                ) : (
                  <AiFillEyeInvisible
                    onClick={() => setEyeActive(!eyeActive)}
                  ></AiFillEyeInvisible>
                )}
              </div>
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
            {loading ? (
              <div className="bg-black text-white text-3xl rounded-md">
                <CgSpinnerTwo className="p-1 animate-spin mx-auto"></CgSpinnerTwo>
              </div>
            ) : (
              <input
                type="submit"
                value="Sign In"
                className="bg-black text-white py-1 rounded-md cursor-pointer"
              />
            )}
          </form>
          <div className="mt-8 text-center">
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
