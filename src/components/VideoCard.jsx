import formatViews from '../Utils/formatViews'
import {FaCircleUser} from 'react-icons/fa6'
import moment from 'moment'
import {useSelector} from 'react-redux'
const VideoCard = ({data}) => {
  const sideBarState = useSelector((store) => store.app.isSideBarOpen)
  const {url} = data.snippet.thumbnails.medium
  const {viewCount} = data.statistics
  const {channelTitle, title, publishedAt} = data.snippet
  return (
    <article className={` ${sideBarState ? 'w-[320px]' : 'w-[300px]'} `}>
      <img className="rounded-lg" src={url} alt={title} />
      <p className=" font-bold text-md tracking-wide line-clamp-2">{title}</p>
      <p className=" flex items-center gap-2 font-medium text-gray-500">
        <FaCircleUser className="text-xl" />
        {channelTitle}
      </p>
      <p className=" text-gray-500">
        {formatViews(viewCount)} views, {moment(publishedAt).fromNow()}
      </p>
    </article>
  )
}
export default VideoCard