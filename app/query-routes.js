import log from "../util/log";

function* fetchMessage() {
  this.body = {
    author: "Jihdeh",
    github: "https://github.com/jihdeh/simple-node",
    twitter: "@slim_temple"
  };
}

function* throwErrorByDefault() {
  const errorType = validationError ? 'validation' : 'other';
  const status = validationError ? 400 : 500;
  //validationError isn't defined
  //This is good, so your application doesn't break completely when an error is encountered
}

export default { fetchMessage, throwErrorByDefault };
