import {GiHamburgerMenu} from 'react-icons/gi'
import {IoSearchOutline} from 'react-icons/io5'
import {FaCircleUser} from 'react-icons/fa6'
import logo from '../assets/images/youTubeLogo.png'

import {toggleSideBar} from '../Utils/appSlice'
import {useDispatch} from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <header className=" sticky top-0  bg-white grid grid-flow-col shadow-lg p-5 items-center">
      <section className="col-span-1 flex gap-8">
        <button
          onClick={() => {
            dispatch(toggleSideBar())
          }}
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
        <img className="w-[120px]" src={logo} alt="youtube logo" />
      </section>
      <form className="col-span-10 flex justify-center items-center">
        <section className="borderNormal w-[50%] overflow-hidden rounded-full flex">
          <input
            placeholder="Search"
            className="w-full px-3 py-2 border-none outline-none font-semibold tracking-wider placeholder:font-normal"
            type="text"
          />
          <button className="bg-black text-white px-3 py-2" type="submit">
            <IoSearchOutline className="text-2xl" />
          </button>
        </section>
      </form>

      <section className="col-span-1">
        <button>
          <FaCircleUser className="text-4xl" />
        </button>
      </section>
    </header>
  )
}
export default Header
