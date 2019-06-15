import { all, takeLatest } from 'redux-saga/effects'

import { Types as UserTypes } from '../ducks/user'
import { getUser, saveUser, deleteUser } from './user'

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.GET_REQUEST, getUser),
    takeLatest(UserTypes.PUT_REQUEST, saveUser),
    takeLatest(UserTypes.DELETE_REQUEST, deleteUser)
  ])
}
