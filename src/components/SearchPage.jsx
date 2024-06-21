import {useParams} from 'react-router-dom'

const SearchPage = () => {
  const {searchQuery} = useParams()
  console.log(searchQuery)
  return <div>SearchPage</div>
}
export default SearchPage
