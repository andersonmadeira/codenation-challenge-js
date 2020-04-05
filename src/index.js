import { config } from 'dotenv'
import fs from 'fs'
import { getData, sendAnswer } from './api'
import { decrypt } from './caesar-cipher'
import { createHash } from 'crypto'

config()

async function processChallenge() {
  const response = await getData()
  const json = response.data

  json.decifrado = decrypt(json.cifrado, json.numero_casas)
  json.resumo_criptografico = createHash('sha1')
    .update(json.decifrado)
    .digest('hex')

  console.log('Answer:', json)

  const result = await sendAnswer(json)

  console.log('Result:', result.data)
}

processChallenge()
