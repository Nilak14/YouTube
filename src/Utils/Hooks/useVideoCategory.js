import {useEffect, useState} from 'react'
import {VIDEO_CATEGORY_API} from '../constant'

const useVideoCategory = () => {
  const [videoCategory, setVideCategory] = useState([])
  useEffect(() => {
    fetchVideoCategory()
  }, [])

  const fetchVideoCategory = async () => {
    try {
      const response = await fetch(VIDEO_CATEGORY_API)
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      setVideCategory(data.items)
    } catch (error) {
      console.log(error)
    }
  }
  return videoCategory
}
export default useVideoCategory
