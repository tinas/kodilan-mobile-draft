import { distanceInWordsToNow } from 'date-fns'

const locale = require('date-fns/locale/tr')

export const formatDistanceToNowDate = (date) => {
  const formatted = distanceInWordsToNow(date, { locale, addSuffix: true })

  return formatted.replace('yaklaşık', '')
}

export const formatLocaleDate = (date) => {
  return new Date(date).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
