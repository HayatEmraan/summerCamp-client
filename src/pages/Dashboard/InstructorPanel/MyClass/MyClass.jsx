import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const MyClass = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [data, setData] = useState(null);
  useEffect(() => {
    axiosSecure
      .get(`/classes?email=${user?.email}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-16">
        My Classes
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Rest Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((dt, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{dt.courseName}</td>
                    <td>{dt.category}</td>
                    <td>{dt.availableSits}</td>
                    <td>${dt.price}</td>
                    <td>
                      {dt.status === "pending" ? (
                        <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
                          {dt.status}
                        </button>
                      ) : (
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
                          {dt.status}
                        </button>
                      )}
                    </td>
                    <td>
                      <button className="bg-slate-400 text-white px-4 py-2 rounded-md">
                        view details
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

export default MyClass;
