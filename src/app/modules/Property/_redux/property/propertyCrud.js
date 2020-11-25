import axios from "axios";

export const PROPERTY_URL = "api/property";

// CREATE =>  PROPERTY: add a new property to the server
export function createProperty(property) {
  return axios.post(PROPERTY_URL, { property });
}

// READ
export function getAllProperty() {
  return axios.get(PROPERTY_URL);
}

export function getPropertyById(propertyId) {
  return axios.get(`${PROPERTY_URL}/${propertyId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findPropertys(queryParams) {
  return axios.post(`${PROPERTY_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the property on the server
export function updateProperty(property) {
  return axios.put(`${PROPERTY_URL}/${property.id}`, { property });
}

// UPDATE Status
export function updateStatusForPropertys(ids, status) {
  return axios.post(`${PROPERTY_URL}/updateStatusForPropertys`, {
    ids,
    status
  });
}

// DELETE => delete the product from the server
export function deleteProperty(propertyId) {
  return axios.delete(`${PROPERTY_URL}/${propertyId}`);
}

// DELETE Products by ids
export function deletePropertys(ids) {
  return axios.post(`${PROPERTY_URL}/deletePropertys`, { ids });
}
