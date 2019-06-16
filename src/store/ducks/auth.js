export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILRURE',
  LOGOUT_REQUEST: 'auth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'auth/LOGOUT_SUCCESS'
}

const INITIAL_STATE = {
  data: {},
  token: null,
  loading: false,
  isLogged: false,
  error: null
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true, data: action.payload.user }
    case Types.LOGIN_SUCCESS:
      return { ...state, loading: false, data: {}, isLogged: true, error: null }
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLogged: false,
        error: action.payload.err
      }
    case Types.LOGOUT_REQUEST:
      return { ...state, loading: true }
    case Types.LOGOUT_SUCCESS:
      return { ...state, loading: false, isLogged: false, error: null }
    default:
      return state
  }
}

export const Creators = {
  loginRequest: data => ({
    type: Types.LOGIN_REQUEST,
    payload: { data }
  }),
  loginSuccess: () => ({ type: Types.LOGIN_SUCCESS }),
  loginFailure: err => ({
    type: Types.LOGIN_FAILURE,
    payload: { err }
  }),
  logoutRequest: () => ({ type: Types.LOGOUT_REQUEST }),
  logoutSuccess: () => ({ type: Types.LOGOUT_SUCCESS })
}
