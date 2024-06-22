function validateEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
}



export function validateEvent(data) {
    console.log(data);
    const errors = {
        Name: null,
        email: null,
        Age: null,
        Guest: null,
        GuestName: null
    }

    if (!data?.Email) {
        errors.email = "Enter a Valid Email"
    } else {

        const isEmail = validateEmail(data.Email)
        if (!isEmail) {
            errors.email = "Enter a Valid Email"
        } else {
            errors.email = null
        }
    }

    if (!data?.Name) {
        errors.Name = "Name is required";
    }



    if (!data?.Age) {
        errors.Age = "Age is required"
    }


    if (!data?.Guest) {
        errors.Guest = "Coming with a guest ?"
    }

    if (!data?.GuestName) {
        errors.GuestName = "Guest Name is required"
    }



    return errors

}