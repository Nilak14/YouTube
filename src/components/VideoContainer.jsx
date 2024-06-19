import VideoCard from './VideoCard'
import ShimmerCard from './ShimmerCard'
import {Link} from 'react-router-dom'
import useVIdeos from '../Utils/Hooks/useVIdeos'

const VideoContainer = () => {
  const youtubeData = useVIdeos()

  if (youtubeData.length === 0) {
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
      {youtubeData.map((videoData) => {
        return (
          <Link key={videoData.id} to={`/watch/${videoData.id}`}>
            <VideoCard data={videoData} />
          </Link>
        )
      })}
    </section>
  )
}
export default VideoContainer
