import axios from 'axios'

class Api {
  constructor() {
    // this.baseURL = this.env.NODE_ENV === 'production' ? prod.url : dev.url
  }

  generateHeader = () => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    return headers
  }

  customFetch = (serviceName, method, body = {}) => {
    const options = {
      method,
      baseURL: this.baseURL,
      url: this.environment(serviceName),
      headers: this.generateHeader(),
      timeout: 60000,
    }

    if (method === 'GET') {
      options.params = body
    } else if (method === 'POST') {
      options.data = JSON.stringify({
        ...body,
        appContext: this.appContext,
      })
    }

    return new Promise((resolve, reject) => {
      axios
        .request(options)
        .then(result => resolve(result))
        .catch(error => {
          reject(error)
        })
    })
  }

  get = (serviceName, params) => this.customFetch(serviceName, 'GET', params)

  post = (serviceName, body) => this.customFetch(serviceName, 'POST', body)
}

export default new Api()
