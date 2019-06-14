export const Types = {
  GET_REQUEST: 'user/GET_REQUEST',
  GET_SUCCESS: 'user/GET_SUCCESS',
  PUT_REQUEST: 'user/PUT_REQUEST',
  PUT_SUCCESS: 'user/PUT_SUCCESS'
}

const INITIAL_STATE = {
  data: {
    firstName: 'Paulo Cesar',
    lastName: 'Schnobli Gral',
    phone: '48 9 9128-5665',
    email: 'pauloc.npi@gmail.com',
    login: 'paulo',
    password: '1234546'
  },
  loading: false,
  logged: false
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true }
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data }
    case Types.PUT_REQUEST:
      return { ...state, loading: true, data: action.payload.data }
    case Types.PUT_SUCCESS:
      return { ...state, loading: false }
    default:
      return state
  }
}

export const Creators = {
  getUserRequest: () => ({ type: Types.GET_REQUEST }),
  getUserSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
}
