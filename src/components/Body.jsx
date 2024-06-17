import {useSelector} from 'react-redux'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import {combineSlices} from '@reduxjs/toolkit'

const Body = () => {
  const sideBarState = useSelector((store) => store.app.isSideBarOpen)
  console.log(sideBarState)
  return (
    <div className="flex gap-7">
      {sideBarState && <Sidebar />}

      <MainContainer />
    </div>
  )
}
export default Body
