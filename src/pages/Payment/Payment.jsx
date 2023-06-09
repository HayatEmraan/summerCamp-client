import React from "react";

const Payment = () => {
  return (
    <div>
      <h2 className="text-3xl font-cinzel text-center mt-8 mb-20">
        Payment History
      </h2>
      <div className="overflow-x-auto border border-separate rounded-lg">
        <table className="table table-md">
          <thead className="bg-[#667085] text-[17px] text-white">
            <tr>
              <th>#</th>
              <th>Course</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Payment Medium</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
