import React, { useEffect, useState } from "react";
import Submit from "./Submit";
import useForm from "./useForm";

const Home = () => {
  const [isClicked, setIsClicked] = useState("");
  //   const [allerrors, setAllerrors] = useState();

  //   console.log(allerrors.Name);

  const [allData, setAllData] = useState({
    Name: "",
    Email: "",
    Age: "",
    Guest: false,
    GuestName: "",
  });

  const { errors: allerrors, handleSubmit } = useForm();

  //   function handleSubmit(e) {
  //       e.preventDefault();
  //       setIsClicked(true);

  //     const errors = validateEvent(allData);

  //     setAllerrors(errors);
  //     console.log(allData.Email);
  //   }

    useEffect(() => {
      setIsClicked(false);
    }, [allData]);

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(allData);
    setIsClicked(true)
  };

  return (
    <>
      <div className="bg-gray-700 px-3 sm:px-20 pb-6 flex flex-col items-center  w-screen">
        <div className="flex  py-10 justify-center text-2xl font-semibold text-white">
          <span>Event Registration Form</span>
        </div>

        <div className="sm:w-6/12 w-11/12 flex justify-center rounded-md bg-gray-300 px-8 py-6 sm:px-3 flex-col">
          <form action="" onSubmit={submitHandler}>
            <div className="flex flex-col gap-5 text-xs sm:text-base">
              <div className="flex flex-row gap-2 justify-between">
                <span>Name *</span>

                <div className="">
                  <input
                    value={allData.Name}
                    type="text"
                    onChange={(e) =>
                      setAllData({ ...allData, Name: e.target.value })
                    }
                    placeholder="Name"
                    className="px-2 rounded-sm h-8 outline-none"
                  />

                  <div className="flex px-2">
                    {allerrors?.Name && (
                      <span className="absolute text-xs text-red-500">
                        {allerrors.Name}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-2 justify-between">
                <span>Email *</span>

                <div className="">
                  <input
                    type="email"
                    value={allData.Email}
                    onChange={(e) =>
                      setAllData({ ...allData, Email: e.target.value })
                    }
                    placeholder="Email"
                    className="px-2 rounded-sm h-8 outline-none"
                  />

                  <div className="flex px-2">
                    {allerrors?.email && (
                      <span className="absolute text-xs text-red-500">
                        {allerrors.email}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-2 justify-between">
                <span>Age *</span>

                <div className="">
                  <input
                    value={allData.Age}
                    onChange={(e) =>
                      setAllData({ ...allData, Age: e.target.value })
                    }
                    type="number"
                    min={1}
                    placeholder="Age"
                    className="px-2 rounded-sm h-8 outline-none"
                  />
                  <div className="flex px-2">
                    {allerrors?.Age && (
                      <span className="absolute text-xs text-red-500">
                        {allerrors.Age}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-2 justify-between ">
                <div className="flex flex-col">
                  <span>Are you attending with a guest ? *</span>
                </div>

                <div className="  flex flex-row">
                  <div className="flex px-2">
                    {allerrors?.Guest && (
                      <span className="flex items-center justify-center text-xs text-red-500">
                        {allerrors.Guest}
                      </span>
                    )}
                  </div>

                  <input
                    value={allData.Guest}
                    onChange={(e) =>
                      setAllData({ ...allData, Guest: e.target.checked })
                    }
                    type="checkbox"
                    // placeholder="Full Name"
                    className="px-2 rounded-sm h-8 outline-none"
                  />
                </div>
              </div>

              {allData.Guest  && (
                <div className="flex flex-row gap-2 justify-between">
                  <span>Guest Name *</span>

                  <div className="">
                    <input
                      value={allData.GuestName}
                      onChange={(e) =>
                        setAllData({ ...allData, GuestName: e.target.value })
                      }
                      type="text"
                      placeholder="Guest Name"
                      className="px-2 rounded-sm h-8 outline-none"
                    />

                    <div className="flex px-2">
                      {allerrors?.GuestName && (
                        <span className="flex items-center justify-center text-xs text-red-500">
                          {allerrors.GuestName}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center py-8">
              <button
                className="bg-orange-500 px-12 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300 text-white text-lg hover:text-gray-200 font-semibold"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {isClicked && allData.Name && allData.Email && (
          <Submit allData={allData} />
        )}
      </div>
    </>
  );
};

export default Home;
