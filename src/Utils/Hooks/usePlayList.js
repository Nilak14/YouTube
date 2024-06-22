import {useEffect, useState} from 'react'
import {PLAYlIST_API} from '../constant'

const usePlayList = (playlistId) => {
  const [playlistData, setPlaylistData] = useState([])
  useEffect(() => {
    fetchPlaylist()
  }, [])

  const fetchPlaylist = async () => {
    try {
      const response = await fetch(PLAYlIST_API(playlistId))
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      setPlaylistData(data)
    } catch (error) {
      console.log(error)
    }
  }
  return playlistData
}
export default usePlayList
