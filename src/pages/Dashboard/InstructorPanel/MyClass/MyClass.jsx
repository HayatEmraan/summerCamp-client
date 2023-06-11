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
  const [feedbackData, setFeedbackData] = useState(null);
  const handleFeedback = (feedback) => {
    setFeedbackData(feedback);
    window.my_modal_2.showModal();
  };
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
                        <button
                          className="bg-purple-500 text-white px-4 py-2 rounded-md"
                          disabled
                        >
                          {dt.status}
                        </button>
                      ) : (
                        <button
                          className={`${
                            dt.status === "deny"
                              ? "bg-red-500 text-white px-4 py-2 rounded-md w-16"
                              : "bg-indigo-500 text-white px-4 py-2 rounded-md w-16"
                          }`}
                          disabled
                        >
                          {dt.status}
                        </button>
                      )}
                    </td>
                    <td>
                      {dt.feedback && (
                        <button
                          onClick={() => handleFeedback(dt.feedback)}
                          className="bg-slate-400 text-white px-4 py-2 rounded-md"
                        >
                          view details
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-semibold text-lg text-center font-cinzel">
              feedback from team!
            </h3>
            <hr />
            <p className="py-4">-------- {feedbackData}</p>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default MyClass;
