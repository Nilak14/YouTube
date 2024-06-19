import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {GET_VIDEO_BY_CATEGORY} from '../Utils/constant'
import VideoCard from './VideoCard'
import ShimmerCard from './ShimmerCard'
import {Link} from 'react-router-dom'

const CatVideo = () => {
  const {catId} = useParams()
  const [categoryVideo, setCategoryVideo] = useState([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetchCategoryVideo()
  }, [catId])

  const fetchCategoryVideo = async () => {
    const url = GET_VIDEO_BY_CATEGORY(catId)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        setIsError(true)
        return
      }
      const data = await response.json()
      setCategoryVideo(data.items)
      setIsError(false)
    } catch (error) {
      setIsError(true)
    }
  }

  if (isError) {
    return (
      <h1 className=" absolute top-2/4 left-2/4 text-center text-3xl font-bold ">
        No videos found
      </h1>
    )
  }

  if (categoryVideo.length === 0) {
    return (
      <section className="flex flex-wrap justify-center gap-4 mt-5 pb-3 mx-4">
        {Array.from({length: 10}).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </section>
    )
  }
  return (
    <section className="flex gap-4 flex-wrap  mt-5 pb-3 ml-4">
      {categoryVideo.map((catVideoData) => {
        return (
          <Link key={catVideoData.id} to={`/watch/${catVideoData.id}`}>
            <VideoCard data={catVideoData} />
          </Link>
        )
      })}
    </section>
  )
}
export default CatVideo
