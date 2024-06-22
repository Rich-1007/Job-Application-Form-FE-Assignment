import React from "react";

const Submit = ({ allData }) => {
  return (
    <>
      <div className="w-screen my-2 sm:px-20  sm:my-1.5 sm:w-6/12 flex justify-center rounded-md">
        <div className="py-5 px-2 sm:text-base bg-blue-400 text-sm text-white flex flex-col justify-between sm:w-full w-11/12 gap-5 rounded-md">
          <div className="flex justify-center">
            <span className="text-3xl text-white font-semibold">Summary</span>
          </div>

          <div className="flex gap-6 justify-between">
            <span>Full Name </span>
            <span>{allData.Name}</span>
          </div>

          <div className="flex gap-6 justify-between">
            <span>Email </span>
            <span>{allData.Email}</span>
          </div>

          <div className="flex gap-6 justify-between">
            <span>Age </span>
            <span>{allData.Age}</span>
          </div>

          <div className="flex gap-6 justify-between">
            <span>Guest </span>
            {allData.Guest ? <span>Yes</span> : <span>No</span>}
          </div>

          {allData.Guest &&
            <div className="flex gap-6 justify-between">
              <span>GuestName </span>
              <span>{allData.GuestName}</span>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Submit;
