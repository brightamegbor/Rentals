import * as requestFromServer from "./propertyCrud";
import { propertysSlice, callTypes } from "./propertySlice";

const { actions } = propertysSlice;

export const fetchPropertys = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findPropertys(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.propertysFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find any property";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchProperty = id => dispatch => {
  if (!id) {
    return dispatch(actions.propertyFetched({ propertyAdd: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getPropertyById(id)
    .then(response => {
      const property = response.data;
      dispatch(actions.propertyFetched({ productAdd: property }));
    })
    .catch(error => {
      error.clientMessage = "Can't find property";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteProperty = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteProperty(id)
    .then(response => {
      dispatch(actions.propertyDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete property";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createProperty = propertyForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createProperty(propertyForCreation)
    .then(response => {
      const { property } = response.data;
      dispatch(actions.propertyCreated({ property }));
    })
    .catch(error => {
      error.clientMessage = "Can't create property";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateProperty = property => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateProperty(property)
    .then(() => {
      dispatch(actions.propertyUpdated({ property }));
    })
    .catch(error => {
      error.clientMessage = "Can't update property";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updatePropertysStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForPropertys(ids, status)
    .then(() => {
      dispatch(actions.propertysStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update property status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deletePropertys = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deletePropertys(ids)
    .then(() => {
      dispatch(actions.propertysDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete any property";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
