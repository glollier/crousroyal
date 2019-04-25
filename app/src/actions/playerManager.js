export function addPlayer() {
   this.props.dispatch( { type: "ADD_PLAYER" })
}
export function removePlayer(key) {
   this.props.dispatch({ type: "DELETE_PLAYER", key })
}
export function onChangeHandler(props){
  this.props.dispatch({ type: "CHANGE_PLAYER_TAG", props })
}
export function addDatas(props){
  this.props.dispatch({ type: "ADD_DATAS", props })
}
export function setRequest(){
  this.props.dispatch({ type: "SET_REQUEST"})
}
export function setPlayers(){
  this.props.dispatch({ type: "SET_PLAYERS"})
}
