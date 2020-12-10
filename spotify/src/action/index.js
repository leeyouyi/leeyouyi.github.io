// 登入
export const LOGIN = 'LOGIN'
export const login = login => ({
  type: LOGIN,
  payload: {
    login
  }
})

export const MASK = 'MASK'
export const mask = mask => ({
  type: MASK,
  payload: {
    mask
  }
})
