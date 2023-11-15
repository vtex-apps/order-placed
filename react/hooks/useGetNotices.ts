import { useEffect, useState } from 'react'

export type NoticeType = {
  content: string
  level: string
  slotName: string
  // Might remove these
  startTime?: string
  endTime?: string
  app?: boolean
  web?: boolean
}

export const sampleNotices: NoticeType[] = [
  {
    content: 'Message goes here. Max of 2 lines.',
    level: 'info',
    startTime: '2023-11-06T13:08:50.974+0200',
    endTime: '2023-11-30T13:08:50.974',
    app: true,
    web: true,
    slotName: 'ORDER_COMPLETE_OVERALL',
  },
]

const getNoticesBaseApi = () => {
  const prodHosts = ['bash.com', 'preprod--thefoschini.myvtex.com']

  if (prodHosts.includes(window.location.host)) {
    return 'https://bash.com/api/customer-notices'
  }

  return 'https://staging.tfglabs.dev/api/customer-notices'
}

export const fetchNotices = async (slots: string) => {
  const baseUrl = getNoticesBaseApi()

  const url = new URL(baseUrl)

  url.searchParams.set('slots', slots)
  url.searchParams.set('web', '1')

  try {
    const response = await fetch(url.toString())

    if (!response.ok) {
      throw new Error(`GET_ORDER_SUCCESS_NOTICES_ERROR: ${response.statusText}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Could not load notices on order success:', error)

    return Promise.reject(Error('Could not load notices'))
  }
}

const useGetNotices = () => {
  const [notices, setNotices] = useState<NoticeType[]>([])

  useEffect(() => {
    fetchNotices('order_complete')
      .then((data: NoticeType[]) => {
        setNotices(data)
      })
      .catch((error) => {
        console.error('Could not load notices:', error)
      })
  }, [])

  return notices
}

export default useGetNotices
