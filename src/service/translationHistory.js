const storageKey = 'translationHistory'

const data = {
  current: JSON.parse(localStorage.getItem(storageKey)) || [],
}

export default {
  append: (word) => {
    data.current = data.current.concat([word])

    localStorage.setItem(storageKey, JSON.stringify(data.current))
  },
  getHistory: () => {
    return data.current
  },
  clear: () => {
    data.current = []
    localStorage.removeItem(storageKey)
  },
}
