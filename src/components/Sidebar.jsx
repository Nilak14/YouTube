const Sidebar = () => {
  return (
    <aside className="sticky shadow-lg w-[16vw] h-[100vh] overflow-auto scrollbar-thin mt-3">
      <section className="p-3">
        <ul>
          <li className="py-1">Home</li>
          <li className="py-1">shorts</li>
          <li className="py-1">Subscriptions</li>
        </ul>
      </section>
      <section className="p-3">
        <h1 className="py-1">You {'>'} </h1>
        <ul>
          <li className="py-1">Your Channel</li>
          <li className="py-1">History</li>
          <li className="py-1">Playlist</li>
          <li className="py-1">Your Videos</li>
          <li className="py-1">Your Courses</li>
          <li className="py-1">Watch later</li>
          <li className="py-1">Liked Videos</li>
          <li className="py-1">Downloads</li>
        </ul>
      </section>
      <section className="p-3">
        <h1 className="py-1">Subscriptions</h1>
        <ul>
          <li className="py-1">Channel 1</li>
          <li className="py-1">Channel 2</li>
          <li className="py-1">Channel 3</li>
          <li className="py-1">Channel 4</li>
          <li className="py-1">Channel 5</li>
          <li className="py-1">Channel 6</li>
          <li className="py-1">Channel 7</li>
          <li className="py-1">Channel 8</li>
        </ul>
      </section>
      <section className="p-3">
        <h1 className="py-1">Explore</h1>
        <ul>
          <li className="py-1">Trending 1</li>
          <li className="py-1">Music 2</li>
          <li className="py-1">Gaming 3</li>
          <li className="py-1">Sports 4</li>
        </ul>
      </section>
      <section className="p-3">
        <ul>
          <li className="py-1">Settings</li>
          <li className="py-1">Report History</li>
          <li className="py-1">Help</li>
          <li className="py-1">Send feedback</li>
        </ul>
      </section>
      <section className="p-3">
        <p className="py-1">
          AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
        </p>
        <p className="py-1">
          TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
        </p>
        <p className="py-1">© 2024 Google LLC</p>
      </section>
    </aside>
  )
}
export default Sidebar
