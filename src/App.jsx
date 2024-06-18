import Header from './components/Header'
import Body from './components/Body'
import {Provider} from 'react-redux'
import store from './Utils/store'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Watch from './components/Watch'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
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
  return (
    <Provider store={store}>
      <div className="font-roboto">
        <Header />

        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}
export default App
