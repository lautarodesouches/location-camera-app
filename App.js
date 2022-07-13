import { Provider } from 'react-redux'
import { init } from './src/db'
import AppNavigator from './src/navigation'
import { store } from './src/store'

init()
  .then(res => {})
  .catch(error => {
    throw error
  })

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App