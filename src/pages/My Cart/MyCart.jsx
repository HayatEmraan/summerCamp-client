import React from "react";
import { useCart } from "../../Hooks/useCart";
import { MdDelete } from "react-icons/md";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import cartImg from "../../assets/cart/empty-cart.png";
import DomLoader from "../../libs/Loader/DomLoader";
const MyCart = () => {
  const { cart, refetch, isLoading } = useCart();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/order/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Successfully Deleted!");
          refetch();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!");
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">My Cart</h2>
      {isLoading ? (
        <DomLoader></DomLoader>
      ) : (
        <>
          {cart && cart.length > 0 ? (
            <div className="overflow-x-auto border border-separate rounded-lg pt-3">
              <div className="font-cinzel flex justify-between mx-4 text-3xl font-semibold mb-4">
                <h2>total orders: {cart?.length}</h2>
                <h2>
                  total price: $
                  {cart &&
                    cart.reduce(
                      (previous, newTotal) => previous + newTotal.price,
                      0
                    )}
                </h2>
                <Link
                  to="/dashboard/checkout"
                  className="bg-[#D1A054] px-3 rounded-md text-white py-1 text-xl"
                >
                  pay
                </Link>
              </div>
              <table className="table table-md">
                <thead className="bg-[#667085] text-[17px] text-white">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Payment</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart &&
                    cart.map((course, index) => {
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{course.name}</td>
                          <td>{course.category}</td>
                          <td>{course.status}</td>
                          <td>${course.price}</td>
                          <td
                            onClick={() => handleDelete(course._id)}
                            className="text-red-600 cursor-pointer"
                          >
                            <MdDelete size={25}></MdDelete>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="hero container max-w-screen-lg mx-auto pb-10">
              <img src={cartImg} alt="" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyCart;
