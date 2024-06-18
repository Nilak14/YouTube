import {useEffect, useState} from 'react'
import {YOUTUBE_API} from '../Utils/constant'
import VideoCard from './VideoCard'
import ShimmerCard from './ShimmerCard'

const VideoContainer = () => {
  const [youtubeData, setYoutubeData] = useState([])
  useEffect(() => {
    getYoutubeData()
  }, [])
  const getYoutubeData = async () => {
    try {
      const response = await fetch(YOUTUBE_API)
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      setYoutubeData(data.items)
    } catch (error) {
      console.log(error)
    }
  }
  if (youtubeData.length === 0) {
    return (
      <section className="flex flex-wrap justify-center gap-4 mt-5 pb-3 mx-4">
        {Array.from({length: 10}).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </section>
    )
  }

  return (
    <section className="flex gap-4 flex-wrap  mt-5 pb-3 ml-4">
      {youtubeData.map((videoData) => {
        return <VideoCard data={videoData} />
      })}
    </section>
  )
}
export default VideoContainer
