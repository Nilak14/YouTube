import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Watch from './components/Watch'
import AppLayout from './AppLayout'
import CatVideo from './components/CatVideo'
import VideoContainer from './components/VideoContainer'

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
            path: '/:catId',
            element: <CatVideo />,
          },
        ],
      },

      {
        path: 'watch/:vidId',
        element: <Watch />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={appRouter} />
}
export default App
