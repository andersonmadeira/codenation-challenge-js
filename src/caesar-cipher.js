const letters = 'abcdefghijklmnopqrstuvwxyz'

export const decrypt = (encrypted, step) =>
  encrypted
    .split('')
    .reduce(
      (acc, letter) =>
        acc +
        (letters.indexOf(letter) === -1
          ? letter
          : letters.slice(letters.indexOf(letter) - step)[0]),
      ''
    )

export const encrypt = (text, step) =>
  text.reduce(
    (acc, letter) =>
      acc + letters.slice(letters.indexOf(letter) + (step % letters.length))[0]
  )
