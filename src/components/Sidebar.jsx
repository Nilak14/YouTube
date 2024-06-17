const Sidebar = () => {
  return (
    <aside className="fixed h-full shadow-lg w-[16vw] mt-3 tracking-wide">
      <article className=" overflow-auto h-full scrollbar-thin">
        <section className="p-3">
          <ul>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-bold text-md">
              Home
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-bold text-md">
              Shorts
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-bold text-md">
              Subscriptions
            </li>
          </ul>
        </section>
        <section className="p-3">
          <h1 className="p-1   font-bold text-lg">You {'>'} </h1>
          <ul>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Your Channel
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              History
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Playlist
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Your Videos
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Your Courses
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Watch later
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Liked Videos
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Downloads
            </li>
          </ul>
        </section>
        <section className="p-3">
          <h1 className="p-1 font-bold text-lg">Subscriptions</h1>
          <ul>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 1
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 2
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 3
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 4
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 5
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 6
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 7
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Channel 8
            </li>
          </ul>
        </section>
        <section className="p-3">
          <h1 className="p-1 font-bold text-lg">Explore</h1>
          <ul>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Trending 1
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Music 2
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Gaming 3
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-semibold pl-2">
              Sports 4
            </li>
          </ul>
        </section>
        <section className="p-3">
          <ul>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-bold text-md">
              Settings
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-bold text-md">
              Report History
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-bold text-md">
              Help
            </li>
            <li className="p-1 hover:bg-slate-300 rounded-lg font-bold text-md">
              Send feedback
            </li>
          </ul>
        </section>
      </article>
    </aside>
  )
}
export default Sidebar
