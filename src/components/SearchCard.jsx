import moment from 'moment'
import {Link} from 'react-router-dom'
import useChannelData from '../Utils/Hooks/useChannelData'
import ShimmerCard from './ShimmerCard'
import useSingleVideoDetails from '../Utils/Hooks/useSingleVideoDetails'
import formatNumber from '../Utils/formatNumber'

const SearchCard = ({data}) => {
  const {
    id: {videoId},
    snippet: {
      channelId,
      channelTitle,
      description,
      publishedAt,
      title,
      thumbnails: {
        high: {url},
      },
    },
  } = data

  const videoData = useSingleVideoDetails(videoId)
  const channelData = useChannelData(channelId)
  if (videoData.length === 0 && channelData.length === 0) {
    return (
      <section className="flex flex-wrap justify-center gap-4 mt-5 pb-3 mx-4">
        {Array.from({length: 10}).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </section>
    )
  }
  const views = videoData[0]?.statistics?.viewCount
  const channelLogo = channelData[0]?.snippet?.thumbnails?.default?.url
  return (
    <section>
      <Link className=" flex gap-5 mt-5" to={`/watch/${videoId}/${channelId}`}>
        <img className="rounded-xl" src={url} alt="video" />
        <article className="mt-2">
          <p className="font-bold text-lg">{title}</p>
          <div className="flex gap-2 text-gray-600 text-xs">
            <p>{formatNumber(views)} Views</p>
            <p>{moment(publishedAt).fromNow()}</p>
          </div>
          <div className="text-xs text-gray-600 mt-4 leading-5">
            <div className="flex items-center gap-2">
              <img
                className="rounded-full w-[35px] aspect-square"
                src={channelLogo}
                alt="hi"
              />
              <p>{channelTitle}</p>
            </div>
            <p className="mt-3">{description}</p>
          </div>
        </article>
      </Link>
    </section>
  )
}
export default SearchCard
