import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Watch from './components/Watch'
import AppLayout from './AppLayout'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
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
