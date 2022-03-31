import * as yup from 'yup';

const FormSchema = yup.object().shape({
    companyName: yup
        .string()
            .max(20,"Name can't be more than 20 characters")
        .trim()
        .required('This Field is required'),
    companyPhone: yup
        .number("Phone number Must be a number")
            .max(10, 'Phone Number must be less than 10 numbers')
            .integer()
            .positive()
            .min(10)
        .required('This Field is required'),
    companyWeb: yup
        .string()
        .trim()
        .required('This field is required'),
    jobTitle: yup
        .string()
            .max(20)
        .required()
        .trim(),
    dateApplied: yup
        .date()
        .required(),
    jobDiscovery: yup
        .string()
            .max(20)
        .trim(),
    salaryInfo: yup
        .number()
            .max(10, 'Can not be more than 10 numbers')
            .integer()
            .positive('Number must be positive'),
    contactQues: yup
});