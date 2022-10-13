import { createContext } from 'react'
import { UserInterface } from '../shared/models/ILogin'

interface AppContextInterface {
  user: UserInterface
  relatedUsers: UserInterface[]
  isLoggedIn: boolean
  sessionId: string | null | undefined
  setLogin: (value: boolean) => void
  setSessionId: (value: string) => void
  setUser: (value: UserInterface) => void
  setRelatedUsers: (value: UserInterface[]) => void
  roleName: string
}

export const setWithExpiry = (key: string, value: string) => {
  const now = new Date()
  const ttl = 5 * 60 * 60 * 1000
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export const getWithExpiry = (key: string) => {
  const itemStr = localStorage.getItem(key)
  let item = null
  if (!itemStr) {
    return null
  }
  try {
    item = JSON.parse(itemStr)
  } catch (e) {
    item = itemStr
  }
  const now = new Date()
  if (now.getTime() > item?.expiry) {
    localStorage.removeItem(key)
    return null
  }
  return item.value
}

const getUser = () => {
  const userStorage = getWithExpiry('user')
  const user: UserInterface = {
    firmName: '',
    roleName: '',
    uid: null,
    userName: '',
  }
  if (userStorage) {
    const userObj: UserInterface = JSON.parse(userStorage)
    user.firmName = userObj.firmName
    user.roleName = userObj.roleName
    user.uid = userObj.uid
    user.userName = userObj.userName
  }
  return user
}

const getRelatedUsers = () => {
  const relatedUsersStorage = getWithExpiry('relatedUsers')
  const users: UserInterface[] = []
  if (relatedUsersStorage) {
    const usersObj: UserInterface[] = JSON.parse(relatedUsersStorage)
    usersObj.forEach((user) => {
      users.push(user)
    })
  }
  return users
}

const authStore: AppContextInterface = {
  user: getUser(),
  relatedUsers: getRelatedUsers(),
  isLoggedIn: getWithExpiry('isLoggedIn') === 'true' ? true : false,
  sessionId: getWithExpiry('sessionId'),
  setLogin: (isLoggedIn: boolean) => {
    setWithExpiry('isLoggedIn', JSON.stringify(isLoggedIn))
    authStore.isLoggedIn = isLoggedIn
  },
  setSessionId: (sessionId: string) => {
    setWithExpiry('sessionId', sessionId)
    authStore.sessionId = sessionId
  },
  setUser: (user: UserInterface) => {
    setWithExpiry('user', JSON.stringify(user))
    authStore.user = user
  },
  setRelatedUsers: (users: UserInterface[]) => {
    setWithExpiry('relatedUsers', JSON.stringify(users))
    authStore.relatedUsers = users
  },
  roleName: getWithExpiry('roleName') === 'Admin' ? 'Admin' : 'User',
}

export const AuthContext = createContext<AppContextInterface>(authStore)
