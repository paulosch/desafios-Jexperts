import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { Creators as AuthActions } from '../ducks/auth'
import { Creators as UserActions } from '../ducks/user'

import { login as apiLogin, logout as apiLogout } from '../../services/api'

export function* login(action) {
  try {
    const { data } = action.payload

    const user = yield call(apiLogin, data)

    yield put(AuthActions.loginSuccess())
    yield put(UserActions.getUserSuccess(user))
    yield put(push('/userForm'))
  } catch (err) {
    yield put(AuthActions.loginFailure(`${err}`))
  }
}

export function* logout(action) {
  try {
    yield call(apiLogout)

    yield put(UserActions.deleteUserSuccess())
    yield put(AuthActions.logoutSuccess())
    yield put(push('/'))
  } catch (err) {
    console.tron.log(err)
  }
}
