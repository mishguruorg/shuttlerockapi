import get from '../services/commands/get'
import querystring from 'querystring'

/**
 * Get a list of boards
 * @return {Promise<response>} The response from the server in json
 */
const getAll = () => {
  return get('/v2/boards.json')
}

const getOne = boardId => {
  return get(`/v2/boards/${querystring.escape(boardId)}.json`)
}

export { getAll, getOne }
