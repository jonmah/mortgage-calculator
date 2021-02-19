export const isObjectEmpty = O => {
  for (var key in O) {
    if (O.hasOwnProperty(key)) return false
  }
  return true
}
