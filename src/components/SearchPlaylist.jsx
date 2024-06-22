import usePlayList from '../Utils/Hooks/usePlayList'
import {Link} from 'react-router-dom'

const SearchPlaylist = ({data}) => {
  const playListID = data?.id?.playlistId
  const {
    title,
    channelTitle,
    description,
    thumbnails: {
      high: {url},
    },
  } = data?.snippet
  const playlistData = usePlayList(playListID)
  if (playlistData.length === 0) {
    return <h1>Loading......</h1>
  }
  return (
    <section>
      <Link className=" flex gap-5 mt-5">
        <img className="rounded-xl" src={url} alt="video" />
        <article className="mt-2">
          <p className="font-bold text-lg">{title}</p>
          <div className="flex gap-2 text-gray-600 text-xs">
            <p>{channelTitle}</p>
            <p>Playlist</p>
          </div>
          <div className="text-xs text-gray-600 mt-4 leading-5">
            <p className="mt-3">{description}</p>
          </div>
          <p className="text-gray-600 text-sm font-medium hover:text-gray-700">
            View Full Playlist
          </p>
        </article>
      </Link>
    </section>
  )
}
export default SearchPlaylist
