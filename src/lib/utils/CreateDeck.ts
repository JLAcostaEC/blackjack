import { As, Card, Deck } from '../types/types';

const TYPES: string[] = ['C', 'D', 'H', 'S'],
  SPECIALS: string[] = ['A', 'J', 'Q', 'K'];

const deck: Deck = [];

export const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (const type of TYPES) {
      const card: Card = {
        value: i,
        image: '/images/cards/' + i + type,
        name: i + type
      }
      deck.push(card)
    }
  }
  for (const type of TYPES) {
    for (const special of SPECIALS) {
      let card: Card | As;

      if (type === 'A') {
        card = {
          value: {
            min: 1,
            max: 11
          },
          image: '/images/cards/' + special + type,
          name: special + type
        }
      }else{
        card = {
          value: 10,
          image: '/images/cards/' + special + type,
          name: special + type
        }
      }

      deck.push(card)
    }
  }

  return deck
}

