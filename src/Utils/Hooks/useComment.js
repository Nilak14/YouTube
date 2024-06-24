import {useEffect, useState} from 'react'
import {COMMENT_API} from '../constant'

const useComment = (videoId, value) => {
  const [commentData, setCommentData] = useState([])
  useEffect(() => {
    fetchCommentData()
  }, [videoId])

  const fetchCommentData = async () => {
    try {
      const response = await fetch(COMMENT_API(videoId, value))
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      setCommentData(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  return commentData
}
export default useComment
