/* globals describe, it */
import { boards, init } from '../../lib/'
import { email, password, accountName } from '../config/constants'

describe('When I try to get boards', () => {
  it('It should post to the correct board if I use a valid boardId', function (done) {
    this.timeout(7000)

    init({
      accountName,
      email,
      password
    })
      .then(() => {
        return boards.getAll()
      })
      .then(res => {
        console.log(res)
        done()
      })
      .catch(done)
  })
})
