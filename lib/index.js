import entries from './entries/'
import * as srSettings from './config/settings'

let token

/**
 * Initialises settings for the SR Api
 * @param settings settings and credentials
 * @param settings.accountName
 * @type {[type]}
 */
const init = settings => {
  srSettings.hostname = `${settings.accountName}.shuttlerock.com`
}

export {
  entries,
  init
}
