const initialState = {
  playerNumber: 1,
  currentID: 1,
  players: [
    {
      key: 1,
      nameTag: "",
      datas:{}
    }
  ]
}

function playerManager(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      if(state.playerNumber < 4){
        return {
          ...state,
          currentID: state.currentID + 1,
          playerNumber: state.playerNumber + 1,
          players: [
            ...state.players,
            {
              key: state.currentID + 1,
              nameTag: "",
              datas: {}
            }
          ]
        }
      }
      return state
    case 'DELETE_PLAYER':
      console.log(action.key)
      if(state.playerNumber > 1){
        return {
            ...state,
            playerNumber: state.playerNumber - 1,
            players: state.players.filter( player => player.key !== action.key)
          }
      }
      return state
    case 'CHANGE_PLAYER_TAG':
      return {
        ...state,
        players: state.players.map( player => {
          if(player.key === action.props.id){
            return {
              ...player,
              nameTag: action.props.value
            }
          }
          else {
            return player
          }
        })
      }
    case 'ADD_DATAS':
      return {
        ...state,
        players: state.players.map( player => {
          if(player.nameTag === action.props.tag){
            return {
              ...player,
              datas: action.props
            }
          }
          else {
            return player
          }
        })
      }

    break
  default:
    return state
  }
}

export default playerManager
