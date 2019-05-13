export function addPlayer() {
   return { type: "ADD_PLAYER" }
}
export function removePlayer(key) {
   return { type: "DELETE_PLAYER", key }
}
export function onChangeHandler(props) {
  return { type: "CHANGE_PLAYER_TAG", props }
}
export function addDatas(props) {
  return { type: "ADD_DATAS", props }
}
export function setRequest() {
  return { type: "SET_REQUEST"}
}
export function setPlayersValidity(bool) {
  return { type: "SET_PLAYERS_VALIDITY", bool}
}
export function setPlayers() {
  return { type: "SET_PLAYERS"}
}
export function setPlayersColors() {
  return { type: "SET_PLAYERS_COLORS"}
}
