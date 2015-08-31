/* globals describe, it */
import {expect} from 'chai'
import * as api from '../lib/'
import * as settings from '../lib/config/settings'

describe('When I initialise the library', () => {
  it('It should throw an error if I do not input any options', () => {
    expect(api.init).to.throw(Error)
  })

  it('It should change add appropriate fields to settings when they are passed in', () => {
    let accountName = 'mishGuru'
    api.init({
      accountName
    })

    expect(settings.hostname).to.be.eq(`${accountName}.shuttlerock.com`)
  })
})
