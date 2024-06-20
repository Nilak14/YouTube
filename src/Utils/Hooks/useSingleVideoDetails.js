import {useEffect, useState} from 'react'
import {SINGLE_VIDEO_DATA_API} from '../constant'

const useSingleVideoDetails = (videoId) => {
  const [videoData, setVideoData] = useState([])
  useEffect(() => {
    fetchSingleVideoData()
  }, [])
  const fetchSingleVideoData = async () => {
    try {
      const response = await fetch(SINGLE_VIDEO_DATA_API(videoId))
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      setVideoData(data.items)
    } catch (error) {
      console.log(error)
    }
  }
  return videoData
}
export default useSingleVideoDetails
