import { call, put, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { Creators as UserActions } from '../ducks/user'
import { Creators as AuthActions } from '../ducks/auth'

import { getUsers, setUsers } from '../../services/api'

const getState = state => state.user

export function* saveUser(action) {
  try {
    let users = []
    const { data } = action.payload
    let { logged } = yield select(getState)

    const serverUsers = yield call(getUsers, data.password)

    const equalPasswords = data.password === data.passwordConfirmation
    if (!equalPasswords) throw new Error('Passwords are not the same')

    if (logged) {
      users = serverUsers.filter(user => user.login !== data.login)
    } else {
      const isDuplicated = users.find(user => user.login === data.login)
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
    let { data } = yield select(getState)

    let users = yield call(getUsers, data.password)

    users = users.filter(user => user.login !== data.login)

    yield put(AuthActions.logoutRequest())
    yield call(setUsers, users)
    yield put(UserActions.deleteUserSuccess())
    yield put(push('/'))
  } catch (err) {
    yield put(UserActions.putUserFailure(`${err}`))
  }
}
