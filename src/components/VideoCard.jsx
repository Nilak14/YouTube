import moment from 'moment'
import {useSelector} from 'react-redux'
import formatNumber from '../Utils/formatNumber'
import useChannelData from '../Utils/Hooks/useChannelData'
import ShimmerCard from './ShimmerCard'
const VideoCard = ({data}) => {
  const sideBarState = useSelector((store) => store.app.isSideBarOpen)

  const {
    statistics: {viewCount},
    snippet: {channelTitle, title, publishedAt, channelId},
    snippet: {
      thumbnails: {
        medium: {url},
      },
    },
  } = data
  const channelData = useChannelData(channelId)
  if (channelData.length === 0) {
    return (
      <section className="flex flex-wrap justify-center gap-4 mt-5 pb-3 mx-4">
        {Array.from({length: 10}).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </section>
    )
  }

  const {
    snippet: {
      thumbnails: {
        medium: {url: channelLogo},
      },
    },
  } = channelData[0]
  return (
    <article
      className={`${
        sideBarState
          ? 'w-[300px] md:w-[400] lg:w-[300px]'
          : 'w-[300px] md:[450px] lg:w-[320px]'
      }  `}
    >
      <img className="rounded-lg w-full" src={url} alt={title} />
      <div className="flex items-center gap-2 mt-1">
        <img
          className="rounded-full w-[32px] aspect-square"
          src={channelLogo}
          alt="logo"
        />
        <p className=" font-bold text-md tracking-wide line-clamp-2">{title}</p>
      </div>
      <p className=" ml-[40px] flex items-center gap-2 font-medium text-gray-500">
        {channelTitle}
      </p>

      <p className="ml-[40px] text-gray-500 text-sm">
        {formatNumber(viewCount)} views, {moment(publishedAt).fromNow()}
      </p>
    </article>
  )
}
export default VideoCard
