import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Watch from './components/Watch'
import AppLayout from './AppLayout'
import CatVideo from './components/CatVideo'
import VideoContainer from './components/VideoContainer'
import SearchPage from './components/SearchPage'
import Channel from './components/Channel'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
        children: [
          {
            path: '/',
            element: <VideoContainer />,
          },
          {
            path: '/cat/:catId',
            element: <CatVideo />,
          },

          {
            path: '/search/:searchQuery',
            element: <SearchPage />,
          },
        ],
      },

      {
        path: 'watch/:vidId/:channelId',
        element: <Watch />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={appRouter} />
}
export default App
