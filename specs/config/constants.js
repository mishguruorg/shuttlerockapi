let email = process.env.SR_EMAIL
let password = process.env.SR_PASSWORD
let accountName = process.env.SR_ACC_NAME

if (!email || !password || !accountName) {
  console.error('You must specify email, password and account name to run these tests')
  process.exit(0)
}

export {
  email,
  password,
  accountName
}
