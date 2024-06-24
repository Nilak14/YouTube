import moment from 'moment'
import {useSelector} from 'react-redux'
import formatNumber from '../Utils/formatNumber'
import useChannelData from '../Utils/Hooks/useChannelData'
import ShimmerCard from './ShimmerCard'
const SuggestedVideoCard = ({data}) => {
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

  return (
    <article
      className={`flex gap-3 mb-4 `}
      //     ${
      //     sideBarState
      //       ? 'w-[300px] md:w-[400] lg:w-[300px]'
      //       : 'w-[300px] md:[450px] lg:w-[320px]'
      //   }  `
    >
      <img className="rounded-lg w-[168px]" src={url} alt={title} />
      <section className="w-[202px]">
        <div className="flex items-center gap-2 mt-1">
          <p className=" font-bold text-md tracking-wide line-clamp-2">
            {title}
          </p>
        </div>
        <p className=" flex items-center gap-2 font-medium text-gray-500">
          {channelTitle}
        </p>

        <p className=" text-gray-500 text-sm">
          {formatNumber(viewCount)} views, {moment(publishedAt).fromNow()}
        </p>
      </section>
    </article>
  )
}
export default SuggestedVideoCard
