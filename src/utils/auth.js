
const TokenKey = 'Authorization'

const nickNameKey = 'nickName'

const uidKey = 'uid'

const isAdminKey = 'isAdmin'


export const getToken = () => {
  return localStorage.getItem(TokenKey);
}

export const setToken = (token) => {
  return localStorage.setItem(TokenKey, token)
}

export const removeToken = () => {
  return localStorage.removeItem(TokenKey)
}

export const removeNickName = () => {
  return localStorage.removeItem(nickNameKey)
}

export const setNickName = (nickName) => {
  return localStorage.setItem(nickNameKey, nickName)
}

export const getNickName = () => {
  return localStorage.getItem(nickNameKey);
}

export const setUid = (uid) => {
  return localStorage.setItem(uidKey, uid)
}

export const getUid = () => {
  return localStorage.getItem(uidKey);
}

export const removeUid = () => {
  return localStorage.removeItem(uidKey)
}

// 王浩宇

export const getIsAdmin = () => {
  return localStorage.getItem(isAdminKey)
}

export const setIsAdmin = (isAdmin) => {
  return localStorage.setItem(isAdminKey, isAdmin)
}

export const removeIsAdmin = () => {
  return localStorage.removeItem(isAdminKey)
}

// 王浩宇