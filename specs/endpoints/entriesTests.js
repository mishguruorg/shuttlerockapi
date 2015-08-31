/* globals describe, it */
import { expect } from 'chai'
import { entries, init } from '../../lib/'

const accountName = 'mishguru'
const imageUrl = 'https://s3-us-west-2.amazonaws.com/mishguru-dev/mishgurudev/jladuval326a9ad9-4270-4aab-9077-446a0a9c1f4e.jpeg'
const imageType = 'photo'

describe('When I try to create a new entry', () => {
  it('It should post to the correct board if I use a valid boardId', done => {
    init({
      accountName
    })

    entries.createEntry('mishtest', {
      imageType,
      imageUrl,
      name: 'Mish Test Snap 1'
    })
      .then(res => {
        console.log(res)
        done()
      })
      .catch(done)
  })
})
