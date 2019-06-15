import bcrypt from 'bcryptjs'
import { getToken, loginToken, logoutToken } from './auth'

const KEYS = {
  USERS: '@jexperts:Users'
}

async function validateToken(userToken) {
  let serverToken = getToken()

  return userToken === serverToken
}

export async function login(data) {
  const response = await localStorage.getItem(KEYS.USERS)
  const users = response ? JSON.parse(response) : []

  const user = users.find(
    user => user.login === data.login && user.password === data.password
  )
  if (!user) throw new Error('Login or password incorrect or doesn\'t exist')

  user.token = await bcrypt.hash(user.password, 10)
  loginToken(user.token)

  return user
}

export function logout() {
  logoutToken()
}

export async function getUsers(userToken) {
  let accept = validateToken(userToken)

  if (!accept) throw new Error('Invalid Token')

  const response = await localStorage.getItem(KEYS.USERS)
  const users = response ? JSON.parse(response) : []

  return users
}

export async function setUsers(userToken, users) {
  let accept = validateToken(userToken)

  if (!accept) throw new Error('Invalid Token')

  await localStorage.setItem(KEYS.USERS, JSON.stringify(users))
}
