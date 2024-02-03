import { HttpsProxyAgent } from 'https-proxy-agent'
import nodeFetch from 'node-fetch'
import { isDevelopment } from '@/lib/utils'

const proxyfetch = (...args) => {

  if (isDevelopment) {
    const httpsProxyAgent = new HttpsProxyAgent(process.env.http_proxy)

    const [url, options] = args
    return nodeFetch(url, {
      ...options,
      agent: httpsProxyAgent
    })
  } else {
    return fetch.apply(...args)
  }
}

export default proxyfetch