
import './styles/quasar.scss'
import '@quasar/extras/material-icons/material-icons.css'
import { LocalStorage, SessionStorage, Loading } from 'quasar'

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    loading: { }
  },
  plugins: {
    LocalStorage,
    SessionStorage,
    Loading
  }
}
