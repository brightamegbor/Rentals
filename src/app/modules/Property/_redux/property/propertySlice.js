import { createSlice } from "@reduxjs/toolkit";

const initialPropertiesState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  propertyDetails: undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const propertiesSlice = createSlice({
  name: "properties",
  initialState: initialPropertiesState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    // getPropertyById
    propertyFetched: (state, action) => {
      state.actionsLoading = false;
      state.propertyDetails = action.payload.propertyDetails;
      state.error = null;
    },
    // findProperties
    propertiesFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createProperty
    propertyCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.propertty);
    },
    // updateProperty
    propertyUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.propertty.id) {
          return action.payload.propertty;
        }
        return entity;
      });
    },
    // deleteProperty
    propertyDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteProducts
    propertiesDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.id)
      );
    },
    // productsUpdateState
    propertiesStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const { ids, status } = action.payload;
      state.entities = state.entities.map(entity => {
        if (ids.findIndex(id => id === entity.id) > -1) {
          entity.status = status;
        }
        return entity;
      });
    }
  }
});
