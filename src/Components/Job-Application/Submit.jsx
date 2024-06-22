import React from "react";

const Submit = ({ allData, selectedOptions }) => {
  return (
    <>
      <div className="w-full my-2 sm:px-20 bg-blue-400 sm:my-1.5 sm:w-6/12 flex justify-center rounded-md">
        <div className="py-5 px-2 sm:text-base text-sm text-white flex flex-col justify-between w-full gap-5">
          <div className="flex justify-center">
            <span className="text-3xl text-white font-semibold">Summary</span>
          </div>

          <div className="flex gap-6 justify-between">
            <span>Full Name </span>
            <span>{allData.fullname}</span>
          </div>

          <div className="flex gap-6 justify-between">
            <span>Email </span>
            <span>{allData.email}</span>
          </div>

          <div className="flex gap-6 justify-between">
            <span>Phone Number </span>
            <span>{allData.number}</span>
          </div>

          <div className="flex gap-6 justify-between">
            <span>Applying for Position </span>
            <span>{allData.Position}</span>
          </div>
          {allData.RelevantExperience && (
            <div className="flex gap-6 justify-between">
              <span>Relevant Experience</span>
              <span>{allData.RelevantExperience}</span>
            </div>
          )}

          <div className="flex gap-6 justify-between">
            <span>Management Experience</span>
            <span>{allData.ManagementExperience}</span>
          </div>

          {allData.Portfolio && (
            <div className="flex gap-6 justify-between">
              <span>Portfolio URL</span>
              <span>{allData.Portfolio}</span>
            </div>
          )}

          <div className="flex gap-6 justify-between  flex-row">
            <span>Additional Skills</span>

            <div className="flex flex-wrap justify-end text-center gap-2 text-sm text-gray-100 overflow-hidden w-1/2">
              {selectedOptions.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-6 justify-between items-center">
            <span>Preferred Interview Time</span>

            <div className="flex flex-row gap-2 text-sm ">
              <span>{allData.Time}</span>
              <span>{allData.Date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submit;
