import React, { useEffect, useState } from "react";
import { Validate } from "./Validate";
import Submit from "./Submit";

const Home = () => {
  const [allData, setAllData] = useState({
    fullname: "",
    email: "",
    number: "",
    Position: "",
    Portfolio: "",
    RelevantExperience: "",
    ManagementExperience: "",
    Time: "",
    Date: "",
    Skills: "",
  });

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [isClicked, setIsClicked] = useState();
  const [errors, setErrors] = useState(null);

  console.log(errors);
  // console.log(allData.Time);

  function handleCheckboxChange(e) {
    if (e.target.checked) {
      setSelectedOptions([...selectedOptions, e.target.value]);
    } else {
      const UpdatedValue = selectedOptions.filter(
        (item) => item !== e.target.value
      );
      setSelectedOptions(UpdatedValue);
      // console.log(UpdatedValue);
    }
  }

  useEffect(() => {
    setAllData({ ...allData, Skills: selectedOptions.length });
  }, [selectedOptions]);

  console.log(allData.Skills);

  // console.log(selectedOptions.length);

  useEffect(() => {
    setIsClicked(false);
  }, [allData]);

  function HandleisClicked() {

    setIsClicked(true);
  }

  function FormSubmitHandler(e) {
    e.preventDefault();

    const ErrorData = Validate(allData);
    setErrors(ErrorData);
  }

  return (
    <div className="bg-gray-700 px-3 sm:px-20 pb-6 flex flex-col items-center ">
      <div className="flex w-full py-10 justify-center text-2xl font-semibold text-white">
        <span>Job Application Form</span>
      </div>

      <div className="sm:w-6/12 flex justify-center rounded-md bg-gray-300 px-3 py-6 sm:px-3 flex-col">
        <form action="" onSubmit={FormSubmitHandler}>
          <div className="flex flex-col gap-5 text-xs sm:text-base">
            <div className="flex flex-row gap-2 justify-between">
              <span>Full Name *</span>

              <div className="">
                <input
                  value={allData.fullname}
                  onChange={(e) =>
                    setAllData({ ...allData, fullname: e.target.value })
                  }
                  type="text"
                  placeholder="Full Name"
                  className="px-2 rounded-sm h-8 outline-none"
                />

                <div className="flex px-2">
                  {errors?.fullname && (
                    <span className="absolute text-xs text-red-500">
                      {errors.fullname}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2 justify-between">
              <span>Email *</span>
              <input
                value={allData.email}
                onChange={(e) =>
                  setAllData({ ...allData, email: e.target.value })
                }
                type="email"
                placeholder="Email"
                className="px-2 rounded-sm h-8 outline-none"
              />
            </div>

            <div className="flex flex-row gap-2 justify-between">
              <span>Phone Number *</span>

              <div>
                <input
                  value={allData.number}
                  onChange={(e) =>
                    setAllData({ ...allData, number: e.target.value })
                  }
                  type="text"
                  placeholder="Phone Number"
                  className="px-2 rounded-sm h-8 outline-none"
                />

                <div className="flex px-2">
                  {errors?.number && (
                    <span className="absolute text-xs text-red-500">
                      {errors.number}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2 justify-between">
              <span>Applying for Position *</span>

              <select
                value={allData.Position}
                onChange={(e) =>
                  setAllData({ ...allData, Position: e.target.value })
                }
                name=""
                id=""
                className="px-2 rounded-sm h-8 outline-none text-gray-800"
              >
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            {(allData.Position == "Developer" ||
              allData.Position == "Designer") && (
              <div className="flex  gap-2 justify-between ">
                <span>Relevant Experience *</span>
                <input
                  onChange={(e) =>
                    setAllData({
                      ...allData,
                      RelevantExperience: e.target.value,
                    })
                  }
                  min={1}
                  type="number"
                  placeholder="1"
                  className="px-2 rounded-sm h-8 outline-none text-gray-800"
                />
              </div>
            )}

            {allData.Position == "Designer" && (
              <div className="flex gap-2 justify-between">
                <span>Portfolio URL *</span>

                <div>
                  <input
                    onChange={(e) =>
                      setAllData({ ...allData, Portfolio: e.target.value })
                    }
                    type="text"
                    placeholder="Enter Url"
                    className="px-2 rounded-sm h-8 outline-none text-gray-800"
                  />

                  <div className="flex px-2">
                    {errors?.Portfolio && (
                      <span className="absolute text-xs text-red-500">
                        {errors.Portfolio}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {allData.Position == "Manager" && (
              <div className="flex gap-2 justify-between items-center">
                <span>Management Experience *</span>
                <input
                  onChange={(e) =>
                    setAllData({
                      ...allData,
                      ManagementExperience: e.target.value,
                    })
                  }
                  min={1}
                  type="number"
                  placeholder="1"
                  className="px-2 rounded-sm h-8 outline-none text-gray-800"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-2 ">
              <div className="flex flex-row  gap-2">
                <label>Additional Skills *</label>

                {errors?.Skills && (
                  <span className=" text-xs text-red-500">{errors.Skills}</span>
                )}
              </div>

              <div className="flex gap-3 items-center flex-wrap text-gray-600 text-sm">
                <div className="flex gap-2">
                  <label>Html</label>
                  <input
                    type="checkbox"
                    value="Html"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="flex gap-2">
                  <span>Css</span>
                  <input
                    type="checkbox"
                    value="Css"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="flex gap-2">
                  <span>Tailwind</span>
                  <input
                    type="checkbox"
                    value="Tailwind"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="flex gap-2">
                  <span>JavaScript</span>
                  <input
                    type="checkbox"
                    value="JavaScript"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="flex gap-2">
                  <span>React.Js</span>
                  <input
                    type="checkbox"
                    value="React.Js"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="flex gap-2">
                  <span>Sql</span>
                  <input
                    type="checkbox"
                    value="Sql"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="flex gap-2">
                  <span>React Native</span>
                  <input
                    type="checkbox"
                    value="React Native"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="flex gap-2">
                  <span>Bootstrap</span>
                  <input
                    type="checkbox"
                    value="Bootstrap"
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className="flex gap-2">
                  <span>TypeScript</span>
                  <input
                    type="checkbox"
                    value="TypeScript"
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-2 justify-between">
                <span>Preferred Interview time *</span>
                <input
                  onChange={(e) =>
                    setAllData({ ...allData, Time: e.target.value })
                  }
                  type="time"
                  className="px-2 rounded-sm h-8 outline-none text-gray-800"
                />
              </div>

              <div className="flex gap-2 justify-between">
                <span>Preferred Interview Date *</span>

                <div>
                  <input
                    onChange={(e) =>
                      setAllData({ ...allData, Date: e.target.value })
                    }
                    type="date"
                    className="px-2 rounded-sm h-8 outline-none text-gray-800"
                  />
                  <div className="flex px-2">
                    {errors?.Date && (
                      <span className="absolute text-xs text-red-500">
                        {errors.Date}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-8">
            <button 

            
              onClick={HandleisClicked}
              className="bg-orange-500 px-12 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300 text-white text-lg hover:text-gray-200 font-semibold"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      {isClicked && allData.fullname && allData.email && (
        <Submit allData={allData} selectedOptions={selectedOptions} />
      )}
    </div>
  );
};

export default Home;
