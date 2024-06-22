import {Link, useParams} from 'react-router-dom'
import useSearch from '../Utils/Hooks/useSearch'
import ShimmerCard from './ShimmerCard'
import SearchCard from './SearchCard'
import SearchChannel from './SearchChannel'
import SearchPlaylist from './SearchPlaylist'

const SearchPage = () => {
  const {searchQuery} = useParams()
  const searchData = useSearch(searchQuery)
  if (searchData.length === 0) {
    return (
      <section className="flex flex-wrap justify-center gap-4 mt-5 pb-3 mx-4">
        {Array.from({length: 10}).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </section>
    )
  }

  return (
    <div className="mb-5">
      {searchData.map((searchData) => {
        if (searchData.id.kind === 'youtube#channel') {
          return <SearchChannel key={searchData.etag} data={searchData} />
        } else if (searchData.id.kind === 'youtube#playlist') {
          return <SearchPlaylist key={searchData.etag} data={searchData} />
        } else {
          return <SearchCard key={searchData.etag} data={searchData} />
        }
      })}
    </div>
  )
}
export default SearchPage