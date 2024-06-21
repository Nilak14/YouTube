import {useState} from 'react'
import useComment from '../Utils/Hooks/useComment'
import Comment from './Comment'

const CommentContainer = ({videoId}) => {
  const [fetchValue, setFetchValue] = useState(100)
  const commentData = useComment(videoId, fetchValue)

  if (commentData.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <section className="mt-3">
      {commentData.map((data) => {
        return (
          <Comment key={data.snippet.topLevelComment.id} commentData={data} />
        )
      })}
    </section>
  )
}
export default CommentContainer
