
function validateMobileNumber(mobileNumber) {
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobileNumber);
  }
  
  function validateURL(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  function handleDateChange(event) {
    const enteredDate = new Date(event);
    // console.log(event);
    const today = new Date();
  
    if (enteredDate < today) {
      return "Enter a valid Date";
    }
    return null;
  }
  
  export function Validate(data) {
    const Error = {
      fullname: null,
      email: null,
      number: null,
      Position: null,
      Portfolio: null,
      RelevantExperience: null,
      ManagementExperience: null,
      Time: null,
      Date: null,
      Skills: null,
    };
  
    if (!data.fullname) {
      Error.fullname = "Fullname is required";
    }
  
    if (!data.number) {
      Error.number = "Enter a valid number";
    } else {
      const isNumber = validateMobileNumber(data.number);
  
      // console.log(isNumber);
      if (!isNumber) {
        Error.number = "Enter a valid number";
      }
    }
  
    if (!data.Portfolio) {
      Error.Portfolio = "Enter a valid URL";
    } else {
      const isURL = validateURL(data.Portfolio);
  
      if (!isURL) {
        Error.Portfolio = "Enter a valid URL";
      }
    }
  
    if (!data.Date) {
      Error.Date = "Enter a valid Date";
    } else {
      const isDate = handleDateChange(data.Date);
      // console.log(data.Date);
      if (isDate) {
        Error.Date = isDate;
      } else {
        Error.Date = isDate;
      }
    }
  
    if (data.Skills <= 0) {
      Error.Skills = "One skill must be selected";
    } else {
      Error.Skills = null;
    }
  
    return Error;
  }
  