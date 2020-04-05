import axios from 'axios'
import FormData from 'form-data'
import fs from 'fs'

export function getData() {
  const apiUrl = process.env.API_DATA_URL
  const token = process.env.API_TOKEN

  return axios.get(`${apiUrl}?token=${token}`)
}

export function sendAnswer(jsonAnswer) {
  const apiUrl = process.env.API_ANSWER_URL
  const token = process.env.API_TOKEN
  const form = new FormData()
  const fileContent = JSON.stringify(jsonAnswer)

  form.append('answer', fileContent, 'answer.json')

  return axios.post(`${apiUrl}?token=${token}`, form, {
    headers: form.getHeaders(),
  })
}
