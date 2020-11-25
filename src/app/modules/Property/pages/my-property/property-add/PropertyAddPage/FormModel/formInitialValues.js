import propertyAddFormModel from './propertyAddFormModel';

const {
    formField: {
        propertyCategory,
        propertySubCategory,
        propertyAddress,
        propertyUnit,
        propertyLandmark,
        utilities,
        categories,
        yearBuilt,
        petFriendly,
        furnished,
        leaseTerms,
        otherDetails,
        bathroomType,
        parkingType,
        parkingSpots,
        rent,
        photos,
        description,
        additionals,
    }
} = propertyAddFormModel;

export default {
    [propertyCategory.name]: '',
    [propertySubCategory.name]: '',
    [propertyAddress.name]: '',
    [propertyUnit.name]: '',
    [propertyLandmark.name]: '',
    [utilities.name]: '',
    [categories.name]: '',
    [yearBuilt.name]: '',
    [petFriendly.name]: '',
    [furnished.name]: '',
    [leaseTerms.name]: '',
    [otherDetails.name]: '',
    [bathroomType.name]: '',
    [parkingType.name]: '',
    [parkingSpots.name]: '',
    [rent.name]: '',
    [photos.name]: '',
    [description.name]: '',
    [additionals.name]: '',
};