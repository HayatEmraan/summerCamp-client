import React from "react";
import { useForm } from "react-hook-form";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const AddAClass = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((dataImg) => {
        axiosSecure
          .post("/class", {
            courseName: data.name,
            teacherName: user?.displayName,
            email: user?.email,
            price: data.price,
            availableSits: 80,
            status: "pending",
            category: data.category,
            description: data.description,
            thumbnailImage: dataImg.data.display_url,
          })
          .then((res) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class has been added!",
              showConfirmButton: false,
              timer: 1000,
            });
          })
          .catch((err) => toast.error("Something went wrong. Please try again!"));
      });
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-cinzel text-center mt-8 mb-16">
          Add A Class
        </h2>
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type class name"
                ></input>
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  {...register("price", { required: true })}
                  id="price"
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$29.99"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  {...register("category", { required: true })}
                  defaultValue={"DEFAULT"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="DEFAULT" disabled>
                    Select category
                  </option>
                  <option value="Bangla">Bangla</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Spanish">Spanish</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image
                </label>
                <input
                  {...register("image", { required: true })}
                  id="image"
                  type="file"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$29.99"
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex font-cinzel items-center justify-center w-full px-6 py-3 mt-8 text-base font-medium bg-red-400 text-white rounded-md shadow-sm"
            >
              Add Class
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddAClass;
