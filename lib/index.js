import * as entries from './entries/'
import * as boards from './boards/'
import * as srSettings from './config/settings'
import Promise from 'bluebird'
import post from './services/commands/post'

/**
 * Initialises settings for the SR Api
 * @param settings settings and credentials
 * @param settings.accountName
 * @return {Promise}
 */
const init = settings => {
  if (!settings) {
    return Promise.reject(new Error('You haven\'t called init with any settings!'))
  }

  if (!settings.accountName || !settings.email || !settings.password) {
    return Promise.reject(new Error(`You are missing some required settings!
      Please enter accountName, email and password`))
  }

  srSettings.hostname = `${settings.accountName}.shuttlerock.com`

  return post('/v2/token', {
    email: settings.email,
    password: settings.password
  })
    .then(res => {
      srSettings.token = res.token
      srSettings.tokenHeader = `token ${res.token}`
      srSettings.restricted = res.restrict_api_access
    })
}

export {
  init,
  entries,
  boards
}
