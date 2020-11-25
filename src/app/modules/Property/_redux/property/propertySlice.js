import { createSlice } from "@reduxjs/toolkit";

const initialPropertysState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  propertyAdd: undefined,
  lastError: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const propertysSlice = createSlice({
  name: "propertys",
  initialState: initialPropertysState,
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
    // getProductById
    propertyFetched: (state, action) => {
      state.actionsLoading = false;
      state.propertyAdd = action.payload.propertyAdd;
      state.error = null;
    },
    // findProducts
    propertysFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createProduct
    propertyCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.property);
    },
    // updateProduct
    propertyUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.property.id) {
          return action.payload.property;
        }
        return entity;
      });
    },
    // deleteProduct
    propertyDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.id);
    },
    // deleteProducts
    propertysDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.id)
      );
    },
    // productsUpdateState
    propertysStatusUpdated: (state, action) => {
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
