import { shuffle } from 'underscore'
import { Card } from '../types';
import { createCards, getCard } from "./GameFunctions";

/** Generate the game deck and deal each card on demand */
class Deck {
  cards: Card[] = [];

  constructor() {
    this.cards = createCards()
  }

  /** 
   * Function to shuffle the deck of cards randomly
   * 
   * This function return void, to use the shuffled deck, just use the Deck class
   */
  shuffleDeck() {
    this.cards = shuffle(this.cards)
  }

  /** Get one card of the deck */
  deal() {
    return getCard(this.cards);
  }
}

/** Player Class - Can be used for a real Player or for the IA Dealer */
class Player {
  hand: Card[] = [];
  bank: number = localStorage.getItem('BJAPPBank') ? parseInt(localStorage.getItem('BJAPPBank')!) : 1000
  chips = 0;

  /** Return current score of player calculating all cards in hand */
  getScore() {
    let score = 0;
    for (let i = 0; i < this.hand.length; i++) {
      score += this.hand[i].value;
    }
    return score;
  }

  makeMove(dealerCard: Card) {
    const score = this.getScore();
    if (score < 12) {
      return 'hit';
    } else if (score < 17 && dealerCard.value >= 7) {
      return 'hit';
    } else if (score < 18 && dealerCard.value >= 10) {
      return 'hit';
    } else {
      return 'stand';
    }
  }
}

export class BlackJApp {
  deck: Deck = new Deck();
  player: Player = new Player();
  dealer: Player = new Player();
  currentBet = 0;

  /** Initialize the game, Shuffle Deck then give 2 cards for player and dealer */
  start() {
    this.deck.shuffleDeck();
    this.player.hand = [this.deck.deal(), this.deck.deal()];
    this.dealer.hand = [this.deck.deal(), this.deck.deal()];
    this.dealer.hand[0].isHidden = true
  }

  /** Request one card to dealer for the player or the dealer itself */
  hit() {
    this.player.hand.push(this.deck.deal());
  }

  /** Stand player with the current cards, then the dealer will hit for cards */
  stand() {
    while (this.dealer.getScore() < 17) {
      this.dealer.hand.push(this.deck.deal());
    }
  }

  placeBet(amount: number) {
    if (amount <= this.player.bank) {
      this.currentBet += amount;
      this.player.bank -= amount;
      localStorage.setItem('BJAPPBank', this.player.bank.toString())
      console.log(`Apuesta actual: ${this.currentBet}. Banco actual: ${this.player.bank}`);
    } else {
      console.log(`No tienes suficientes fondos para hacer una apuesta de ${amount}`);
    }
  }

  resetBet() {
    this.player.bank += this.currentBet
    this.currentBet = 0
    localStorage.setItem('BJAPPBank', this.player.bank.toString())
  }

  getWinner() {
    const playerScore = this.player.getScore();
    const dealerScore = this.dealer.getScore();
    if (playerScore > 21) {
      return 'dealer';
    } else if (dealerScore > 21) {
      return 'player';
    } else if (playerScore > dealerScore) {
      return 'player';
    } else if (playerScore == dealerScore) {
      return 'push';
    }
  }

  payout() {
    const winner = this.getWinner();
    if (winner === 'player') {
      this.player.bank += this.player.chips * 2;
      localStorage.setItem('BJAPPBank', this.player.bank.toString())
    } else if (winner === 'dealer') {
      this.player.bank -= this.player.chips;
    } else {
      // Player gets back chips
      this.player.bank += this.player.chips;
    }
    this.player.chips = 0;
  }

  play() {
    localStorage.setItem('BJAPPBank', this.player.bank.toString())
    this.placeBet(this.currentBet);
    this.start();
    // while (this.player.makeMove(this.dealer.hand[0]) === 'hit') {
    //   this.hit();
    // }
    // this.stand();
    // this.payout();
    // return this.getWinner();
  }
}
