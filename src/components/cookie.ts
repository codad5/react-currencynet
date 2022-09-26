// code to set cookie in browser
const setCookie = (name: string, value: string, days = 1) => {
  const expires = `expires=${new Date(Date.now() + days * 1 * 2 * 60 * 1000).toUTCString()}`
  document.cookie = `${name}=${value};${expires};path=/`
}
// code to get cookie from browser

const getCookie = (name: string): string => {
  const nameLen = name.length + 1
  const cookie = document.cookie.split(';')
  for (let i = 0; i < cookie.length; i++) {
    const c = cookie[i].trim()
    if (c.substring(0, nameLen) === `${name}=`) {
      return c.substring(nameLen, c.length)
    }
  }
  return ''
}
// code to delete cookie from browser
const deleteCookie = (name: string) => {
  setCookie(name, '', -1)
}

//export all the functions
export { setCookie, getCookie, deleteCookie }
