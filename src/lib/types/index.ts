export type CardType = {
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
export type Deck = (CardType|As)[]

export type Chip = {
  value: number,
  image: string;
}