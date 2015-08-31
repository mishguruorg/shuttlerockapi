/* globals describe, it */
import { boards, init } from '../../lib/'
import { email, password, accountName, boardName } from '../config/constants'

describe('When I try to get all boards', () => {
  it('It should give me a list of all boards if I am logged in', function (done) {
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
        done()
      })
      .catch(done)
  })
})

describe('When I try to get a single board', () => {
  it('It should give me information about that specific board', function (done) {
    this.timeout(7000)

    init({
      accountName,
      email,
      password
    })
      .then(() => {
        return boards.getOne(boardName)
      })
      .then(res => {
        done()
      })
      .catch(done)
  })
})
