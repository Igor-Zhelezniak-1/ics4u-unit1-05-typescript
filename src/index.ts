/**
 * The programm
 *
 *
 * By: Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-10-06
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const size = 144.0

function calculator(height: number, width: number): number {
  const length = size / (height * width)
  return length
}

try {
  const sWidth = prompt('Enter height: ')
  const width = parseFloat(sWidth)
  const sHeight = prompt('Enter width: ')
  const height = parseFloat(sHeight)

  if (isNaN(height) || isNaN(width)) {
    console.log('Invalid input')
  } else {
    console.log(`The wood is ${calculator(height, width)} inch(es) long`)
  }
} catch (e) {
  console.log('Invalid input')
}

console.log('\nDone.')
