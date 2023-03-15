import sample from 'underscore/modules/sample'
import { Deck } from '../types'

export const getCard = (deck: Deck) => {
  return deck.pop()
}

