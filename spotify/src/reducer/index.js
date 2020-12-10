import * as actions from '@/action'

const login = {
  login: false
}

export const loginReducer = (state = login, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return action.payload
    default:
      return state
  }
}

const mask = {
  mask: false
}

export const maskReducer = (state = mask, action) => {
  switch (action.type) {
    case actions.MASK:
      return action.payload
    default:
      return state
  }
}
