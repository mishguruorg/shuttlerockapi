let email = process.env.SR_EMAIL
let password = process.env.SR_PASSWORD
let accountName = process.env.SR_ACC_NAME
let boardName = 'testboard'
let token = process.env.SR_TOKEN

if (!accountName || (!token && (!password || !email))) {
  console.error('You must specify a token or an email and password as well as account name to run these tests')
  process.exit(0)
}

export {
  email,
  password,
  accountName,
  boardName,
  token
}
