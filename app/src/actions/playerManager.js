export function addPlayer() {
   this.props.dispatch( { type: "ADD_PLAYER" })
}
export function removePlayer() {
   this.props.dispatch({ type: "DELETE_PLAYER" })
}
export function onChangeHandler(props){
  this.props.dispatch({ type: "CHANGE_PLAYER_TAG", props })
}
