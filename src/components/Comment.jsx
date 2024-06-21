import moment from 'moment'
import {AiTwotoneLike, AiTwotoneDislike} from 'react-icons/ai'
import formatNumber from '../Utils/formatNumber'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import {useState} from 'react'
import ReplyComment from './ReplyComment'
const Comment = ({commentData}) => {
  const [showReplies, setShowReplies] = useState(false)

  const {
    snippet: {
      topLevelComment: {
        id,
        snippet: {
          authorChannelId,
          authorDisplayName,
          authorProfileImageUrl,
          likeCount,
          publishedAt,
          textDisplay,
          textOriginal,
        },
      },
    } = [],
  } = commentData || {}

  const comments = commentData?.replies?.comments || []

  return (
    <article className=" w-full p-2 flex items-start gap-4 mb-2">
      <img
        className="rounded-full"
        src={authorProfileImageUrl}
        alt={authorDisplayName}
      />
      <div className="w-full flex flex-col gap-1">
        <div className=" w-full flex items-center gap-3">
          <p className="font-medium text-sm">{authorDisplayName}</p>
          <p className="text-sm text-gray-500">
            {moment(publishedAt).fromNow()}
          </p>
        </div>
        <div className=" overflow-hidden font-medium tracking-wide text-md">
          <p>{textOriginal}</p>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center gap-1 mr-5">
            <button className="hover:scale-110 flex items-center">
              <AiTwotoneLike className="text-xl" />
            </button>
            <p className="text-gray-500">{formatNumber(likeCount)}</p>
          </div>
          <button className="hover:scale-110 flex items-center">
            <AiTwotoneDislike className="text-xl" />
          </button>
        </div>
        {comments.length === 0 || (
          <div
            onClick={() => {
              setShowReplies(!showReplies)
            }}
            className="flex select-none items-center gap-2 text-blue-900 cursor-pointer"
          >
            {showReplies ? <FaChevronUp /> : <FaChevronDown />}

            <p className="font-bold tracking-wider">
              {`${comments.length} Replies `}
            </p>
          </div>
        )}
        {showReplies &&
          comments.map((comment, index) => {
            return <ReplyComment commentData={comment} key={index} />
          })}
      </div>
    </article>
  )
}
export default Comment
