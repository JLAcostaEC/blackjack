import { Chip } from "../types";

const chips: Chip[] = [];
const chipList = [10, 50, 100, 500]

chipList.forEach(item => chips.push({value: item, image: '/images/chips/' + item + '.png'}))

export function RegisterChips() {
  return chips
}