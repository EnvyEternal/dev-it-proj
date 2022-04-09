import ACTION_TYPES from "../actions/actionsType";

const initialState = {
    role: null,
    login: null,
    isFetching: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_DATA: {
      const { data } = action;
      return { login: data.login, role: data.role, isFetching: true };
    }
    case ACTION_TYPES.DELETE_DATA: {
      return {isFetching: false}
    }
    default:
      return state;
  }
};

export default dataReducer;