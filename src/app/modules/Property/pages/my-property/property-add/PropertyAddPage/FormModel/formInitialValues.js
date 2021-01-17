import propertyAddFormModel from './propertyAddFormModel';

const {
    formField: {
        id,
        propertyID,
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
        buildingFeatures,
        unitFeatures,
        nearbyFeat,
        leadEmail,
        leadPhone,
        status,
        planAddons,
    }
} = propertyAddFormModel;

export default {
    [id.name]: '',
    [propertyID.name]: '',
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
    [buildingFeatures.name]: '',
    [unitFeatures.name]: '',
    [nearbyFeat.name]: '',
    [leadEmail.name]: '',
    [leadPhone.name]: '',
    [status.name]: 'pending',
    [planAddons.name]: 'free',
};