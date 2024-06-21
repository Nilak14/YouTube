import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {closeSideBar} from '../Utils/appSlice'
import useChannelData from '../Utils/Hooks/useChannelData'
import useSingleVideoDetails from '../Utils/Hooks/useSingleVideoDetails'
import {AiTwotoneLike, AiTwotoneDislike} from 'react-icons/ai'
import {FaShare} from 'react-icons/fa'
import {BiSolidDownload} from 'react-icons/bi'
import formatNumber from '../Utils/formatNumber'
import moment from 'moment'

const Watch = () => {
  const {vidId, channelId} = useParams()
  const [showMore, setShowMore] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeSideBar())
  }, [dispatch])

  const channelData = useChannelData(channelId)
  const videoData = useSingleVideoDetails(vidId)

  if (videoData.length === 0 || channelData.length === 0) {
    return <h1>Loading...</h1>
  }

  const {
    statistics: {viewCount, likeCount, commentCount},
    snippet: {title, description, publishedAt, channelTitle},
  } = videoData[0]

  const {
    statistics: {subscriberCount},
    snippet: {
      thumbnails: {
        medium: {url},
      },
    },
  } = channelData[0]

  return (
    <main className="w-[70vw] mx-auto lg:mx-0 lg:w-[850px] pb-4">
      <iframe
        className="w-full aspect-video rounded-xl"
        src={`https://www.youtube.com/embed/${vidId}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h1 className="font-bold text-xl mt-3 tracking-wide">{title}</h1>
      <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mt-2">
        <div className="flex items-center gap-3">
          <img
            className="rounded-full w-[50px] aspect-square"
            src={url}
            alt="logo"
          />
          <div>
            <p className="font-bold text-lg whitespace-nowrap">
              {channelTitle}
            </p>
            <p className="text-sm text-gray-500">
              {formatNumber(subscriberCount)} subscribers
            </p>
          </div>
          <button className="bg-black text-white px-4 py-2 font-bold tracking-wide rounded-full ml-4 hover:bg-gray-800">
            Subscribe
          </button>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center rounded-full shadow-sm overflow-hidden">
            <button className="flex items-center px-2 py-2 gap-2 bg-gray-300 hover:bg-gray-200">
              <AiTwotoneLike className="text-2xl" />
              <p className="font-medium">{formatNumber(likeCount)}</p>
            </button>
            <button className="border-l-2 border-gray-400 px-4 py-2 bg-gray-300 hover:bg-gray-200">
              <AiTwotoneDislike className="text-2xl" />
            </button>
          </div>
          <button className="flex items-center gap-2 px-2 py-1 shadow-sm rounded-full bg-gray-300 hover:bg-gray-200 font-medium">
            <FaShare className="text-xl" />
            Share
          </button>
          <button className="flex items-center gap-2 shadow-sm px-2 py-1 rounded-full bg-gray-300 hover:bg-gray-200 font-medium">
            <BiSolidDownload className="text-xl" />
            Download
          </button>
        </div>
      </section>
      <section
        className={`bg-gray-200 px-5 py-2 rounded-lg mt-3  tracking-wide ${
          showMore || 'max-h-[6.6rem]'
        }  `}
      >
        <div className="flex gap-3 font-medium">
          <p>{Number(viewCount).toLocaleString('en-IN')} Views</p>
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
        <div className="relative">
          <p className={`text-justify  ${showMore || 'line-clamp-3 '} `}>
            {description}{' '}
          </p>
          <span
            onClick={() => setShowMore(!showMore)}
            className="absolute bottom-0 right-0 bg-gray-200 cursor-pointer font-bold"
          >
            {showMore ? 'Show less' : '...more'}
          </span>
        </div>
      </section>
    </main>
  )
}

export default Watch
