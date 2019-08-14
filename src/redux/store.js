import { createStore, combineReducers } from "redux";

const INITIAL_STATE = {
  list: [{ id: 1, name: 'Jhon Doe' }]
}

const employeeReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'ADD_EMPLOYEE': return { ...state, list: [...state.list, payload] };
  }
  return state;
}

const store = createStore(combineReducers({
  employee: employeeReducer
}));

export default store;