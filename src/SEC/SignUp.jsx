import React, { useContext, useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { set, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo/logo.jpg";
import { CgSpinnerTwo } from "react-icons/cg";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";
  const {
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
  } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [eyeActive, setEyeActive] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);
  const [refPassword, setRefPassword] = useState(null);
  const [refConfirmPass, setRefConfirmPass] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);
  useEffect(() => {
    if (refConfirmPass && refPassword && refPassword !== refConfirmPass) {
      setDisableBtn(true);
      return setPasswordMatch("password doesn't matched!");
    }
    if (refConfirmPass && refPassword && refPassword === refConfirmPass) {
      setDisableBtn(false);
      return setPasswordMatch("");
    }
  }, [refConfirmPass, refPassword]);
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((dataImg) => {
        createUser(data.email, data.password)
          .then((res) => {
            updateUserProfile(data.name, dataImg.data.url);
            reset();
            toast.success("Successfully SignUp!");
            navigate(from, { replace: true });
          })
          .catch((err) => {
            toast.error("Something went wrong. Please try again!");
            setLoading(false);
          });
      })
      .catch((err) => {
        toast.error("Something went wrong. Please try again later");
        setLoading(false);
      });
  };
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        navigate(from, { replace: true });
        toast.success("Authentication Successful!");
      })
      .catch((err) => {
        toast.error("Something went wrong. Please try again!");
        setLoading(false);
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
              type="text"
              className="border-b border-gray-400 focus:outline-none"
              {...register("name", { required: true })}
              placeholder="Name"
            />
            <input
              type="email"
              className="border-b border-gray-400 focus:outline-none"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
              })}
              placeholder="Email"
            />
            {errors.email && (
              <div className="flex items-center gap-2 text-warning">
                <AiOutlineQuestionCircle></AiOutlineQuestionCircle>
                <small className="text-red-400">
                  {"Please enter a valid email address."}
                </small>
              </div>
            )}
            <div className="relative">
              <input
                type={`${eyeActive ? "text" : "password"}`}
                className="border-b border-gray-400 focus:outline-none w-full"
                {...register("password", {
                  required: true,
                  pattern: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                })}
                placeholder="Password"
                onChange={(e) => setRefPassword(e.target.value)}
              />
              {errors.password && (
                <div className="flex items-center gap-2 text-warning">
                  <AiOutlineQuestionCircle></AiOutlineQuestionCircle>
                  <small className="text-red-400">
                    {
                      "Minimum eight characters, at least one letter and one number"
                    }
                  </small>
                </div>
              )}
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
            <div className="relative">
              <input
                type={`${confirmPass ? "text" : "password"}`}
                className="border-b border-gray-400 focus:outline-none w-full"
                {...register("ConfirmPass", { required: true })}
                placeholder="Confirm Password"
                onChange={(e) => setRefConfirmPass(e.target.value)}
              />
              <div className="absolute top-0 right-0 text-xl cursor-pointer">
                {confirmPass ? (
                  <AiFillEye
                    onClick={() => setConfirmPass(!confirmPass)}
                  ></AiFillEye>
                ) : (
                  <AiFillEyeInvisible
                    onClick={() => setConfirmPass(!confirmPass)}
                  ></AiFillEyeInvisible>
                )}
              </div>
            </div>
            {passwordMatch && (
              <div className="flex items-center gap-2 text-warning">
                <AiOutlineQuestionCircle></AiOutlineQuestionCircle>
                <small className="text-red-400">{passwordMatch}</small>
              </div>
            )}
            <input type="file" {...register("image", { required: true })} />
            {loading ? (
              <div className="bg-black text-white text-3xl py-2 rounded-md">
                <CgSpinnerTwo size={28} className="animate-spin mx-auto"></CgSpinnerTwo>
              </div>
            ) : (
              <input
                type="submit"
                disabled={disableBtn}
                value="Sign Up"
                className={`text-white py-2 text-xl font-semibold rounded-md ${
                  disableBtn
                    ? "cursor-not-allowed bg-gray-600"
                    : "cursor-pointer bg-black"
                }`}
              />
            )}
          </form>
          <div className="mt-8 text-center">
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                access your account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
