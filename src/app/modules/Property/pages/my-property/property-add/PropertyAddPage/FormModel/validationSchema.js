import * as Yup from "yup";
import propertyAddFormModel from './propertyAddFormModel';
const {
    formField: {
        propertyCategory,
        propertySubCategory,
        propertyAddress,
        propertyUnit,
        propertyLandmark,
        utilities,
        furnished,
        leaseTerms,
        otherDetails,
        bathroomType,
        rent,
        // photos,
        description
    }
} = propertyAddFormModel;

const rentRegEx = /^(?:[1-9][0-9]{1}(?:[0-9]{1})?(?:[0-9]{1})?)$/;

export default [

    Yup.object().shape({
        [propertyCategory.name]: Yup.string()
            .nullable(),
        // .required("Please choose a category"),
        [propertySubCategory.name]: Yup.string()
            .nullable(),
        // .required("Please choose a sub category"),
        [propertyAddress.name]: Yup.string()
            .min(5, 'Address too short')
            .max(250, 'Address Too long'),
        // .required("Address is required"),
        // [propertyUnit.name]: Yup.string()

        // .required("Unit is required"),
        // [propertyLandmark.name]: Yup.string()

        // .required("Landmark is required"),
    }),
    Yup.object().shape({
        // [utilities.name]: Yup.string()
        // .required("Please choose a utilities"),
        [furnished.name]: Yup.string()
            .nullable(),
        // .required("Please choose a type"),
        [leaseTerms.name]: Yup.string()
            .nullable(),
        // .required("Please choose a lease term"),
        // [otherDetails.name]: Yup.string()
        // .required("Other details is required"),
        // [bathroomType.name]: Yup.string()
        //     .required("Please choose a type"),
    }),
    Yup.object().shape({
        [rent.name]: Yup.string()
            .required("Rent is required")
            .matches(rentRegEx, 'Rent value is invalid'),
        // [photos.name]: Yup.string()
        //     .required("Please upload a photo"),
        [description.name]: Yup.string()
            .nullable()
            .min(20, 'Description too short')
            .required("Description is required"),
    })
];
