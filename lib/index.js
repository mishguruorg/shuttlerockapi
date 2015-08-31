import * as entries from './entries/'
import * as srSettings from './config/settings'

/**
 * Initialises settings for the SR Api
 * @param settings settings and credentials
 * @param settings.accountName
 * @type {[type]}
 */
const init = settings => {
  if (!settings || !settings.hostname) {
    throw new Error('You need to at least input a hostname to use the shuttlerock api')
  }

  srSettings.hostname = `${settings.accountName}.shuttlerock.com`
}

export {
  init,
  entries
}
