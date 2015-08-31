/* globals describe, it */
import {expect} from 'chai'
import * as api from '../lib/'

describe('When I initialise the library', () => {
  it('It should throw an error if I do not input any options', () => {
    expect(api.init).to.throw(Error)
  })
})
