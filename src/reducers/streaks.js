const streaksDefaultState = []

const streaksReducer = (state = streaksDefaultState, action) => {
  switch(action.type) {
    case 'USER_STREAK':
      return [
        ...state,
        action.streakObj
      ]
    default:
      return state
  }
}

export default streaksReducer
