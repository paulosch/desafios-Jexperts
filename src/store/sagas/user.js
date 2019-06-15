import { call, put, select } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { Creators as UserActions } from '../ducks/user'

const KEYS = {
  USERS: '@jexperts:Users'
}

const getState = state => state.user

export function* getUser(action) {
  try {
    const { data } = action.payload
    const response = yield call([localStorage, 'getItem'], KEYS.USERS)
    const users = response ? yield JSON.parse(response) : []

    const user = users.find(
      user => user.login === data.login && user.password === data.password
    )

    if (!user) throw new Error('Login or password incorrect or doesn\'t exist')

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

    const response = yield call([localStorage, 'getItem'], KEYS.USERS)
    let users = response ? yield JSON.parse(response) : []

    const equalPasswords = data.password === data.passwordConfirmation
    if (!equalPasswords) throw new Error('Passwords are not the same')

    if (logged) {
      users = users.filter(user => user.login !== data.login)
      users.push(data)
    } else {
      const isDuplicated = users.find(user => user.login === data.login)
      if (isDuplicated) throw new Error('This login already exists')
      else users.push(data)
    }

    yield call([localStorage, 'setItem'], KEYS.USERS, JSON.stringify(users))
    yield put(UserActions.putUserSuccess())

    if (!logged) yield put(push('/'))
  } catch (err) {
    yield put(UserActions.putUserFailure(`${err}`))
  }
}

export function* deleteUser() {
  try {
    let { data } = yield select(getState)

    const response = yield call([localStorage, 'getItem'], KEYS.USERS)
    let users = response ? yield JSON.parse(response) : []

    users = users.filter(user => user.login !== data.login)

    yield call([localStorage, 'setItem'], KEYS.USERS, JSON.stringify(users))
    yield put(UserActions.deleteUserSuccess())
    yield put(push('/'))
  } catch (err) {
    yield put(UserActions.putUserFailure(`${err}`))
  }
}
