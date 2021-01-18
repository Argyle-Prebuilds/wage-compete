import axios from 'axios'
const dotenv = require('dotenv');
dotenv.config();

const API_URL = process.env.REACT_APP_API_URL

const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

const AUTH = {
  username: process.env.REACT_APP_CLIENT_ID,
  password: process.env.REACT_APP_CLIENT_SECRET

}

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      timeout: 5000,
      headers: {
        ...DEFAULT_HEADERS,
      },
      auth: {
        ...AUTH,
      },
    })
  }

  setAuthCredentials({ clientId, clientSecret }) {
    Object.assign(this.api.defaults, {
      auth: {
        username: clientId,
        password: clientSecret,
      },
    })
  }

  async getUsers() {
    const resp = await this.api.get('/users', {
      params: {
        limit: 100,
        ordering: '-created_at',
      },
    })
    return resp.data.results
  }


  async getAccount(accountId) {
    const resp = await this.api.get(`/accounts/${accountId}`)
    return resp.data
  }

  async getAccounts(userId) {
    const resp = await this.api.get('/accounts', {
      params: {
        user: userId,
        limit: 100,
        ordering: '-created_at',
      },
    })

    return resp.data.results
  }

  async getPayouts(accountId) {
    const resp = await this.api.get('/payouts', {
      params: {
        limit: 100,
        ordering: '-created_at',
        account: accountId,
      },
    })
    return resp.data.results
  }

  async getProfile(accountId) {
    const resp = await this.api.get('/profiles', {
      params: {
        limit: 100,
        ordering: '-created_at',
        account: accountId,
      },
    })
    return resp.data.results
  }
}

export default new Api()
