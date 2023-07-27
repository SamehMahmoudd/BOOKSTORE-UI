import * as yup from "yup";

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const phoneRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
export const registerValidation = yup.object().shape({
        fName: yup.string().required("This field is required !"),
        lName: yup.string().required("This field is required !"),
        email: yup.string().required("This field is required !").email("Please enter valid email"),
        password: yup.string().required("This field is required !"),
        phoneNumber: yup.string().required("This field is required !"),
        address: yup.string().required("This field is required !"),
        country: yup.string().required("This field is required !"),
});
