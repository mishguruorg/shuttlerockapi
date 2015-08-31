/* globals describe, it */
import {expect} from 'chai'
import * as api from '../lib/'
import * as settings from '../lib/config/settings'
import { email, password, accountName } from './config/constants'

describe('When I initialise the library', () => {
  it('It should throw an error if I do not input any options', done => {
    api.init()
      .then(() => {
        done(new Error('No error thrown with No parameters'))
      })
      .catch(err => {
        if(err.indexOf('called init with any settings') !== -1) {
          done()
        } else {
          done(err)
        }
      })
  })

  it('It should change add appropriate fields to settings when they are passed in', function(done) {
    this.timeout(5000)

    api.init({
      accountName,
      email,
      password
    })
      .then(() => {
        expect(settings.hostname).to.be.eq(`${accountName}.shuttlerock.com`)
        expect(settings.token).to.exist
        done()
      })
      .catch(done)


  })
})
