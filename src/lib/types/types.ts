export type Card = {
  name: string,
  value: number,
  image: string
}
export type As = {
  name: string,
  value: {
    min: number,
    max: number
  }
  image: string
}
export type Deck = (Card|As)[]