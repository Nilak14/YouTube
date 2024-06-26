import {useSelector} from 'react-redux'
import {IoMdHome, IoMdMusicalNote, IoMdSettings} from 'react-icons/io'
import {SiYoutubeshorts, SiYoutubegaming} from 'react-icons/si'
import {
  MdSubscriptions,
  MdWatchLater,
  MdOutlineOutlinedFlag,
  MdHelpOutline,
} from 'react-icons/md'
import {BiSolidUserAccount} from 'react-icons/bi'
import {GoVideo} from 'react-icons/go'
import {FaFireAlt, FaTrophy} from 'react-icons/fa'
import {RiFeedbackLine} from 'react-icons/ri'
import {Link, NavLink} from 'react-router-dom'

const Sidebar = () => {
  const sideBarState = useSelector((store) => store.app.isSideBarOpen)

  return sideBarState ? (
    <aside className="  ">
      <article className=" bg-white z-20 h-[89vh]  fixed  overflow-auto side-scroll-bar hover:scroll-bar-hover ">
        <section className=" ml-2 p-3 border-b-2 border-black">
          <ul>
            <li className=" ">
              <NavLink
                className={({isActive}) =>
                  `flex p-2 hover:bg-slate-300 rounded-lg font-bold text-md items-center gap-2 ${
                    isActive && 'bg-slate-300'
                  }`
                }
                to={'/'}
              >
                <IoMdHome className="text-2xl" />
                Home
              </NavLink>
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-bold text-md">
              <SiYoutubeshorts className="text-2xl" />
              Shorts
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-bold text-md">
              <MdSubscriptions className="text-2xl" />
              Subscriptions
            </li>
          </ul>
        </section>
        <section className=" ml-2 p-3 border-b-2 border-black">
          <h1 className="p-2   font-bold text-lg">You {'>'} </h1>
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              <BiSolidUserAccount className="text-2xl" />
              Your Channel
            </li>

            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              <GoVideo className="text-2xl" />
              Your Videos
            </li>

            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              <MdWatchLater className="text-2xl" />
              Watch later
            </li>
          </ul>
        </section>
        <section className=" ml-2 p-3 border-b-2 border-black">
          <h1 className="p-2 font-bold text-lg">Subscriptions</h1>
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 1
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 2
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 3
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 4
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 5
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 6
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 7
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 8
            </li>
          </ul>
        </section>
        <section className=" ml-2 p-3 border-b-2 border-black">
          <h1 className="p-2 font-bold text-lg">Explore</h1>
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              <FaFireAlt className="text-2xl" />
              Trending
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              <IoMdMusicalNote className="text-2xl" />
              Music
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              <SiYoutubegaming className="text-2xl" />
              Gaming
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              <FaTrophy className="text-2xl" />
              Sports
            </li>
          </ul>
        </section>
        <section className="ml-2 p-3 border-b-2 border-black">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-bold text-md">
              <IoMdSettings className="text-2xl" />
              Settings
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-bold text-md">
              <MdOutlineOutlinedFlag className="text-2xl" />
              Report History
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-bold text-md">
              <MdHelpOutline className="text-2xl" />
              Help
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-slate-300 rounded-lg font-bold text-md">
              <RiFeedbackLine className="text-2xl" />
              Send feedback
            </li>
          </ul>
        </section>
      </article>
    </aside>
  ) : (
    <aside className="hidden lg:block mt-4">
      <section className="w-[80px]  fixed flex flex-col justify-center items-center gap-10">
        <div>
          <Link className="flex flex-col items-center gap-2" to={'/'}>
            <IoMdHome className="text-3xl" />
            Home
          </Link>
        </div>
        <div className="flex items-center flex-col gap-2">
          <SiYoutubeshorts className="text-3xl" />
          Shorts
        </div>
        <div className="flex items-center flex-col gap-2">
          <SiYoutubegaming className="text-3xl" />
          Gaming
        </div>
        <div className="flex items-center flex-col gap-2">
          <FaFireAlt className="text-3xl" />
          Trending
        </div>
      </section>
    </aside>
  )
}
export default Sidebar
