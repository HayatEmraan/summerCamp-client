import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import NoResults from "../../libs/Tabs/NoResults";
import DomLoader from "../../libs/Loader/DomLoader";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [paymentHistory, setPaymentHistory] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure
      .get(`/payment/history?email=${user?.email}`)
      .then((res) => {
        setPaymentHistory(res.data);
        setLoading(false);
      })
      .catch((err) => toast.error("Something went wrong. Please try again!"));
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">
        Payment History
      </h2>
      <Helmet>
        <title>Payment | E-Learning</title>
      </Helmet>
      {loading ? (
        <DomLoader></DomLoader>
      ) : (
        <>
          {paymentHistory && paymentHistory.length > 0 ? (
            <div className="overflow-x-auto border border-separate rounded-lg">
              <table className="table table-md">
                <thead className="bg-[#667085] text-[17px] text-white">
                  <tr>
                    <th>#</th>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Payment Medium</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory &&
                    paymentHistory.map((payment, index) => {
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>
                            {payment.courses.length > 1
                              ? "Bundle"
                              : payment.courses.map((course) => course.name)}
                          </td>
                          <td>{payment.date}</td>
                          <td className="text-[#3b9caf] flex gap-2 items-center">
                            <img
                              src="https://cdn.ostad.app/images/other/check-double-line-color.svg"
                              alt=""
                            />
                            {payment.status}
                          </td>
                          <td>Stripe</td>
                          <td>${payment.price}</td>
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
  );
};

export default Payment;
