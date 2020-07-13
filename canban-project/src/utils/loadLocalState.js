

export const loadState = () => {
  const localStorageState = localStorage.getItem("state")
  if(!localStorageState) {
    return {}
  } else {
    return JSON.parse(localStorageState)
  }
 
}