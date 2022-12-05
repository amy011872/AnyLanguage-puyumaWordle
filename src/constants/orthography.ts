import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'c',
  'd',
  'e',
  'h',
  'i',
  'k',
  'l',
  'lr',
  'm',
  'n',
  'ng',
  'p',
  'r',
  's',
  't',
  'tr',
  'u',
  'v',
  'w',
  'y',
  'z',
  "'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
