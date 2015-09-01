# shuttlerockapi
A wrapper for the shuttlerock api

## Usage
```
  npm install --save shuttlerockapi
```
```
  ES6 Syntax
  
  import * as shuttlerock from 'shuttlerockapi'
  
  shuttlerock.init({
    email: <API account Email>,
    accountName: <Your Account Name (the xxxx from https://xxxx.shuttlerock.com)>,
    password: <API account Password>
  })
    .then(res => {
      let token = res.token //this is your api token, you can send this instead of email and password now
      
      return shuttlerock.entries.createEntry(<Your Board Id>, {
        name: 'test entry',
        type: 'photo',
        image_url: 'http://i.imgur.com/S2vnl.jpg?1'
      })
    })
    .then(res => {
      console.log('all done')
    })
    .catch(err => console.error(err))
    
```

## Supported Methods

### Boards

```
  import { boards } from 'shuttlerockapi'
  
  boards.getOne(boardId) http://developer.shuttlerock.com/apidoc/boards/show.html
  
  boards.getAll() http://developer.shuttlerock.com/apidoc/boards/index.html
```

### Entries
```
  import { entries } from 'shuttlerockapi'
  
  entries.createEntry(boardId, entryData) http://developer.shuttlerock.com/apidoc/entries/create.html

```

Instructions for contributors

To Pull the repo and run it

```
  git clone git@github.com:mishguruorg/shuttlerockapi.git
  cd shuttlerockapi
  npm install
  SR_EMAIL=<your shuttlerock email> SR_PASSWORD=<your shuttlerock password> SR_ACC_NAME=<your shuttlerock account name> npm test
```
