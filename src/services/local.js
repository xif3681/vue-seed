const BOOKING_TOKEN = 'BOOKING_TOKEN'

export const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem(BOOKING_TOKEN))
  } catch (error) {
    console.log('Get LocalStorage $User Error: ', error)
    return {}
  }
}

export const setUser = (user) => {
  try {
    localStorage.setItem(BOOKING_TOKEN, JSON.stringify(user))
  } catch (error) {
    console.log('Set LocalStorage $User Error: ', error)
  }
}

export const removeUser = () => {
  try {
    localStorage.removeItem('BOOKING_TOKEN')
  } catch (error) {
    console.log('Remove LocalStorage $User Error: ', error)
  }
}

const userCache = () => {
  let userCache = null

  return () => {
    if (!userCache) {
      userCache = getUser()
    }
    return userCache || {}
  }
}

export const user = userCache()
