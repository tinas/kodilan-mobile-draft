import { tags } from './constants'

export const getRandomTags = (count) => {
  const randomArray = []

  for (let i = 0; i < count; i++) {
    const randomItem = tags[Math.floor(Math.random() * tags.length)]

    if (!randomArray.includes(randomItem)) {
      randomArray.push(randomItem)
    }
  }

  return randomArray
}
