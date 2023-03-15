import sample from 'underscore/modules/sample'
import { Card } from '../types';
import { Chip } from "../types";



/** Return 52 cards in an array to initialize BlackJack Game */
export const createCards = () => {
  const TYPES: string[] = ['C', 'D', 'H', 'S'],
    SPECIALS: string[] = ['A', 'J', 'Q', 'K'];
  const cards: Card[] = [];

  for (let i = 2; i <= 10; i++) {
    for (const type of TYPES) {
      const card: Card = {
        value: i,
        image: '/images/cards/' + i + type + '.png',
        name: i + type
      }
      cards.push(card)
    }
  }
  for (const type of TYPES) {
    for (const special of SPECIALS) {
      let card: Card;

      if (type === 'A') {
        card = {
          value: 11,
          image: '/images/cards/' + special + type + '.png',
          name: special + type
        }
      } else {
        card = {
          value: 10,
          image: '/images/cards/' + special + type + '.png',
          name: special + type
        }
      }

      cards.push(card)
    }
  }
  return cards
}

//** Return a random card from deck array */
export const getCard = (deck: Card[]) => {
  return sample(deck)
}

export function registerChips() {
  const chips: Chip[] = [];
  const chipList = [10, 50, 100, 500]
  chipList.forEach(item => chips.push({ value: item, image: '/images/chips/' + item + '.png' }))
  return chips
}
