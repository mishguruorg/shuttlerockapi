import post from '../services/commands/get'

/**
 * Get a list of boards
 * @return {Promise<response>} The response from the server in json
 */
const getAll = (boardId, data) => {
  return post('/v2/boards.json', data)
}

export { getAll }
