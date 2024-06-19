import {useEffect, useState} from 'react'
import {SEARCH_SUGGESTION_API} from '../constant'

const useSearchSuggestion = (query) => {
  const [suggestedSearch, setSuggestedSearch] = useState([])
  useEffect(() => {
    const timeId = setTimeout(() => fetchSearchSuggestion(), 300)
    return () => {
      clearTimeout(timeId)
    }
  }, [query])

  const fetchSearchSuggestion = async () => {
    try {
      const response = await fetch(SEARCH_SUGGESTION_API + query)
      if (!response.ok) {
        console.log('ok error')
        return
      }
      const data = await response.json()
      setSuggestedSearch(data[1])
    } catch (error) {
      console.log(error)
    }
  }

  return suggestedSearch
}
export default useSearchSuggestion
