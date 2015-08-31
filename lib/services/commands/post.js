import {hostname} from '../../config/settings'
import {port} from '../../config/constants'
import makeRequest from './makeRequest'

const post = (endpoint, postData) => {
  let postDataString = JSON.stringify(postData)
  let options = {
    hostname,
    port,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postDataString.length
    },
    path: endpoint
  }

  return makeRequest(options, postDataString)
}

export default post
