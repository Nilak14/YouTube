import {POPULAR_VIDEOS_BY_CATEGORY} from '../Utils/constant'
import {useEffect, useState} from 'react'
import SuggestedVideoCard from './SuggestedVideoCard'
import {Link, useParams} from 'react-router-dom'

const SuggestedVideo = ({categoryId}) => {
  const [suggestedVideo, setSuggestedVideo] = useState([])
  const {vidId: watchVideoId} = useParams()
  const getSuggestedVideos = async () => {
    try {
      const response = await fetch(POPULAR_VIDEOS_BY_CATEGORY(categoryId))
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      setSuggestedVideo(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSuggestedVideos()
  }, [])

  if (suggestedVideo.length === 0) {
    return <h1>Loading.....</h1>
  }
  console.log(suggestedVideo)
  return (
    <section className="w-full">
      {suggestedVideo.map((videoData) => {
        if (videoData.id === watchVideoId) {
          return
        }
        return (
          <Link
            key={videoData.id}
            to={`/watch/${videoData.id}/${videoData.snippet.channelId}`}
          >
            <SuggestedVideoCard data={videoData} />
          </Link>
        )
      })}
    </section>
  )
}
export default SuggestedVideo
