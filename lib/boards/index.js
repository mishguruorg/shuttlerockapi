import get from '../services/commands/get'

/**
 * Get a list of boards
 * @return {Promise<response>} The response from the server in json
 */
const getAll = () => {
  return get('/v2/boards.json')
}

const getOne = boardId => {
  return get(`/v2/boards/${boardId}.json`)
}

export { getAll, getOne }
