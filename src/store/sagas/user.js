import { call, put } from 'redux-saga/effects'

import { Creators as UserActions } from '../ducks/user'

export function* getUser() {
  try {
    //TODO: buscar dados no storage
    const response = yield call()
    yield put(UserActions.getUserSuccess(response.data))
  } catch (err) {
    console.log(err)
  }
}
