import ACTION_TYPES from './actionsType';

export const createData = (data) => {
  return {
    type: ACTION_TYPES.CREATE_DATA,
    data: data,
  };
};

export const deleteData = () => {
  return {
    type: ACTION_TYPES.DELETE_DATA,
  };
};