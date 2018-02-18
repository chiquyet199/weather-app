import { FETCH_NEW } from 'actions/news'

const initialState = [
  {
    id: 123,
    title: 'post1',
    content: '123123',
  },
  {
    id: 124,
    title: 'post2',
    content: '123xxx123',
  },
]
let newsActionHandlers = {}

newsActionHandlers[FETCH_NEW] = (state, payload) => {
  return payload
}

export default (state = initialState, action) => {
  var handler = newsActionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}
