import {connect} from "react-redux"
import MyComponent from "../component/MyComponent"
import {buttonClickAction} from "../redux/compteur/Actions"

const mapStateToProps = (state) => ({
  nbClick: state.compteur.valeur
})

const mapDispatchToProps = (dispatch) => ({
  onPress: () => dispatch(buttonClickAction())
})

const MyComponentContainer = connect(mapStateToProps, mapDispatchToProps)(MyComponent)

export default MyComponentContainer
