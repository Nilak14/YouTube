import {useEffect, useState} from 'react'
import {SEARCH_VIDEO_API} from '../constant'

const useSearch = (searchQuery) => {
  const [searchData, setSearchData] = useState([])
  useEffect(() => {
    fetchSearchResult()
  }, [])

  const fetchSearchResult = async () => {
    try {
      const response = await fetch(SEARCH_VIDEO_API(searchQuery))
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      setSearchData(data.items)
    } catch (error) {
      console.log(error)
    }
  }
  return searchData
}
export default useSearch
