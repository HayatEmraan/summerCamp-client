import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axiosSecure
      .get("/users/data")
      .then((res) => setUsers(res.data))
      .catch((err) => toast.error("Something went wrong. Please try again!"));
  }, [loading]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/data/${id}`)
          .then((res) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User has been deleted!",
              showConfirmButton: false,
              timer: 1000,
            });
            setLoading(!loading);
          })
          .catch((err) =>
            toast.error("Something went wrong. Please try again!")
          );
      }
    });
  };
  const handleUpdate = (id, role) => {
    axiosSecure
      .patch(`/users/update/${id}`, { role })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User has been updated!",
          showConfirmButton: false,
          timer: 1000,
        });
        setLoading(!loading);
      })
      .catch((err) => toast.error("Something went wrong. Please try again!"));
  };
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr className="text-start">
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Sign Up Date</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.date}</td>
                    <td>
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => handleUpdate(user._id, "admin")}
                          disabled={user?.role === "admin" ? true : false}
                          className={`${
                            user?.role === "admin"
                              ? "bg-slate-400 text-white px-4 py-2 rounded-md invisible"
                              : "bg-green-500 text-white px-4 py-2 rounded-md"
                          }`}
                        >
                          Admin
                        </button>
                        <button
                          onClick={() => handleUpdate(user._id, "instructor")}
                          disabled={user?.role === "instructor" ? true : false}
                          className={`${
                            user?.role === "instructor"
                              ? "bg-slate-400 text-white px-4 py-2 rounded-md invisible"
                              : "bg-purple-500 text-white px-4 py-2 rounded-md"
                          }`}
                        >
                          Instructor
                        </button>
                        <button
                          onClick={() => handleUpdate(user._id, "user")}
                          disabled={user?.role === "user" ? true : false}
                          className={`${
                            user?.role === "user"
                              ? "bg-slate-400 text-white px-4 py-2 rounded-md invisible"
                              : "bg-indigo-500 text-white px-4 py-2 rounded-md"
                          }`}
                        >
                          User
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
