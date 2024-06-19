import {useEffect, useState} from 'react'
import {YOUTUBE_API} from '../constant'

const useVIdeos = () => {
  const [videoData, setVideoData] = useState([])

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
      setVideoData(data.items)
    } catch (error) {
      console.log(error)
    }
  }
  return videoData
}

export default useVIdeos
