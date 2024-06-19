import {Outlet} from 'react-router-dom'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="overflow-hidden ml-8">
      <ButtonList />
      {/* <VideoContainer /> */}
      <Outlet />
    </div>
  )
}
export default MainContainer
