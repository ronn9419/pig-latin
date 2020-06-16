const translate = (str) => {
  const word = str.toLowerCase().trim()
  const vowelIndex = word.search(/[aeiuo]/)

  switch (vowelIndex) {
    case 0:
      return word + 'way'
    case -1:
      return word + 'ay'
    default:
      const start = word.slice(0, vowelIndex)
      const end = word.slice(vowelIndex)

      return `${end}${start}ay`
  }
}

export default (str) => {
  return str
    .split(' ')
    .map((word) => translate(word))
    .join(' ')
}
