export const LIST = 'LIST'
export const list = (title,src) => ({
  type: LIST,
  payload: {
    title,
    src
  }
})
