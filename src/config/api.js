import axios from 'axios'
import md5 from 'js-md5'

// https://developer.marvel.com/documentation/authorization
const publicKey = process.env.REACT_APP_MARVEL_PUB_KEY
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY
const ts = new Date().getTime()

export default axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: `${process.env.REACT_APP_MARVEL_PUB_KEY}`,
    ts,
    hash: md5(ts + privateKey + publicKey),
  },
})
