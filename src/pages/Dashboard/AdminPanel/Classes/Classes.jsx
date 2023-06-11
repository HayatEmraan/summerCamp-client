import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Classes = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axiosSecure
      .get("/users/data")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">Manage Classes</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr className="text-start">
              <th>#</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Action</th>
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
                          APPROVE
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
                        DENY
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
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
