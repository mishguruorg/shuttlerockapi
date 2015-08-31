import { hostname, tokenHeader } from '../../config/settings'
import {port} from '../../config/constants'
import { stringify } from 'querystring'
import makeRequest from './makeRequest'

const post = (endpoint, postData) => {
  let postDataString = stringify(postData)
  let options = {
    hostname,
    port,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postDataString.length,
    },
    path: endpoint
  }

  if (tokenHeader) {
    options.headers['Authorization'] = tokenHeader
  }

  return makeRequest(options, postDataString)
}

export default post
