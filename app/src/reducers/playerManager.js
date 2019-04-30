const initialState = {
  playerNumber: 1,
  currentID: 1,
  request: "",
  playersAreValid: false,
  displayError: false,
  players: [
    {
      key: 1,
      nameTag: "",
      color: "",
      datas:{}
    }
  ]
}

const COLOR_PLAYER_1 = "#33da5c"
const COLOR_PLAYER_2 = "#ff6c6c"
const COLOR_PLAYER_3 = "#4ee7e5"
const COLOR_PLAYER_4 = "#c400dd"

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
              color: "",
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
    case 'SET_REQUEST':
      let tmp = ""
      state.players.map(player => tmp += (player.nameTag + (state.players.indexOf(player) !== state.playerNumber - 1 ? "," : "")))
      let newState = {...state, request: tmp}
      return newState
    case 'SET_PLAYERS':
      return {
        ...state,
        players: [
          {
            key: 1,
            nameTag: "QGUPYVY9",
            color:"",
            datas: {}
          },
          {
            key: 2,
            nameTag: "P9VCCCJJ2",
            color:"",
            datas: {}
          }
        ]
      }
      case 'SET_PLAYERS_COLORS':
        return {
          ...state,
          players: state.players.map( (player, index) => {
            if(index === 0){
              return {
                ...player,
                color: COLOR_PLAYER_1
              }
            }
            if(index === 1){
              return {
                ...player,
                color: COLOR_PLAYER_2
              }
            }
            if(index === 2){
              return {
                ...player,
                color: COLOR_PLAYER_3
              }
            }
            if(index === 3){
              return {
                ...player,
                color: COLOR_PLAYER_4
              }
            }
            return player
          })
        }
      case 'SET_PLAYERS_VALIDITY':
        return {
          ...state,
          displayError: !action.bool,
          playersAreValid: action.bool
        }
  default:
    return state
  }
}

export default playerManager
