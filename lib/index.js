import * as entries from './entries/'
import * as boards from './boards/'
import * as srSettings from './config/settings'
import Promise from 'bluebird'
import post from './services/commands/post'

/**
 * Initialises settings for the SR Api
 * @param settings settings and credentials
 * @param settings.accountName
 * @param settings.email account email if no token supplied
 * @param settings.password account password if no token supplied
 * @param settings.token
 * @return {Promise}
 */
const init = settings => {
  if (!settings) {
    return Promise.reject(new Error('You haven\'t called init with any settings!'))
  }

  let noEmailPassword = (!settings.email || !settings.password)
  if (!settings.accountName || (!settings.token && noEmailPassword)) {
    return Promise.reject(new Error(`You are missing some required settings!
      Please enter accountName, and either an email and password, or an api token`))
  }

  srSettings.hostname = `${settings.accountName}.shuttlerock.com`

  if (noEmailPassword) {
    srSettings.token = settings.token
    srSettings.tokenHeader = getTokenHeader(settings.token)

    return Promise.resolve(srSettings)
  }

  return post('/v2/token', {
    email: settings.email,
    password: settings.password
  })
    .then(res => {
      srSettings.token = res.token
      srSettings.tokenHeader = getTokenHeader(res.token)
      srSettings.restricted = res.restrict_api_access
      return srSettings
    })
}

const getTokenHeader = token => `token ${token}`

export {
  init,
  entries,
  boards
}
