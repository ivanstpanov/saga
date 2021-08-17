import { useDispatch, useSelector } from 'react-redux';
import { getAlbumsFetch } from './albumsActions';

function Albums() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.albums);

  return (
    <div className="App">
      <button className="button" onClick={() => dispatch(getAlbumsFetch())}>
        {' '}
        Show Albums:
      </button>
      <div>
        {albums.map((album) => (
          <div key={album.id}>
            {album.id} : {album.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;
