import useChannelData from '../Utils/Hooks/useChannelData'
import {Link} from 'react-router-dom'
import formatNumber from '../Utils/formatNumber'

const SearchChannel = ({data}) => {
  const channelData = useChannelData(data.id.channelId)
  if (channelData.length === 0) {
    return <h1>Loading...</h1>
  }
  const {
    snippet: {
      customUrl,
      description,
      title,
      thumbnails: {
        high: {url},
      },
    },
    statistics: {subscriberCount},
  } = channelData[0]
  return (
    <section className="pb-5 borderNormal">
      <Link className="flex gap-5 mt-5 items-start">
        <div className=" flex items-center justify-center  min-w-[480px]">
          <img
            className="rounded-full  w-[136px] h-[136px]"
            src={url}
            alt="video"
          />
        </div>
        <article className="mt-2">
          <p className="font-bold text-lg">{title}</p>
          <div className="flex gap-2 text-gray-600 text-xs">
            <p>{customUrl}</p>
            <p>{formatNumber(subscriberCount)} subscribers</p>
          </div>
          <div className="text-xs text-gray-600 mt-4 leading-5">
            <p className="mt-3 line-clamp-1">{description}</p>
          </div>
        </article>
        <button className="bg-black text-white px-4 py-2 font-bold tracking-wide rounded-full hover:bg-gray-800 self-center mr-5">
          Subscribe
        </button>
      </Link>
    </section>
  )
}
export default SearchChannel
