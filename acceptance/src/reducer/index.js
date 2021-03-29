import * as actions from '../action'

const list = {
  title: '',
  src:''
}

export const  listReducer = (state = list, action) => {
  switch (action.type) {
    case actions.LIST:
      return action.payload
    default:
      return state
  }
}
