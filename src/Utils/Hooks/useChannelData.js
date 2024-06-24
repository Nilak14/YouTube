import {useEffect, useState} from 'react'
import {CHANNEL_DATA_API} from '../constant'

const useChannelData = (channelId) => {
  const [channelData, setChannelData] = useState([])
  useEffect(() => {
    fetchChannelData()
  }, [channelId])

  const fetchChannelData = async () => {
    try {
      const response = await fetch(CHANNEL_DATA_API(channelId))
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      setChannelData(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  return channelData
}
export default useChannelData
