import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
