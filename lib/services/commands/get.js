import { hostname, tokenHeader } from '../../config/settings'
import { port } from '../../config/constants'
import makeRequest from './makeRequest'

const get = (endpoint) => {
  let options = {
    hostname,
    port,
    method: 'GET',
    path: endpoint,
    headers: {}
  }

  if (tokenHeader) {
    options.headers['Authorization'] = tokenHeader
  }

  return makeRequest(options)
}

export default get
