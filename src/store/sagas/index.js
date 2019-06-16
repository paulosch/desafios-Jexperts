import { all, takeLatest } from 'redux-saga/effects'

import { Types as UserTypes } from '../ducks/user'
import { Types as AuthTypes } from '../ducks/auth'

import { login, logout } from './auth'
import { saveUser, deleteUser } from './user'

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGOUT_REQUEST, logout),
    takeLatest(UserTypes.PUT_REQUEST, saveUser),
    takeLatest(UserTypes.DELETE_REQUEST, deleteUser)
  ])
}
