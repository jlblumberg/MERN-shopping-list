const mongoURI = () => {
  if (process.env.NODE_ENV === 'development') {
    return `mongodb+srv://${process.env.MONGO_DB_CREDS}:${process.env.MONGO_DB_CREDS}@mern-shopping-list-ew3dr.mongodb.net/dev-shopping-list?retryWrites=true&w=majority`
  } else if (process.env.NODE_ENV === 'test') {
    return 'mongodb://localhost/testShoppingListDatabase'
  } else {
    return 'otherwise'
  }
}

const port = () => {
  if (process.env.PORT) {
    return process.env.PORT
  } else if (process.env.NODE_ENV === 'test') {
    return 5001;
  } else if (process.env.NODE_ENV === 'development') {
    return 5000;
  } else {
    throw new Error("Something is wrong with the port (check node env)")
  }
}

module.exports = {
  mongoURI: mongoURI(),
  port: port()
}