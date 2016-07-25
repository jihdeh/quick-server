# quick-server

Quick server is mini application which would serve as your backend using nodejs and koajs generators.
It doesn't come with any database configurations.

Why would you need this?
 1. It's 2016 and you should have advanced to seperating your frontend from the backend
 2. It uses es6, which is properly configured
 3. Test environment has been setup
 4. All npm packages are currently up to date

Ingredients =>
  * [Koajs](https://github.com/koajs/koa) - for requests and more
  * [winston](https://github.com/winstonjs/winston) - for logging
  * [mocha](https://mochajs.org/) - test
  * [Istanbul](https://github.com/gotwarlost/istanbul) - test coverage

Getting Started
  
```
$ npm install
```
To run app on production
```
$ npm run start
```
*Remeber to set NODE_ENV to production*

-------
To run app on development
```
$ NODE_ENV=development npm run dev
```

To run tests
```
$ npm run test
```

And when application starts
*visit `http://localhost:6500`*
To see demo api message visit:
*`http://localhost:6500/api/message`* either on postman or your browser

And to see a demo of a broken api and the message it would return
visit:
*`http://localhost:6500/api/throwError`*
Now the beauty of this is, anytime there's an error with your api, it doesn't break the whole application
Instead it logs the error, and returns an error message, and the app still continues to run as normal.

Contributions are welcome.

