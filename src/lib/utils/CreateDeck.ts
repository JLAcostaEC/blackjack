import { shuffle } from 'underscore';
import { As, CardType, Deck } from '../types';

const TYPES: string[] = ['C', 'D', 'H', 'S'],
  SPECIALS: string[] = ['A', 'J', 'Q', 'K'];

const deck: Deck = [];

export const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (const type of TYPES) {
      const card: CardType = {
        value: i,
        image: '/images/cards/' + i + type + '.png',
        name: i + type
      }
      deck.push(card)
    }
  }
  for (const type of TYPES) {
    for (const special of SPECIALS) {
      let card: CardType | As;

      if (type === 'A') {
        card = {
          value: {
            min: 1,
            max: 11
          },
          image: './images/cards/' + special + type + '.png',
          name: special + type
        }
      }else{
        card = {
          value: 10,
          image: './images/cards/' + special + type + '.png',
          name: special + type
        }
      }

      deck.push(card)
    }
  }

  return shuffle(deck)
}

