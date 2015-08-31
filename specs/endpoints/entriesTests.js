/* globals describe, it */
import { entries, init } from '../../lib/'
import { token, accountName, boardName } from '../config/constants'

const imageUrl = 'https://s3-us-west-2.amazonaws.com/mishguru-dev/mishgurudev/jladuval326a9ad9-4270-4aab-9077-446a0a9c1f4e.jpeg'
const imageType = 'photo'

const videoUrl = 'https://s3-us-west-2.amazonaws.com/mishguru-dev/mishgurudev/camcamlob8808c6c-cde7-4894-bde3-7fc1b8748f0b.mp4'
const videoType = 'video'

describe('When I try to create a new entry', () => {
  it('It should post an image to the correct board if I use a valid boardId', function (done) {
    this.timeout(7000)

    init({
      accountName,
      token
    })
      .then(() => {
        return entries.createEntry(boardName, {
          type: imageType,
          image_url: imageUrl,
          name: 'Test Snap'
        })
      })
      .then(res => {
        done()
      })
      .catch(done)
  })

  it('It should post a video to the correct board if I use a valid boardId', function (done) {
    this.timeout(7000)

    init({
      accountName,
      token
    })
      .then(() => {
        return entries.createEntry(boardName, {
          type: videoType,
          image_url: videoUrl,
          name: 'Test Snap'
        })
      })
      .then(res => {
        done()
      })
      .catch(done)
  })
})
