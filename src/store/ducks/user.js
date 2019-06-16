export const Types = {
  GET_REQUEST: 'user/GET_REQUEST',
  GET_SUCCESS: 'user/GET_SUCCESS',
  GET_FAILURE: 'user/GET_FAILURE',
  PUT_REQUEST: 'user/PUT_REQUEST',
  PUT_SUCCESS: 'user/PUT_SUCCESS',
  PUT_FAILURE: 'user/PUT_FAILURE',
  DELETE_REQUEST: 'user/DELETE_REQUEST',
  DELETE_SUCCESS: 'user/DELETE_SUCCESS'
}

const INITIAL_STATE = {
  data: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    login: '',
    password: '',
    passwordConfirmation: '',
    token: null
  },
  loading: false,
  error: null
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true }
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        logged: true,
        error: false,
        data: action.payload.data
      }
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.err }
    case Types.PUT_REQUEST:
      return { ...state, loading: true, data: action.payload.data }
    case Types.PUT_SUCCESS:
      return { ...state, loading: false }
    case Types.PUT_FAILURE:
      return { ...state, loading: false, error: action.payload.err }
    case Types.DELETE_REQUEST:
      return { ...state, loading: true }
    case Types.DELETE_SUCCESS:
      return { ...state, loading: false, data: {} }
    default:
      return state
  }
}

export const Creators = {
  getUserRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data }
  }),
  getUserSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
  getUserFailure: err => ({
    type: Types.GET_FAILURE,
    payload: { err }
  }),
  putUserRequest: data => ({
    type: Types.PUT_REQUEST,
    payload: { data }
  }),
  putUserSuccess: () => ({ type: Types.PUT_SUCCESS }),
  putUserFailure: err => ({
    type: Types.PUT_FAILURE,
    payload: { err }
  }),
  deleteUserRequest: () => ({ type: Types.DELETE_REQUEST }),
  deleteUserSuccess: () => ({ type: Types.DELETE_SUCCESS })
}
