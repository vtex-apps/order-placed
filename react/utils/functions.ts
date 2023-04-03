import { accountName, baseApi, baseApiQA } from './constants'

interface Endpoints {
  clientsApiUrl: string
}

export const getEndpoints = (account: string): Endpoints => {
  const apiUrl = account === accountName ? baseApi : baseApiQA
  const masterData = `${apiUrl}masterdata/`

  return {
    clientsApiUrl: `${masterData}clients`,
  }
}
