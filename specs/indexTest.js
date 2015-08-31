/* globals describe, it */
import {expect} from 'chai'
import * as api from '../lib/'
import * as settings from '../lib/config/settings'
import { email, password, accountName, token } from './config/constants'

describe('When I initialise the library', () => {
  it('It should throw an error if I do not input any options', done => {
    api.init()
      .then(() => {
        done(new Error('No error thrown with No parameters'))
      })
      .catch(err => {
        if (err.toString().indexOf('called init with any settings') !== -1) {
          done()
        } else {
          done(err)
        }
      })
  })

  it('It should get a token if email and password are passed in', function (done) {
    if (!email && !password) return done()

    this.timeout(5000)

    api.init({
      accountName,
      email,
      password
    })
      .then(res => {
        console.log(res)
        expect(settings.hostname).to.be.eq(`${accountName}.shuttlerock.com`)
        expect(settings.token).to.exist
        done()
      })
      .catch(done)
  })

  it('It should save a token if it is passed in', function (done) {
    if (!token) return done()

    this.timeout(5000)

    api.init({
      accountName,
      token
    })
      .then(() => {
        expect(settings.hostname).to.be.eq(`${accountName}.shuttlerock.com`)
        expect(settings.token).to.eq(token)
        done()
      })
      .catch(done)
  })
})
