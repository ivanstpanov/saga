import { GET_ALBUMS_SUCCESS } from '../components/Albums/albumsActions';
const albumsReducer = (state = { albums: [] }, action) => {
  switch (action.type) {
    case GET_ALBUMS_SUCCESS:
      return { ...state, albums: action.albums };
    default:
      return state;
  }
};
export default albumsReducer;
