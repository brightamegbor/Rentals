import axios from "axios";

export const PROPERTY_URL = "api/properties";

// CREATE =>  PROPERTY: add a new property to the server
export function createProperty(propertty) {
  return axios.post(PROPERTY_URL, { propertty });
}

// READ
export function getAllProperties() {
  return axios.get(PROPERTY_URL);
}

export function getPropertyById(propertyId) {
  return axios.get(`${PROPERTY_URL}/${propertyId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findProperties(queryParams) {
  return axios.post(`${PROPERTY_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the property on the server
export function updateProperty(propertty) {
  return axios.put(`${PROPERTY_URL}/${propertty.id}`, { propertty });
}

// UPDATE Status
export function updateStatusForProperties(ids, status) {
  return axios.post(`${PROPERTY_URL}/updateStatusForProperties`, {
    ids,
    status
  });
}

// DELETE => delete the product from the server
export function deleteProperty(propertyId) {
  return axios.delete(`${PROPERTY_URL}/${propertyId}`);
}

// DELETE Products by ids
export function deleteProperties(ids) {
  return axios.post(`${PROPERTY_URL}/deleteProperties`, { ids });
}
