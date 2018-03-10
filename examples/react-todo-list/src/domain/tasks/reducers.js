import { handleActions } from 'redux-actions';
import actionTypes from './action-types';

const initialState = {
  items: [],
};

export default handleActions({
  [actionTypes.FETCH_TASKS]: (state, action) => ({
    ...state,
    items: !action.error ? action.payload : [],
  }),
  [actionTypes.COMPLETE_TASK]: (state, action) => {
    const { id } = action.payload;
    const newItems = state.items.map(item => ({
      ...item,
      isDone: item.id === id || item.isDone,
    }));

    return {
      ...state,
      items: newItems,
    };
  },
}, initialState);
