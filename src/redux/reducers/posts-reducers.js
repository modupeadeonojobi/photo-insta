import posts from '../../data/posts';

const postReducers = (state = posts, action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
    case 'ADD_POST':
      return [...state, action.payload]
    default:
      return state
  }
}

export default postReducers;