export const convertToNumber = (l, validate) => {
  // Subtracting 96 from the charCode gets us to a = 1, z = 26, etc.
  const asNumber = l.toLowerCase().charCodeAt(0) - 96

  // If the character is anything other than a letter, just treat it as a
  // space. The character will still be visible in the text, but a blank row
  // will appear in the diagram.
  if (asNumber < 1 || asNumber > 26 || isNaN(asNumber)) {
    return 0;
  }

  return asNumber;
}

export const numberInTrinaryObject = (num) => {
  let trinaryPlaces = [9,3,1]
  let trinaryObject = {}

  const reducer = (previousValue, place) => {
    trinaryObject[place] = Math.trunc(previousValue/place)
    return num%place
  }

  trinaryPlaces.reduce(reducer, num)
  return trinaryObject
}
