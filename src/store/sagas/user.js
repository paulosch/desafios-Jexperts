import { call, put, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { Creators as UserActions } from '../ducks/user'

import { login, getUsers, setUsers, logout } from '../../services/api'

const getState = state => state.user

export function* getUser(action) {
  try {
    const { data } = action.payload

    const user = yield call(login, data)

    yield put(UserActions.getUserSuccess(user))
    yield put(push('/userForm'))
  } catch (err) {
    yield put(UserActions.getUserFailure(`${err}`))
  }
}

export function* saveUser(action) {
  try {
    const { data } = action.payload
    let { logged } = yield select(getState)

    let users = yield call(getUsers, data.password)

    const equalPasswords = data.password === data.passwordConfirmation
    if (!equalPasswords) throw new Error('Passwords are not the same')

    if (logged) {
      users = users.filter(user => user.login !== data.login)
    } else {
      const isDuplicated = users.find(user => user.login === data.login)
      if (isDuplicated) throw new Error('This login already exists')
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

    yield call(logout)
    yield call(setUsers, users)
    yield put(UserActions.deleteUserSuccess())
    yield put(push('/'))
  } catch (err) {
    yield put(UserActions.putUserFailure(`${err}`))
  }
}
