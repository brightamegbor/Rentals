import propertyCardMock from "./propertyCardMock";
import MockUtils from "./mock.utils";

export default function mockProperties(mock) {
  mock.onPost("api/properties").reply(({ data }) => {
    const { propertty } = JSON.parse(data);
    const {
      propertyCategory = "",
      propertySubCategory = "",
      propertyAddress = "",
      propertyUnit = "",
      propertyLandmark = "",
      utilities = "",
      categories = "",
      yearBuilt = "",
      petFriendly = "",
      furnished = "",
      leaseTerms = "",
      otherDetails = "",
      bathroomType = "",
      parkingType = "",
      parkingSpots = "",
      rent = "",
      photos = "",
      description = "",
      buildingFeatures = "",
      unitFeatures = "",
      nearbyFeat = "",
      leadEmail = "",
      leadPhone = "",
      status = "",
      planAddons = "",

    } = propertty;

    const id = generatePropertyId();
    const newProperty = {
      id,
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
      planAddons
    };
    propertyCardMock.push(newProperty);
    return [200, { propertty: newProperty }];
  });

  mock.onPost("api/properties/find").reply(config => {
    const mockUtils = new MockUtils();
    const { queryParams } = JSON.parse(config.data);
    const filteredProperties = mockUtils.baseFilter(propertyCardMock, queryParams);
    return [200, filteredProperties];
  });

  mock.onPost("api/properties/deleteProperties").reply(config => {
    const { ids } = JSON.parse(config.data);
    ids.forEach(id => {
      const index = propertyCardMock.findIndex(el => el.id === id);
      if (index > -1) {
        propertyCardMock.splice(index, 1);
      }
    });
    return [200];
  });

  mock.onPost("api/properties/updateStatusForProperties").reply(config => {
    const { ids, status } = JSON.parse(config.data);
    propertyCardMock.forEach(el => {
      if (ids.findIndex(id => id === el.id) > -1) {
        el.status = status;
      }
    });
    return [200];
  });

  mock.onGet(/api\/properties\/\d+/).reply(config => {
    const id = config.url.match(/api\/properties\/(\d+)/)[1];
    const propertty = propertyCardMock.find(el => el.id === +id);
    if (!propertty) {
      return [400];
    }

    return [200, propertty];
  });

  mock.onPut(/api\/properties\/\d+/).reply(config => {
    const id = config.url.match(/api\/properties\/(\d+)/)[1];
    const { propertty } = JSON.parse(config.data);
    const index = propertyCardMock.findIndex(el => el.id === +id);
    if (!index) {
      return [400];
    }

    propertyCardMock[index] = { ...propertty };
    return [200];
  });

  mock.onDelete(/api\/properties\/\d+/).reply(config => {
    const id = config.url.match(/api\/properties\/(\d+)/)[1];
    const index = propertyCardMock.findIndex(el => el.id === +id);
    propertyCardMock.splice(index, 1);
    if (!index === -1) {
      return [400];
    }

    return [200];
  });
}

function generatePropertyId() {
  const ids = propertyCardMock.map(el => el.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}
