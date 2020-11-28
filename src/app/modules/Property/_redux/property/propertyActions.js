import * as requestFromServer from "./propertyCrud";
import { propertiesSlice, callTypes } from "./propertySlice";

const { actions } = propertiesSlice;

export const fetchProperties = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findProperties(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      // console.log(response.data);
      dispatch(actions.propertiesFetched({ totalCount, entities }));
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
      const propertty = response.data;
      dispatch(actions.propertyFetched({ productAdd: propertty }));
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
      const { propertty } = response.data;
      dispatch(actions.propertyCreated({ propertty }));
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

export const updatePropertiesStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForProperties(ids, status)
    .then(() => {
      dispatch(actions.propertysStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update property status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteProperties = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteProperties(ids)
    .then(() => {
      dispatch(actions.propertiesDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete any property";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
