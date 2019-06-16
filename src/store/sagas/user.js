import { call, put, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { Creators as UserActions } from '../ducks/user'
import { Creators as AuthActions } from '../ducks/auth'

import { getUsers, setUsers } from '../../services/api'

const getAuth = state => state.auth
const getUser = state => state.user

export function* saveUser(action) {
  try {
    let users = []
    const { data } = action.payload
    let { logged } = yield select(getAuth)

    const serverUsers = yield call(getUsers, data.password)

    const equalPasswords = data.password === data.passwordConfirmation
    if (!equalPasswords) throw new Error('Passwords are not the same')

    if (logged) {
      users = serverUsers.filter(user => user.login !== data.login)
    } else {
      const isDuplicated = serverUsers.find(user => user.login === data.login)
      if (isDuplicated) throw new Error('This login already exists')

      users = serverUsers
    }

    users.push(data)
    yield call(setUsers, data.password, users)
    yield put(UserActions.putUserSuccess())

    if (!logged) yield put(push('/'))
  } catch (err) {
    yield put(UserActions.putUserFailure(`${err}`))
  }
}

export function* deleteUser() {
  try {
    let { data } = yield select(getUser)

    let users = yield call(getUsers, data.password)

    users = users.filter(user => user.login !== data.login)

    yield call(setUsers, data.token, users)
    yield put(UserActions.deleteUserSuccess())
    yield put(AuthActions.logoutRequest())

    yield put(push('/'))
  } catch (err) {
    yield put(UserActions.putUserFailure(`${err}`))
  }
}
