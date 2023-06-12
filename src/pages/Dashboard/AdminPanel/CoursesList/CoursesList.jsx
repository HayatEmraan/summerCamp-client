import React, { useEffect, useState } from "react";
import NoResults from "../../../../libs/Tabs/NoResults";
import DomLoader from "../../../../libs/Loader/DomLoader";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const CoursesList = () => {
  const axiosSecure = useAxiosSecure();
  const [coursesData, setCoursesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  useEffect(() => {
    axiosSecure
      .get(`/courses/all`)
      .then((res) => {
        setCoursesData(res.data);
        setLoading(false);
      })
      .catch((err) => toast.error("Something went wrong. Please try again!"));
  }, [updateLoading]);
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
          .delete(`/courses/delete/${id}`)
          .then((res) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Course has been deleted!",
              showConfirmButton: false,
              timer: 1000,
            });
            setUpdateLoading(!updateLoading);
          })
          .catch((err) =>
            toast.error("Something went wrong. Please try again!")
          );
      }
    });
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">
          All Courses
        </h2>
        <Helmet>
          <title>Courses | E-Learning</title>
        </Helmet>
        {loading ? (
          <DomLoader></DomLoader>
        ) : (
          <>
            {coursesData && coursesData.length > 0 ? (
              <div className="overflow-x-auto border border-separate rounded-lg">
                <table className="table table-xs">
                  <thead className="bg-[#667085] text-[17px] text-white">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Instructor</th>
                      <th>Rest Seats</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData &&
                      coursesData.map((course, index) => {
                        return (
                          <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{course.courseName}</td>
                            <td>{course.teacherName}</td>
                            <td>{course.availableSits}</td>
                            <td>${course.price}</td>
                            <td>
                              <div className="flex gap-2">
                                <p className="bg-green-500 text-white px-4 py-2 rounded-md w-20 text-center">
                                  {course.category}
                                </p>
                              </div>
                            </td>
                            <td>
                              <button
                                onClick={() => handleDelete(course._id)}
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
            ) : (
              <NoResults></NoResults>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CoursesList;
