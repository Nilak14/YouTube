import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {closeSideBar} from '../Utils/appSlice'

const Watch = () => {
  const {vidId} = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeSideBar())
  }, [])
  return (
    <div>
      <iframe
        className="w-[950px] h-[450px] rounded-xl"
        src={`https://www.youtube.com/embed/${vidId}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}
export default Watch
