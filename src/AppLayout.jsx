import Header from './components/Header'
import Body from './components/Body'
import {Provider} from 'react-redux'
import store from './Utils/store'

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="font-roboto">
        <Header />
        <Body />
      </div>
    </Provider>
  )
}
export default AppLayout
