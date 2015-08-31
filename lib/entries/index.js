import post from '../services/commands/post'

/**
 * Create an entry on a specific board
 * @param  boardId {String}[description]
 * @param  data Data for this board entry
 * @param  data.name {String} name for this entry
 * @param  data.type {String} media type, must be 'photo', 'video' or 'text'
 * @param  data.image_url {String} The URL to fetch this piece of media from
 * @return {Promise<response>} The response from the server in json
 */
const createEntry = (boardId, data) => {
  return post(`/v2/boards/${boardId}/entries.json`, data)
}

export { createEntry }
