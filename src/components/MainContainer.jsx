import {Outlet} from 'react-router-dom'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className="overflow-hidden ml-8">
      <ButtonList />
      <Outlet />
    </div>
  )
}
export default MainContainer
