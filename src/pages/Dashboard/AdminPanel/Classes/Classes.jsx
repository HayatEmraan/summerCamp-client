import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Classes = () => {
  const axiosSecure = useAxiosSecure();
  const [classes, setClasses] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure
      .get("/courses/list")
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err));
  }, [loading]);

  const handleApprove = (id, status) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to approve this class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",

      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/courses/update/${id}`, { status })
          .then((res) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class has been approved!",
              showConfirmButton: false,
              timer: 1000,
            });
            setLoading(!loading);
          })
          .catch((err) => console.log(err));
      }
    });
  };
  const handleDeny = (id, status) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to deny this class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",

      confirmButtonText: "Yes, deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/courses/update/${id}`, { status })
          .then((res) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class has been denied!",
              showConfirmButton: false,
              timer: 1000,
            });
            setLoading(!loading);
          })
          .catch((err) => console.log(err));
      }
    });
  };
  const handleFeedback = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to send feedback to this class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",

      confirmButtonText: "Yes, send it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sent!", "Feedback has been sent.", "success");
      }
    });
  };
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">
        Manage Classes
      </h2>
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
            {classes &&
              classes.reverse().map((classData, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{classData.courseName}</td>
                    <td>{classData.teacherName}</td>
                    <td>{classData.email}</td>
                    <td>
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() =>
                            handleApprove(classData._id, "success")
                          }
                          disabled={
                            classData?.status === "success" || "deny"
                              ? true
                              : false
                          }
                          className={`${
                            classData?.status === "success" || "deny"
                              ? "bg-slate-400 text-white px-4 py-2 rounded-md"
                              : "bg-green-500 text-white px-4 py-2 rounded-md"
                          }`}
                        >
                          {classData?.status === "success"
                            ? "APPROVED"
                            : "APPROVE"}
                        </button>
                        <button
                          onClick={() => handleDeny(classData._id, "deny")}
                          disabled={
                            classData?.status === "success" ? true : false
                          }
                          className={`${
                            classData?.status === "success"
                              ? "bg-slate-400 text-white px-4 py-2 rounded-md"
                              : "bg-purple-500 text-white px-4 py-2 rounded-md"
                          }`}
                        >
                          {classData?.status === "deny" ? "DENIED" : "DENY"}
                        </button>
                        <button
                          onClick={() => handleFeedback(classData._id)}
                          className={`${
                            classData.status === "deny"
                              ? "bg-green-500 text-white px-4 py-2 rounded-md"
                              : "bg-slate-500 text-white px-4 py-2 rounded-md"
                          }`}
                        >
                          SEND FEEDBACK
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
