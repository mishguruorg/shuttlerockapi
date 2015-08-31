import Promise from 'bluebird'
import https from 'https'

/**
 * make an https request
 * @param  options
 * @param  postData
 * @return {Promise} response from server
 */
const makeRequest = (options, postData) => {
  return new Promise((resolve, reject) => {
    let req = https.request(options, res => {
      let data = ''

      res.setEncoding('utf8')
      res.on('data', chunk => {
        data += chunk
      })

      res.on('end', () => {
        let dataJson = JSON.parse(data)
        if (dataJson.success === false) {
          reject(dataJson)
        } else {
          resolve(dataJson)
        }
      })
    })

    req.on('error', reject)

    if (postData) {
      req.write(postData)
    }

    req.end()
  })
}

export default makeRequest
