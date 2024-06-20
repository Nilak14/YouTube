import {GiHamburgerMenu} from 'react-icons/gi'

import {FaCircleUser} from 'react-icons/fa6'
import logo from '../assets/images/youTubeLogo.png'
import {toggleSideBar} from '../Utils/appSlice'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import SearchInput from './SearchInput'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <header className=" sticky z-10 top-0  bg-white grid grid-flow-col shadow-lg p-5 items-center">
      <section className="col-span-1 flex gap-8">
        <button
          onClick={() => {
            dispatch(toggleSideBar())
          }}
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
        <Link to={'/'}>
          <img className="w-[120px]" src={logo} alt="youtube logo" />
        </Link>
      </section>
      <SearchInput />
      <section className="col-span-1">
        <button>
          <FaCircleUser className="text-4xl" />
        </button>
      </section>
    </header>
  )
}
export default Header
