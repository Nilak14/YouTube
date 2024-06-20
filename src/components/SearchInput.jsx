import {useState} from 'react'
import {IoSearchOutline} from 'react-icons/io5'
import useSearchSuggestion from '../Utils/Hooks/useSearchSuggestion'
const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const searchSuggestionResult = useSearchSuggestion(searchQuery)
  const [showSuggestion, setShowSuggestion] = useState(false)

  return (
    <>
      <form className=" col-span-10 flex justify-center items-center">
        <article className="relative  w-[50%]  rounded-full flex">
          <section className="  borderNormal w-full overflow-hidden rounded-full flex">
            <input
              value={searchQuery}
              onInput={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              placeholder="Search"
              className="w-full px-3 py-2 border-none outline-none font-semibold tracking-wider placeholder:font-normal"
              type="search"
            />
            <button className="bg-black text-white px-3 py-2" type="submit">
              <IoSearchOutline className="text-2xl" />
            </button>
          </section>
          {showSuggestion && searchSuggestionResult.length !== 0 && (
            <section className="borderNormal absolute top-full rounded-lg w-[91%] left-2 h-[66vh]  bg-white overflow-auto">
              <ul className="py-2">
                {searchSuggestionResult.map((searchResult, index) => {
                  return (
                    <li
                      key={index}
                      className=" flex items-center gap-3 font-medium p-2  text-lg tracking-wide hover:bg-gray-300 cursor-pointer overflow-hidden "
                    >
                      <IoSearchOutline className="text-xl" />
                      {searchResult}
                    </li>
                  )
                })}
              </ul>
            </section>
          )}
        </article>
      </form>
    </>
  )
}
export default SearchInput
