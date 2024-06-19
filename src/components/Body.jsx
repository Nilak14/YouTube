import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import {useSelector} from 'react-redux'

const Body = () => {
  const sideBarState = useSelector((store) => store.app.isSideBarOpen)
  return (
    <div
      className={`grid ${
        sideBarState ? ' grid-cols-[120px_1fr]' : ' grid-cols-[40px_1fr]'
      } gap-20`}
    >
      <Sidebar />
      <Outlet />
    </div>
  )
}
export default Body
