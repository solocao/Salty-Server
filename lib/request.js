import fetch from 'node-fetch'
import moment from 'moment'
import _ from 'lodash'

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

export default function(base, path) {
  const params = {
    headers: {
      ...DEFAULT_HEADERS
    }
  }

  const response = fetch(`${base}${path}`, params)

  response.catch(error => {
    return error
  })

  return response
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then(function(response) {
      return response.json()
    })
    .catch(function(error) {
      return error
    })
}
