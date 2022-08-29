import {Provider} from "react-redux"
import {combineReducers, createStore} from "redux"
import CompteurReducer from "./src/redux/compteur/Reducer"
import MyComponentContainer from "./src/container/MyComponentContainer"

const store = createStore(
  combineReducers({
    compteur: CompteurReducer,
  })
)

export default function App() {
  return (
    <Provider store={store}>
      <MyComponentContainer/>
    </Provider>
  )
}
