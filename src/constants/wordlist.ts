import { CONFIG } from './config'

export const WORDS = [
  "'alum",
  'alusu',
  "dare'",
  'danaw',
  'harem',
  'lidam',
  'lipad',
  'lumay',
  'lupas',
  'impic',
  'liked',
  'intaw',
  'kayan',
  'kavang',
  'kelun',
  'kulang',
  'kenau',
  'kalritr',
  'kemay',
  'malii',
  'saytu',
  'salaw',
  'savak',
  "selu'",
  'suwan',
  'senay',
  'sahar',
  'sayhu',
  'siyak',
  'siyaw', 
  'sinsi',
  'takilr',
  'tutur',
  'turak',
  'tutus',
  'tanse',
  "tilu'",
  'pukuy',
  "pana'",
  'paisu',
  'pitaw',
  'puran',
  "ruma'",
  'resuk',
  'runev',
  'radis',
  'mekan',
  'ngiyaw',
  'ngdan',
  'nanku',
  'nantu',
  "ni'en",
  'ungay',
  'ungtran',
  "vu'ir",
  "vira'",
  'verek',
  'veray',
  'vulray',
  'vulay',
  'vulraw',
  'zanum',
  'zenan',
  'zekalr',
  "'ilras",
  "'udalr",
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
