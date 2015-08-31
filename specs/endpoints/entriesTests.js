/* globals describe, it */
import { entries, init } from '../../lib/'
import { email, password, accountName } from '../config/constants'

const imageUrl = 'https://s3-us-west-2.amazonaws.com/mishguru-dev/mishgurudev/jladuval326a9ad9-4270-4aab-9077-446a0a9c1f4e.jpeg'
const imageType = 'photo'

describe('When I try to create a new entry', () => {
  it('It should post to the correct board if I use a valid boardId', function (done) {
    this.timeout(7000)

    init({
      accountName,
      email,
      password
    })
      .then(() => {
        return entries.createEntry('mishtest', {
          type: imageType,
          image_url: imageUrl,
          name: 'Test Snap 1'
        })
      })
      .then(res => {
        done()
      })
      .catch(done)
  })
})
