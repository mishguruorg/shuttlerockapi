import {hostname} from '../../config/settings'
import {port} from '../../config/constants'
import makeRequest from './makeRequest'

const post = (endpoint, postData) => {
  let options = {
    hostname,
    port,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    },
    path: endpoint
  }

  return makeRequest(options, postData)
}

export default post
