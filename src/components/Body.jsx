import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import {useSelector} from 'react-redux'
const Body = () => {
  const sideBarState = useSelector((store) => store.app.isSideBarOpen)
  return (
    <div
      className={`grid ${
        sideBarState ? ' grid-cols-[40px_1fr]' : ' grid-cols-[120px_1fr]'
      } gap-10`}
    >
      <Sidebar />

      <MainContainer />
    </div>
  )
}
export default Body
