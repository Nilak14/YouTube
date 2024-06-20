import {useEffect, useState} from 'react'
import {SEARCH_SUGGESTION_API} from '../constant'
import {useDispatch, useSelector} from 'react-redux'
import {searchCache} from '../SearchSlice'

const useSearchSuggestion = (query) => {
  const [suggestedSearch, setSuggestedSearch] = useState([])

  const cachedSearch = useSelector((store) => store.SearchSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (cachedSearch[query]) {
        setSuggestedSearch(cachedSearch[query])
      } else {
        fetchSearchSuggestion()
      }
    }, 300)

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
      dispatch(
        searchCache({
          [query]: data[1],
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  return suggestedSearch
}
export default useSearchSuggestion
