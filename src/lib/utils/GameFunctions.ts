import sample from 'underscore/modules/sample'
import { Card } from '../types/types';

const TYPES: string[] = ['C', 'D', 'H', 'S'],
  SPECIALS: string[] = ['A', 'J', 'Q', 'K'];

const cards: Card[] = [];

/** Return 52 cards in an array to initialize BlackJack Game */
export const createCards = () => {
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
      }else{
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



export const getCard = (deck: string[]) => {
  return sample(deck)
}

