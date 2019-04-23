const initialState = {
  playerNumber: 1,
  players: [
    {
      key: 1,
      nameTag: ""
    }
  ]
}

function playerManager(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      if(state.playerNumber < 4){
        return {
          ...state,
          playerNumber: state.playerNumber + 1,
          players: [
            ...state.players,
            {
              key: state.playerNumber + 1,
              nameTag: ""
            }
          ]
        }
      }
      return state
      case 'DELETE_PLAYER':
        if(state.playerNumber > 1){
          return {
              ...state,
              playerNumber: state.playerNumber - 1,
              players: state.players.filter( player => player.key !== state.playerNumber)
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
  default:
    return state
  }
}

export default playerManager
